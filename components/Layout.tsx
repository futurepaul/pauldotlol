import Head from "next/head";
import { Window } from "../components/Window";
import { Nav } from "../components/Nav";

const Layout = ({ children, pageTitle, windowTitle, navActive }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <script async src="https://btcpay.paul.lol/modal/btcpay.js"></script>
      </Head>
      <div>
        <main className="column">
          <div>
            <h1 className="logo">
              <a href="/">
                <img src="/paul_logo_hover.png" alt="Paul's cool logo" />
              </a>
            </h1>
          </div>
          <div className="windows">
            <Nav active={navActive} />
            <Window title={windowTitle}>{children}</Window>
          </div>
        </main>
        <style jsx>{`
          .logo img {
            width: 317px;
          }
          .column {
            display: flex;
            flex-direction: column;
          }

          .windows {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            align-content: stretch;
          }

          @media all and (min-width: 800px) {
            .windows {
              flex-direction: row;
            }
          }

          main {
            justify-content: center;
            align-items: center;
          }

          h1 {
            color: white;
            font-size: 96px;
            font-weight: 1000;
            font-style: italic;
            margin: 0;
            margin-top: 1rem;
          }

          .alt-logo {
            transform: scale(0);
          }
        `}</style>
      </div>
    </>
  );
};

export default Layout;
