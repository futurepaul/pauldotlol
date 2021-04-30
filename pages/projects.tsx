import Layout from "../components/Layout";
import styles from "../styles/Projects.module.css";

import fs from "fs";
import path from "path";
import marked from "marked";

const Projects = ({ content }) => (
  <Layout pageTitle="projects" windowTitle="PROJECTS" navActive="PROJECTS">
    <div
      className={styles.projects}
      dangerouslySetInnerHTML={{ __html: content }}
    />
    <style jsx>{``}</style>
  </Layout>
);

export const getStaticProps = async () => {
  const file = fs.readFileSync(path.join("portfolio.md")).toString();

  const htmlString = marked(file);

  return {
    props: {
      content: htmlString,
    },
  };
};

export default Projects;
