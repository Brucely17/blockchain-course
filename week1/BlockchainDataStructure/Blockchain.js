const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ new Block('genesis') ];
    }

    addBlock(block){
        block.previousHash=this.chain[this.chain.length-1].toHash();
        this.chain.push(block);

    }
    isValid(){
        
        for (let i=1;i<this.chain.length;i++){
        if (this.chain[i].previousHash.toString()!=this.chain[i-1].toHash().toString()){
            return false;
        }

        }
        return true;
        
    }
}

module.exports = Blockchain;