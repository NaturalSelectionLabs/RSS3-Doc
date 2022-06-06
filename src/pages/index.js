import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Whitepaper from '/assets/RSS3-Whitepaper.pdf';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div class="container mx-auto flex flex-col items-center py-12 sm:py-24">
      <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
        <img src='/img/logo.gif' />
        <p className="sm:text-5xl md:text-3xl">
          <span className="text--primary font-extrabold">open </span>
          <span className=" "> information syndication protocol</span>
        </p>
        <p className="sm:text-5xl md:text-3xl">
          <span className="text--primary font-extrabold">efficient and decentralized</span>
          <span className=""> information distribution</span>
        </p>
      </div>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <Link
            className="button button--primary button--lg inline-flex items-center justify-center px-5 py-3"
            to="/docs/category/guide">
            Learn More
          </Link>
        </div>
        <div className="ml-3 inline-flex rounded-md shadow">
          <a
            className="button button--secondary button--lg inline-flex items-center justify-center px-5 py-3"
            href={Whitepaper} target="_blank">
            RSS3 Whitepaper
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`RSS3 Homepage`}
      description="RSS3 is an open information syndication protocol that aims to support efficient and decentralized information distribution in Web3.">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
