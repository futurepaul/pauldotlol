import Layout from "../components/Layout";
import { useState } from "react";

declare global {
  interface Window {
    btcpay: any;
  }
}

const Pay = () => {
  const [adTopic, setAdTopic] = useState("");
  const [name, setName] = useState("");
  const [invoiceStatus, setInvoiceStatus] = useState(null);

  const createInvoice = async (name: string, ad: string) => {
    try {
      const res = await fetch("/api/invoice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, ad }),
      });

      const data = await res.json();
      return data.id;
    } catch (e) {
      return e;
    }
  };

  const getInvoiceStatus = async (id: string) => {
    try {
      const res = await fetch(`/api/getInvoiceStatus?id=${id}`);
      const data = await res.json();
      return data;
    } catch (e) {
      return e;
    }
  };

  return (
    <Layout pageTitle="paul.lol" windowTitle="PAY PAUL" navActive="PAY">
      <main>
        <article>
          <h1>Pay Paul</h1>
          <section>
            <h2>PATREON</h2>
            <div className="prose">
              <div className="column">
                <a className="button" href="https://www.patreon.com/futurepaul">
                  $5 on Patreon
                </a>
              </div>
              <div className="column">
                <p>
                  I'd love to do this full time. Please consider supporting me
                  monthly on Patreon. I'm still figuring out what perks I can
                  offer, but for now it's just pure donation thing and it's much
                  appreciated!
                </p>
              </div>
            </div>
          </section>
          <section>
            <h2>FAKE POD AD</h2>
            <div className="prose">
              <div className="column">
                {invoiceStatus === "paid" ? (
                  <>
                    <p>Thank you for your real purchase of a fake ad</p>
                    <p>
                      Your name is supposedly <strong>{name}</strong>
                    </p>
                    <p>
                      And the fake ad is about <strong>{adTopic}</strong>
                    </p>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="A name so I can thank you"
                    ></input>
                    <input
                      type="text"
                      value={adTopic}
                      onChange={(e) => setAdTopic(e.target.value)}
                      placeholder="Topic for fake ad"
                    ></input>
                    <button
                      className="button"
                      onClick={() => {
                        createInvoice(name, adTopic).then((invoiceId) => {
                          window.btcpay.onModalWillLeave(() => {
                            getInvoiceStatus(invoiceId).then((invoice) => {
                              console.log(invoice);
                              setInvoiceStatus(invoice.status);
                            });
                          });
                          window.btcpay.showInvoice(invoiceId);
                        });
                      }}
                    >
                      $100 of BTC
                    </button>
                  </>
                )}
              </div>
              <div className="column">
                {invoiceStatus === "paid" ? (
                  <p></p>
                ) : (
                  <p>
                    If you'd prefer to support my longterm financial
                    independence via a Bitcoin donation, I will gladly create a
                    fake ad on the podcast for the product or brand of your
                    choosing.
                  </p>
                )}
              </div>
            </div>
          </section>
        </article>
      </main>

      <style jsx>{`
        @media all and (min-width: 800px) {
          main {
            width: 35rem;
          }

          .prose {
            display: flex;
          }
        }

        input[type="text"] {
          border: 1px solid black;
          padding: calc(0.5rem - 1px);
          margin-top: 1px;
          margin-bottom: 1rem;
          font-family: IBM Plex Serif;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 110%;
        }
        .button {
          color: white;
          background-color: black;
          padding: 0.5rem;
          font-family: IBM Plex Serif;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 110%;
          border: 1px solid white;
        }
        section {
          padding: 2rem;
        }
        .prompt {
          font-family: monospace;
          font-weight: bold;
          color: rgba(179, 255, 102, 230);
          position: relative;
          margin-left: 60px;
          margin-top: 60px;
        }
        .subscribe {
          margin-top: 2rem;
        }
        main {
          margin: auto;
          padding-bottom: 4rem;
        }
        article {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        em {
          text-decoration: underline;
        }

        .responsive {
          max-width: 100%;
          height: auto;
        }

        .column {
          display: flex;
          flex-direction: column;
          width: 15rem;
          margin: 1rem;
          align-items: center;
          justify-content: center;
        }
        p,
        h3 {
          font-family: IBM Plex Serif;
          font-style: normal;
          font-weight: 300;
          line-height: 110%;

          /* or 18px */
          letter-spacing: -0.05em;
        }

        a {
          color: inherit;
          text-decoration: none;
          margin-bottom: 0.5rem;
          margin-top: 1rem;
        }

        p {
          text-indent: 20px;
          font-size: 16px;
        }

        h3 {
          margin-top: 0.25rem;
          margin-bottom: 0;
          font-size: 14px;
        }
        h1 {
          font-family: IBM Plex Serif;
          font-style: normal;
          font-weight: 300;
          font-size: 72px;
          line-height: 94%;
          margin: 0;
          /* or 68px */
          letter-spacing: -0.065em;
        }
        h2 {
          font-family: Inter;
          font-style: italic;
          font-weight: 1000;
          font-size: 1.5rem;
          margin: 0.25rem;
          border-bottom: 1px dotted black;
        }
        .footer {
          display: flex;
          align-items: center;
        }
        .deck {
          height: 473px;
          width: 442px;
          margin-bottom: -50px;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0) 70%,
              rgba(255, 255, 255, 1) 90%
            ),
            url(/cyberdeck.png);
        }
      `}</style>
    </Layout>
  );
};

export default Pay;
