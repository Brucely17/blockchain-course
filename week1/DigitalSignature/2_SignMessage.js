const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require('./hashMessage');

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
    //signing the message using private key from previous hash
    const msgHash=hashMessage(msg);

    //third paramter to recover public key 
    
    const sign=secp.signSync(msgHash,PRIVATE_KEY,{recovered:true});
    return sign;
}

module.exports = signMessage;