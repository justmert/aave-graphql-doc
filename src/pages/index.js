import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";

const FeatureList = [
  {
    title: "Ethereum-v2",
    png: require("@site/static/chains/ethereum.png").default,
    editor: "https://eth-v2.aaveql.org",
    doc: "/docs/category/ethereum-v2",
    contracts: "/docs/ethereum-v2/contracts",

  },
  {
    title: "Polygon-v2",
    png: require("@site/static/chains/polygon.png").default,
    editor: "https://polygon-v2.aaveql.org",
    doc: "/docs/category/polygon-v2",
    contracts: "/docs/polygon-v2/contracts",

  },
  {
    title: "Avalanche-v2",
    png: require("@site/static/chains/avalanche.png").default,
    editor: "https://avalanche-v2.aaveql.org",
    doc: "/docs/category/avalanche-v2",
    contracts: "/docs/avalanche-v2/contracts",

  },
  {
    title: "Polygon-v3",
    png: require("@site/static/chains/polygon.png").default,
    editor: "https://polygon-v3.aaveql.org",
    doc: "/docs/category/polygon-v3",
    contracts: "/docs/polygon-v3/contracts",

  },
  {
    title: "Avalanche-v3",
    png: require("@site/static/chains/avalanche.png").default,
    editor: "https://avalanche-v3.aaveql.org",
    doc: "/docs/category/avalanche-v3",
    contracts: "/docs/avalanche-v3/contracts",

  },
  {
    title: "Optimism-v3",
    png: require("@site/static/chains/optimism.png").default,
    editor: "https://optimism-v3.aaveql.org",
    doc: "/docs/category/optimism-v3",
    contracts: "/docs/optimism-v3/contracts",

  },
  {
    title: "Fantom-v3",
    png: require("@site/static/chains/fantom.png").default,
    editor: "https://fantom-v3.aaveql.org",
    doc: "/docs/category/fantom-v3",
    contracts: "/docs/fantom-v3/contracts",

  },
  {
    title: "Arbitrum-v3",
    png: require("@site/static/chains/arbitrum.png").default,
    editor: "https://arbitrum-v3.aaveql.org",
    doc: "/docs/category/arbitrum-v3",
    contracts: "/docs/arbitrum-v3/contracts",
  },
  {
    title: "Harmony-v3",
    png: require("@site/static/chains/harmony.png").default,
    editor: "https://harmony-v3.aaveql.org",
    doc: "/docs/category/harmony-v3",
    contracts: "/docs/harmony-v3/contracts",
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--secondary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({ png, title, editor, doc, contracts }) {
  return (
    <div className={clsx(`col col--4`, styles.styleCard)} style={{paddingBottom: 25, paddingTop:25}}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img style={{ height: 150, paddingBottom:10 }} role="img" src={png}></img>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <a target="_blank" style={{ textDecoration: "none" }} href={editor}>
          <input
            type="submit"
            value="Editor"
            class={clsx(
              "buttonDark",
              "buttonLight",
              styles.mainButtonDark,
              styles.mainButtonLight
            )}
          />
        </a>
        <a style={{ textDecoration: "none" }} href={doc}>
          <input
            type="submit"
            value="Doc"
            class={clsx(
              "buttonDark",
              "buttonLight",
              styles.mainButtonDark,
              styles.mainButtonLight
            )}
          />
        </a>
        <a style={{ textDecoration: "none" }} href={contracts}>
          <input
            type="submit"
            value="Contracts"
            class={clsx(
              "buttonDark",
              "buttonLight",
              styles.mainButtonDark,
              styles.mainButtonLight,
              styles.mainButtonFullDark,
              styles.mainButtonFullLight,
              
              
            )}
          />
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Aave GraphQL Documentation"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <div className="container">
        <div className="row" style={{display: "flex", justifyContent: "center"}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div style={{marginTop: 50}}></div>
      </div>
    </Layout>
  );
}
