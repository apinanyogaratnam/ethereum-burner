import web3 from './web3';
import Burn from './build/Burn.json';

const instance = new web3.eth.Contract(
    Burn.abi,
    '0x7e888A13c9395Cd3EB8D9485F6d0068F4C323103'
);

export default instance;
