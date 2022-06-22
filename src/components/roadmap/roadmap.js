import React from 'react';
import { Badge, Card, Timeline, Tag } from 'antd';
import 'antd/dist/antd.css';

export default function Roadmap() {
    return (
        <Timeline>
            <Timeline.Item color='blue'>
                <Badge.Ribbon text='Q4 2022 -'>
                    <Card>
                        <h3>
                            RSS3 God <Tag color='#0072FF'>Planned</Tag>
                        </h3>
                        <p>A fully decentralized implementation in Go</p>
                        <img src='/img/roadmap/architecture.png' />
                        <p>
                            <a target='_blank' href='/assets/RSS3-Whitepaper.pdf'>
                                Open in Whitepaper
                            </a>
                        </p>
                    </Card>
                </Badge.Ribbon>
            </Timeline.Item>
            <Timeline.Item color='blue'>
                <Badge.Ribbon text='Jan 2022 - '>
                    <Card>
                        <h3>
                            RSS3 PreGod{' '}
                            <Tag color='#0072FF'>
                                <a href='https://github.com/NaturalSelectionLabs/RSS3-PreGod'>
                                    Active Development on Github
                                </a>
                            </Tag>
                        </h3>
                        <p>
                            A close to decentralized implementation of protocol v0.4.0
                            with full indexing function in Go
                        </p>
                        <p>Technical architecture diagram:</p>
                        <iframe
                            style={{ border: 'none' }}
                            width='100%'
                            height='450'
                            src='https://whimsical.com/embed/PHXfjqFjYrecd6EsnvgcXx'></iframe>
                        <p>
                            <a
                                target='_blank'
                                href='https://whimsical.com/pregod-PHXfjqFjYrecd6EsnvgcXx'
                                rel='noreferrer'>
                                Open in Whimsical
                            </a>
                        </p>
                    </Card>
                </Badge.Ribbon>
            </Timeline.Item>
            <Timeline.Item color='blue'>
                <Badge.Ribbon text='Jul 2021 - Nov 2021'>
                    <Card>
                        <h3>
                            RSS3 PreNode <Tag color='volcano'>Maintenance-only</Tag>
                        </h3>
                        <p>
                            A new centralised implementation of protocol v0.3.0 and v0.3.1
                            with basic assets indexing and items indexing function in
                            Node.js
                        </p>
                    </Card>
                </Badge.Ribbon>
            </Timeline.Item>
            <Timeline.Item color='blue'>
                <Badge.Ribbon text='Jul 2021 - Nov 2021'>
                    <Card>
                        <h3>
                            RSS3 Hub Next <Tag color='red'>Deprecated</Tag>
                        </h3>
                        <p>
                            A simple centralised implementation of protocol v0.2.0 with
                            basic assets indexing function based on RSS3 Hub in Node.js
                        </p>
                    </Card>
                </Badge.Ribbon>
            </Timeline.Item>
            <Timeline.Item color='blue'>
                <Badge.Ribbon text='May 2021 - Jul 2021'>
                    <Card>
                        <h3>
                            RSS3 Hub <Tag color='red'>Deprecated</Tag>
                        </h3>
                        <p>
                            A simple centralised implementation of protocol v0.1.0 and
                            v0.1.1 in Node.js
                        </p>
                    </Card>
                </Badge.Ribbon>
            </Timeline.Item>
        </Timeline>
    );
}
