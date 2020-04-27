import Head from "next/head";

const Icon = ({ image, title, href }) => {
  return (
    <div>
      <a href={href}>
        <div className="graybox">
          <img src={image}></img>
        </div>
        <h3>{title}</h3>
      </a>
      <style jsx>{`
        img {
          width: 64px;
          height: 64px;
          margin: 2rem;
          image-rendering: crisp-edges;
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
          padding: 2rem;
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
          min-width: 2rem;
          margin: 1px;
        }

        .wrap-shadow-lines {
          display: flex;
          flex-direction: column;
          justify-content: center;
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
        <Window title="PAY PAUL">
          <Icon image="/icons/pay.png" title="PAY" href="#" />
        </Window>
        <Window title="PODCAST">
          <Icon image="/icons/podcast.png" title="POD" href="#" />
        </Window>
        <Window title="BLOG">
          <Icon image="/icons/blog.png" title="BLOG" href="#" />
        </Window>
        <Window title="PROJECTS">
          <Icon image="/icons/projects.png" title="PROJECTS" href="#" />
        </Window>
      </div>
    </main>
    <style jsx>{`
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
        align-items: center;
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
