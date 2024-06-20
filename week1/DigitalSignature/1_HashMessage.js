const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    //computing message hash to sign with private key
    const msgBytes=utf8ToBytes(message);
    const msgHash=keccak256(msgBytes);

    return msgHash;

}

module.exports = hashMessage;