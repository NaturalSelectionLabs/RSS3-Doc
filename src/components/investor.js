import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./investor.module.css";
import useBaseUrl from '@docusaurus/useBaseUrl';

import { logos } from './investor.json';

export default function Investor() {
    return (
        <div className={styles.investor}>
            {logos.map(logo => (
                <span>
                    <img key={logo} src={useBaseUrl("/img/investors/" + logo)} />
                </span>
            ))
            }
        </div>
    );
}
