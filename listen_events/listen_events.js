const ethers = require("ethers");
const ABI = require("./abi.json");
require("dotenv").config();


async function getTransfer(){
    const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; ///DAI Contract
    const provider = new ethers.providers.InfuraProvider(process.env.NETWORK,process.env.INFURA_KEY);

    const contract = new ethers.Contract(daiAddress, ABI, provider);
    contract.on("Transfer", (from, to, value, event)=>{
        let transferEvent ={
            from: from,
            to: to,
            value: value,
            eventData: event,
        }
        console.log(JSON.stringify(transferEvent, null, 4))
    })
}
getTransfer()

