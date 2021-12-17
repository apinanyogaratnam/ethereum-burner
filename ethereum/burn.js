import web3 from './web3';
import Burn from './build/Burn.json';

const instance = new web3.eth.Contract(
    Burn.abi,
    '0x606a4689ECC4795000AAF48714aa96E051f4D26c'
);

export default instance;
