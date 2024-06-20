const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

let mempool = [];
const blocks = [];


function addTransaction(transaction) {
    // TODO: add transaction to mempool
    mempool.push(transaction);
}

function mine() {
    //adding transaction
    let transactions=[];

    while(transactions.length<MAX_TRANSACTIONS && mempool.length>0){
        // const memtransaction=mempool.pop();
        transactions.push(mempool.pop());

    }


    

    // TODO: mine a block
    const blockId=blocks.length;
    
    
    const block={id:blockId,transactions};
    block.nonce=0;

    //hahsing whole block
    let blockHash = SHA256(JSON.stringify(block));

    // adding nonce 
    
    while (TARGET_DIFFICULTY<=BigInt(`0x${blockHash}`)){

        blockHash = SHA256(JSON.stringify(block)).toString();
        block.nonce+=1;

    }


    block.hash=blockHash;
    blocks.push(block);


    
    
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};