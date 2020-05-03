import Layout from "../components/Layout";

const Home = () => (
  <Layout pageTitle="paul.lol" windowTitle="POD" navActive="POD">
    <main>
      <article>
        <h1>Here's the Pod</h1>
        <section>
          <h2>EPISODE 1</h2>
          <iframe
            src="https://anchor.fm/futurepaul/embed/episodes/The-Optimistic-Case-for-Decentralization-edhmkt"
            height="102px"
            width="300px"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </section>
        <h2>
          <a href="https://anchor.fm/futurepaul">CHECK IT OUT ON ANCHOR</a>
        </h2>
      </article>
    </main>

    <style jsx>{`
      @media all and (min-width: 800px) {
        main {
          width: 35rem;
        }

        section {
          padding: 2rem;
        }
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

      .prose {
        display: flex;
      }
      .column {
        width: 15rem;
        margin: 1rem;
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

      @keyframes blink {
        50% {
          opacity: 0.1;
        }
      }
      .blink {
        animation: blink 2s steps(1) infinite both;
      }
    `}</style>
  </Layout>
);

export default Home;
