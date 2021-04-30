import { Window } from "../components/Window";
import { Icon } from "../components/Icon";

// <Icon
//             image="/icons/newsletter.png"
//             title="SIGN&#8209;UP"
//             href="/"
//             active={active}
//           />

const Nav = ({ active }) => {
  return (
    <nav>
      <Window title="APPS">
        <div>
          <Icon
            image="/icons/podcast.png"
            title="POD"
            href="/"
            active={active}
          />
          <div className="spacer" />
          <Icon
            image="/icons/projects.png"
            title="PROJECTS"
            out={false}
            href="/projects"
            active={active}
          />
          <div className="spacer" />
          <Icon
            image="/icons/blog.png"
            title="BLOG"
            out={true}
            href="https://pauljmiller.com"
            active={active}
          />
        </div>
      </Window>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .spacer {
          width: 1em;
        }

        @media all and (min-width: 800px) {
          div {
            flex-direction: column;
          }
        }
      `}</style>
    </nav>
  );
};

export { Nav };
