import Link from "next/link";

const Icon = ({ image, title, href, out = false, active = "" }) => {
  return (
    <div>
      <Link href={href}>
        <a>
          <div className={`graybox ${active === title ? "active" : ""}`}>
            <img src={image}></img>
          </div>
          <h3>
            {title}
            {out && <span>↗</span>}
          </h3>
        </a>
      </Link>
      <style jsx>{`
        img {
          width: 32px;
          height: 32px;
          margin: 0.25rem;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }

        @media all and (min-width: 800px) {
          img {
            width: 64px;
            height: 64px;
            margin: 2rem;
          }

          h3 {
            font-size: 1.5rem;
          }
        }

        span {
          font-size: 0.75rem;
          font-weight: 300;
          vertical-align: middle;
        }

        .graybox {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
          font-size: 1rem;
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

export { Icon };
