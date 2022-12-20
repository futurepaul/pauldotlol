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
          <div className="windows">
            <Window title={windowTitle}>{children}</Window>
            <Window title="INFO">
              <h2 id="info">Info</h2>
              <ul>
                <li>Austin, TX</li>
                <li>509 845-1595</li>
                <li>
                  <a href="mailto:paul@paul.lol">paul@paul.lol</a>
                </li>
                <li>
                  <a
                    href="
                    https://github.com/futurepaul"
                  >
                    futurepaul on github
                  </a>
                </li>
              </ul>
              <h2 id="skills">Skills</h2>
              <ul>
                <li>Svelte</li>
                <li>React</li>
                <li>React Native</li>
                <li>Next.js</li>
                <li>SvelteKit</li>
                <li>TypeScript</li>
                <li>Rust</li>
                <li>Figma</li>
                <li>Git / GitHub</li>
                <li>HTML / CSS / Flexbox</li>
              </ul>
              <h2 id="education">Education</h2>
              <ul>
                <li>Code reviews</li>
                <li>Udemy</li>
                <li>YouTube</li>
                <li>Buidl Bootcamp</li>
              </ul>
            </Window>
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
            flex-direction: row;
            justify-content: center;
            align-items: start;
            align-content: stretch;
          }

          main {
            justify-content: center;
            align-items: center;
          }
          p,
          h3,
          li {
            font-size: 14px;
            font-family: IBM Plex Serif;
            font-style: normal;
            font-weight: 300;
            line-height: 110%;

            /* or 18px */
            letter-spacing: -0.05em;
          }

          ul {
            list-style: none;
            padding-left: 0;
          }

          li {
            padding-left: 1em;
            padding-bottom: 0.1em;
          }

          h2 {
            font-family: Inter;
            font-style: italic;
            font-weight: 1000;
            font-size: 1.5rem;
            margin: 0.25rem;
            border-bottom: 1px dotted black;
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
          a {
            color: blue;
          }
        `}</style>
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI,
              Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
              Helvetica Neue, sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </>
  );
};

export default Layout;
