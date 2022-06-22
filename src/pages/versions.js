import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { useVersions, useLatestVersion } from '@theme/hooks/useDocs';

export default function Version() {
    const {
        siteConfig: { organizationName, projectName },
    } = useDocusaurusContext();

    const repoUrl = `https://github.com/${organizationName}/${projectName}`;

    const versions = useVersions();
    const latestVersion = useLatestVersion();
    const currentVersion = versions.find((version) => version.name === 'current');
    const pastVersions = versions.filter(
        (version) => version !== latestVersion && version.name !== 'current',
    );

    function DocumentationLabel() {
        return 'Documentation';
    }

    function GitHubLabel() {
        return 'GitHub';
    }

    return (
        <Layout
            title='Versions'
            description='RSS3 Versions page listing all documented site versions'>
            <main className='container margin-vert--lg'>
                <h1>RSS3 documentation versions</h1>

                <div className='margin-bottom--lg'>
                    <h3>Current version (Stable)</h3>
                    <p>
                        Here you can find the documentation for current released version.
                    </p>
                    <table>
                        <tbody>
                            <tr>
                                <th>{latestVersion.label}</th>
                                <td>
                                    <Link to={`${latestVersion.path}/category/guide`}>
                                        Documentation
                                    </Link>
                                </td>
                                <td>
                                    <Link
                                        href={`${repoUrl}/releases/tag/${latestVersion.name}`}>
                                        GitHub
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {currentVersion !== latestVersion && (
                    <div className='margin-bottom--lg'>
                        <h3>Next version (Unreleased)</h3>
                        <p>
                            Here you can find the documentation for work-in-process
                            unreleased version.
                        </p>
                        <table>
                            <tbody>
                                <tr>
                                    <th>{currentVersion.label}</th>
                                    <td>
                                        <Link
                                            to={`${currentVersion.path}/category/guide`}>
                                            <DocumentationLabel />
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
                {pastVersions.length > 0 && (
                    <div className='margin-bottom--lg'>
                        <h3>Past version (Deprecated)</h3>
                        <table>
                            <tbody>
                                {pastVersions.map((version) => (
                                    <tr key={version.label}>
                                        <th>{version.label}</th>
                                        <td>
                                            <Link to={`${version.path}/category/guide`}>
                                                <DocumentationLabel />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link
                                                href={`${repoUrl}/releases/tag/${version.name}`}>
                                                <GitHubLabel />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </Layout>
    );
}
