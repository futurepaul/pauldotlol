import Head from "next/head";
import CyberDeck from "../components/cyberdeck";

const Icon = ({ image, title, href, out = false, active = false }) => {
  return (
    <div>
      <a href={href}>
        <div className={`graybox ${active && "active"}`}>
          <img src={image}></img>
        </div>
        <h3>
          {title}
          {out && <span>↗</span>}
        </h3>
      </a>
      <style jsx>{`
        img {
          width: 64px;
          height: 64px;
          margin: 2rem;
          image-rendering: crisp-edges;
        }

        span {
          font-size: 0.75rem;
          font-weight: 300;
          vertical-align: middle;
        }

        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .graybox {
          background-color: #e2e0e0;
          padding: 4px;
          box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25),
            -1px -1px 0px rgba(255, 255, 255, 0.25);
          border-radius: 2px;
        }

        .active {
          background: #989898;
          box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.25),
            inset -1px -1px 1px rgba(255, 255, 255, 0.25);
        }

        h3 {
          font-style: italic;
          font-weight: 1000;
          font-size: 1.5rem;
          margin: 0.25rem;
          border-bottom: 1px dotted black;
        }

        a {
          color: inherit;
          text-decoration: none;
          margin-bottom: 0.5rem;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
};

const Window = ({ children, title }) => {
  return (
    <div className="window graybox">
      <div className="window-bar">
        <div className="bar-button close-button">
          <h3>x</h3>
        </div>
        <div className="graybox row">
          <div className="wrap-shadow-lines">
            <div className="shadow-line"></div>
            <div className="shadow-line"></div>
            <div className="shadow-line"></div>
          </div>
          <h3>{title}</h3>
          <div className="wrap-shadow-lines">
            <div className="shadow-line"></div>
            <div className="shadow-line"></div>
            <div className="shadow-line"></div>
          </div>
        </div>
        <div className="bar-button min-button">
          <h3>-</h3>
        </div>
      </div>
      <div className="window-inner">{children}</div>
      <style jsx>{`
        .column {
          display: flex;
          flex-direction: column;
        }
        .row {
          display: flex;
          flex-direction: row;
        }

        .graybox {
          flex: 1;
          background-color: #e2e0e0;
          padding: 4px;
          box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25),
            -1px -1px 0px rgba(255, 255, 255, 0.25);
          border-radius: 2px;
        }

        .window {
          display: flex;
          flex-direction: column;
          margin: 0.5rem;
        }

        .window-bar {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 4px;
        }

        h3 {
          font-style: italic;
          font-weight: 1000;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
          color: #ffffff;
          margin: 0;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }
        .bar-button {
          border: 1px solid #ffffff;
          background: #e2e0e0;
          box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25),
            -1px -1px 0px rgba(255, 255, 255, 0.25);
          border-radius: 2px;
        }
        .close-button {
          margin-right: 4px;
        }
        .min-button {
          margin-left: 4px;
        }
        .window-inner {
          background: #ffffff;
          box-shadow: -1px -1px 0px rgba(0, 0, 0, 0.25),
            1px 1px 0px rgba(255, 255, 255, 0.25);
          border-radius: 2px;
          padding: 1rem;
        }
        .mini-line {
          height: 2px;
          background: white;
          box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.25),
            inset 0px -1px 1px rgba(255, 255, 255, 0.25);
          margin: 1px;
        }

        .shadow-line {
          height: 2px;
          background: #e2e0e0;
          box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.25),
            inset 0px -1px 1px rgba(255, 255, 255, 0.25);
          min-width: 1rem;
          margin: 1px;
        }

        .wrap-shadow-lines {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

const Home = () => (
  <div className="container">
    <Head>
      <title>paul.lol</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="column">
      <div>
        <h1 className="logo">
          <a href="/">
            <img src="/paul_logo_hover.png" alt="Paul's cool logo" />
          </a>
        </h1>
      </div>
      <div className="windows row">
        <nav>
          <Window title="APPS">
            <Icon
              image="/icons/podcast.png"
              title="POD"
              href="#"
              active={true}
            />
            <Icon image="/icons/pay.png" title="PAY" href="#" />
            <Icon
              image="/icons/blog.png"
              title="BLOG"
              out={true}
              href="https://pauljmiller.com"
            />
            <Icon
              image="/icons/projects.png"
              title="PROJECTS"
              out={true}
              href="https://pauljmiller.com/projects.html"
            />
          </Window>
        </nav>
        <Window title="POD">
          <CyberDeck />
        </Window>
      </div>
    </main>
    <style jsx>{`
      iframe {
        border: none;
        height: 90vh;
        width: 35rem;
      }
      .column {
        display: flex;
        flex-direction: column;
      }
      .row {
        display: flex;
        flex-direction: row;
      }

      .windows {
        flex-wrap: wrap;
        justify-content: center;
        align-items: start;
        align-content: stretch;
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

    <style jsx global>{`
      html,
      body {
        background-image: url(/paul_b2.png);
        background-color: #00a3ff;
        padding: 0;
        margin: 0;
        font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
