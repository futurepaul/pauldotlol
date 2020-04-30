const Subscribe = () => {
  return (
    <div>
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
            <h2>Subscribe</h2>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Email Address </label>
              <input
                type="email"
                defaultValue=""
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
            </div>
            <p>
              <a
                href="https://us8.campaign-archive.com/home/?u=b46d6c1f6427b917944adba73&id=c1be0c7aac"
                title="View previous campaigns"
              >
                View previous campaigns.
              </a>
            </p>
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
                defaultValue="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div>
      {/*End mc_embed_signup*/}
    </div>
  );
};

export default Subscribe;
