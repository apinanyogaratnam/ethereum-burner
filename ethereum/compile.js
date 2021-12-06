const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const hotelPath = path.resolve(__dirname, 'contracts', 'Burn.sol');
const source = fs.readFileSync(hotelPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'Burn.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
fs.ensureDirSync(buildPath);

fs.outputJsonSync(
    path.resolve(buildPath, 'Burn.json'),
    output.contracts['Burn.sol']['Burn']
);
