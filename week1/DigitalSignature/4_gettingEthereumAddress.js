const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    const ethereumAddress=keccak256(publicKey.slice(1)).slice(-20);
    return ethereumAddress;
}

module.exports = getAddress;