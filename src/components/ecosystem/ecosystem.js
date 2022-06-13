import React from "react";
import styles from "./ecosystem.module.css";
import useBaseUrl from '@docusaurus/useBaseUrl';

import apps from './ecosystem.json';

export default function Ecosystem() {
    return (
        <div className={styles.ecosystem}>
            {
                Object.entries(apps).map(([key, value]) => {
                    return <div className={styles.card}>
                        <div className={styles.logo}>
                            <a href={value.link} target="_blank">
                                <img key={key} src={useBaseUrl("/img/ecosystem/" + value.logo)} /></a>
                        </div>
                        <div className={styles.content}>
                            <p>
                                {value.desc}
                            </p>
                        </div>
                    </div>
                })
            }
        </div >
    );
}
