import web3 from './web3';
import Burn from './build/Burn.json';

const instance = new web3.eth.Contract(
    Burn.abi,
    '0x9aA2F64c56d43905F85F0Ad5a8474426CFB2579e'
);

export default instance;
