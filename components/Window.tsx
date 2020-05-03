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

export { Window };
