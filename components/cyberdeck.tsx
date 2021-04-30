const CyberDeck = () => {
  return (
    <main>
      <article>
        <div className="deck">
          <div className="prompt">
            <code>$&gt; WHAT NOW</code>
            <code className="blink">_</code>
          </div>
        </div>

        <div className="banner-wrap">
          <h1>
            You built it.
            <br />
            But do you own it?
          </h1>
        </div>

        <div className="prose">
          <div className="column">
            <p>
              When you’re scrounging for parts, soldering display connectors,
              and reading Mini-PCI Express pinouts in the owner’s manual, the
              last thing on your mind is user software.
            </p>
            <p>
              But once the screen lights up, the LEDs turn green, and “STATUS
              OK” spools out of the printer... now what?
            </p>
            <p>
              If you run software from Big Blue, ABC, Zuckbook or the Forbidden
              Fruit, your cyberdeck won’t stay free. And so what was the point?
            </p>
          </div>

          <div className="column">
            <p>
              Did you build this machine because it looks cool? Or because you
              want to build a better future with your own hands?
            </p>
            <p>
              Here at <em>Cyberdeck Users Weekly</em>, we have a finger on the
              absolute best open source ROMs and user programs, upcoming free
              protocols, and, of course, tips and tricks for bitcoin node
              operation.
            </p>
            <p>
              Let’s build a better future together. We took back hardware, now
              let’s take back software. Cyberdeck users: join us!
            </p>
          </div>
        </div>
        <a className="button" href="https://anchor.fm/futurepaul">
          Listen
        </a>
        <h3>
          (It's a podcast about using regular computers, <br />
          I'm just trying to future-proof a little bit.)
        </h3>
      </article>
      <style jsx>{`
        @media all and (min-width: 800px) {
          main {
            width: 35rem;
          }

          .prose {
            display: flex;
          }

          .subscribe {
            margin-top: 2rem;
          }
          main {
            margin: auto;
            padding-bottom: 4rem;
          }

          em {
            text-decoration: underline;
          }

          .prompt {
            font-family: monospace;
            font-weight: bold;
            color: rgba(179, 255, 102, 230);
            position: relative;
            margin-left: 60px;
            margin-top: 60px;
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
        }

        article {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .prompt {
          font-family: monospace;
          font-weight: bold;
          color: rgba(179, 255, 102, 230);
          position: 13 <div className= "prose" > relative;
          margin-left: 60px;
          margin-top: 50px;
        }

        .deck {
          height: 343px;
          width: 332px;
          margin-bottom: -50px;
          margin-left: auto;
          margin-right: auto;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0) 70%,
              rgba(255, 255, 255, 1) 90%
            ),
            url(/cyberdeck.png);
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
        .footer {
          display: flex;
          align-items: center;
        }

        .svg {
          width: 300px;
        }

        @keyframes blink {
          50% {
            opacity: 0.1;
          }
        }
        .blink {
          animation: blink 2s steps(1) infinite both;
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
        a {
          color: inherit;
          text-decoration: none;
          margin-bottom: 0.5rem;
          margin-top: 0.5rem;
        }
      `}</style>
    </main>
  );
};

export default CyberDeck;
