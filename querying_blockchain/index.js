const {ethers} = require("ethers");


const provider = new ethers.providers.InfuraProvider(process.env.NETWORK,process.env.INFURA_KEY);

async function main() {

    // Look up the current block number
    const block_num = await provider.getBlockNumber()
    console.log(block_num);
    

    // Get the balance of an account (by address or ENS name, if supported by network)
    const balance = await provider.getBalance("0x51F9a803DE8943a84d02efbEF77ea6121Fe2A710")
    console.log(ethers.utils.formatEther(balance));    

}

main();

