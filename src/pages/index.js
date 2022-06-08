import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <div className="text--center">
      <img className={styles.hero} src="/img/logo.gif" />
      <div className="container">
        <div className="hero__subtitle">
          <span className="font-extrabold text--primary">Open&nbsp;</span>
          information syndication protocol
        </div>
        <div className="hero__subtitle">
          <span className="font-extrabold text--primary">
            Efficient and decentralized&nbsp;
          </span>
          information distribution
        </div>
        <div className={styles.container}>
          <Link
            className="button button--primary button--lg"
            to="/docs/category/guide"
          >
            Learn More
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="/assets/RSS3-Whitepaper.pdf"
            target="_blank"
          >
            RSS3 Whitepaper
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="RSS3 Homepage"
      description="RSS3 is an open information syndication protocol that aims to support efficient and decentralized information distribution in Web3."
    >
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
