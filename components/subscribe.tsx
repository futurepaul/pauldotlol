const Subscribe = () => {
  return (
    <div className="wrapper">
      {/* Begin Mailchimp Signup Form */}
      <div id="mc_embed_signup">
        <form
          action="https://lol.us8.list-manage.com/subscribe/post?u=b46d6c1f6427b917944adba73&id=c1be0c7aac"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <input
                type="email"
                placeholder="you@email.com"
                defaultValue=""
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              />
            </div>{" "}
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_b46d6c1f6427b917944adba73_c1be0c7aac"
                tabIndex={-1}
                defaultValue=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div>
      {/*End mc_embed_signup*/}
      <style jsx>{`
        #mc_embed_signup_scroll {
          display: flex;
          flex-direction: row;
        }
        input[type="email"] {
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

        .clear {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .wrapper {
          padding: 1rem;
        }

        .button {
          color: white;
          background-color: black;
          padding: 0.5rem;
          margin-bottom: 1rem;
          font-family: IBM Plex Serif;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 110%;
          border: 1px solid white;
        }
      `}</style>
    </div>
  );
};

export default Subscribe;
