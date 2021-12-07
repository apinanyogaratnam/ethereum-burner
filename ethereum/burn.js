import web3 from './web3';
import Burn from './build/Burn.json';

const instance = new web3.eth.Contract(
    Burn.abi,
    ''
);

export default instance;
