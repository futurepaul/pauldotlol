import Layout from "../components/Layout";

const EpisodeEmbed = ({ title, url }) => (
  <section>
    <h2>{title}</h2>
    <iframe
      src={url}
      height="161px"
      width="100%"
      frameBorder="0"
      scrolling="no"
    ></iframe>
    <style jsx>{`
       {
        /* @media all and (min-width: 800px) {
        section {
          padding: 2rem;
        }
      } */
      }

      section {
        width: 100%;
        height: 161px;
        margin-bottom: 1rem;
      }

      h2 {
        font-family: Inter;
        font-style: italic;
        font-weight: 1000;
        font-size: 1.5rem;
        margin: 0.25rem;
        border-bottom: 1px dotted black;
      }
    `}</style>
  </section>
);

const Home = () => (
  <Layout pageTitle="paul.lol" windowTitle="POD" navActive="POD">
    <main>
      <article>
        <h1>Here's the Pod</h1>
        <EpisodeEmbed
          title="EPISODE 2"
          url="https://anchor.fm/futurepaul/embed/episodes/Bitcoin-with-Matt-Odell-edmnqg"
        />
        <EpisodeEmbed
          title="EPISODE 1"
          url="https://anchor.fm/futurepaul/embed/episodes/The-Optimistic-Case-for-Decentralization-edhmkt"
        />
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
        padding-bottom: 2rem;
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
        margin-bottom: 1rem;
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
    `}</style>
  </Layout>
);

export default Home;
