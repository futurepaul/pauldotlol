import { NowRequest, NowResponse } from "@now/node";
const btcpay = require("btcpay");

const PRIVATEKEY = process.env.BTCPAY_KEY;
const MERCHANT = process.env.BTCPAY_MERCHANT;
const BTCPAYURL = process.env.BTCPAY_URL;

console.log(PRIVATEKEY);
const keypair = btcpay.crypto.load_keypair(Buffer.from(PRIVATEKEY, "hex"));

// Recreate client
const client = new btcpay.BTCPayClient(BTCPAYURL, keypair, {
  merchant: MERCHANT,
});

export default (req: NowRequest, res: NowResponse) => {
  const { id } = req.query;
  //   const { invoiceId } = req.body;
  client
    .get_invoice(id)
    .then((invoice) => {
      console.log(invoice);
      res.status(200).send(invoice);
    })
    .catch((err) => console.log(err));
};
