import { Window } from "../components/Window";
import { Icon } from "../components/Icon";

const Nav = ({ active }) => {
  return (
    <nav>
      <Window title="APPS">
        <div>
          <Icon
            image="/icons/newsletter.png"
            title="SIGN&#8209;UP"
            href="/"
            active={active}
          />
          <Icon
            image="/icons/podcast.png"
            title="POD"
            href="/pod"
            active={active}
          />
          <Icon
            image="/icons/pay.png"
            title="PAY"
            href="/pay"
            active={active}
          />
          <Icon
            image="/icons/blog.png"
            title="BLOG"
            out={true}
            href="https://pauljmiller.com"
            active={active}
          />
          <Icon
            image="/icons/projects.png"
            title="PROJECTS"
            out={true}
            href="https://pauljmiller.com/projects.html"
            active={active}
          />
        </div>
      </Window>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: row;
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
