const fs = require('fs');
const path = require('path');

// used to generate investor.json

const logos = fs.readdirSync(path.resolve(__dirname, '../../../static/img/investors/'));

fs.writeFileSync(path.resolve(__dirname, './investor.json'), JSON.stringify({ logos }));
