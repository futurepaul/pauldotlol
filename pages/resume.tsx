import ResumeLayout from "../components/ResumeLayout";
import React, { useState } from "react";

const Pay = () => {
  return (
    <ResumeLayout pageTitle="paul.lol" windowTitle="RESUME" navActive="PAY">
      <main>
        <article>
          <h1 id="who-is-paul-miller">Who is Paul?</h1>
          <section>
            <p>
              Paul Miller is a frontend developer with experience in Svelte, React, and Rust.
              He's a "bitcoin developer" in the sense that he's in the bitcoin industry, but please don't ask him to do any cryptography.
            </p>
            <p>
              Paul is great at finding hairy problems
              and doing the &quot;dumb&quot; thing to get the conversation
              moving toward the right solution.
              He's motivated by seeing the pixels change on screen.
              Recently reskilled from writer to developer.
            </p>
          </section>
          <h1 id="experience">Experience</h1>
          <section>
            <h2 id="frontend-developer">Frontend Developer</h2>
            <p>
              <em>
                Voltage - (Remote) / May 2021 - Current
              </em>
            </p>
            <ul>
              <li>
                Wrote Voltage's Flow and Account sites from scratch in Svelte / SvelteKit while maintaining an existing Vue codebase for the flagship Nodes product.
              </li>
              <li>
                Rewrote the Nodes site in SvelteKit to bring it all together as one codebase.
              </li>
              <li>
                TypeScript, REST APIs, and a touch of Lightning-specific stuff. Recently onboarded a more experienced frontend guy and learning a lot from him.
              </li>
            </ul>

          </section>
          <section>
            <h2 id="mobile-app-developer">Mobile App Developer</h2>
            <p>
              <em>
                Giant Killer - Sunbury, OH (Remote) / May 2020 - April 2021
              </em>
            </p>
            <ul>
              <li>
                Worked on near total rewrite of legacy app to TypeScript and
                more idiomatic React, resulting in an almost 50 percent
                reduction code base size while also reducing bugs, adding
                features, and adding some new bugs yet to be found.
              </li>
              <li>
                Troubleshooting of hairy React Native problems often caused by
                poorly maintained dependencies.
              </li>
            </ul>
          </section>
          <section>
            <h2 id="open-source-contributor">Open Source Contributor</h2>
            <p>
              <em>Github, The Internet / May 2019 - Current</em>
            </p>
            <ul>
              <li>
                While learning Rust became a top contributer to the Druid
                desktop GUI project.
              </li>
              <li>
                Helped implement a couple screen redesigns in the popular open source Zeus Lightning wallet.
              </li>
              <li>
                Built the new opensats.org which includes an integration with Stripe and BtcPay Server for receiving donations.
              </li>
            </ul>
          </section>
          <section>
            <h2 id="technology-writer">Technology Writer</h2>
            <p>
              <em>The Verge - New York, NY / 2011 - 2020 on and off</em>
            </p>
            <ul>
              <li>
                Helped found <em>The Verge</em>, a leading publication in the
                space.
              </li>
              <li>
                Co-hosted <em>The Vergecast</em> podcast.
              </li>
            </ul>
          </section>
        </article>
      </main>

      <style jsx>{`
        main {
          width: 25rem;
        }

        .prose {
          display: flex;
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
          padding: 0.2rem;
          width: 100%;
          margin-left: 0em;
          margin-right: auto;
        }
        .prompt {
          font-family: monospace;
          font-weight: bold;
          color: rgba(179, 255, 102, 230);
          position: relative;
          margin-left: 60px;
          margin-top: 60px;
        }

        main {
          margin: auto;
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

        li {
          margin-bottom: 0.5em;
        }

        a {
          color: inherit;
          text-decoration: none;
          margin-bottom: 0.5rem;
          margin-top: 1rem;
        }

        p {
          text-indent: 20px;
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
          font-size: 32px;
          line-height: 94%;
          margin: 0;
          letter-spacing: -0.065em;
        }
        h2 {
          font-family: Inter;
          font-style: italic;
          font-weight: 1000;
          font-size: 1.25rem;
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

        ul {
          padding: 4px;
        }
      `}</style>
    </ResumeLayout>
  );
};

export default Pay;
