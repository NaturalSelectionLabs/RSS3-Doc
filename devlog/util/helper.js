const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');

const createNewLog = () => {
    const date = dayjs().format('YYYY-MM-DD HH:mm');

    const content = `---
title: 
authors: [Henry]
date: ${date}
tags: [Changelog, PreGod v0.4.0]
---


- 
- 
- 
- 
`;

    fs.writeFileSync(
        path.resolve(__dirname, `../${dayjs().format('YYYY-MM-DD')}.md`),
        content,
        { encoding: 'utf8', flag: 'wx' },
    );
};

module.exports = {
    createNewLog,
};
