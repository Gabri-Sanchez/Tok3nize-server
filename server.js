//This is the server that interacts with the smart contract

// @author: Gabriel Sánchez (gabrielsanchez.business@proton.me) : Ch3etah blockchain (cheetahblockchain@proton.me)


require('dotenv').config();
const express = require('express');
const { ethers , JsonRpcProvider, EtherscanProvider, InfuraProvider, WebSocketProvider } = require('ethers');
const  abi = require('./abi.json');
const cors = require('cors');
const fs = require('fs');

//Uncomment to initialize the program on your local machine. You'll need 
// to have the app, smart contract and foundry, each of them separate in folders
//const { program } = require('commander');

/*program
    .option('--contract-address <address>');

program.parse();
const options = program.opts();

if (!options.contractAddress) {
    console.log("Please, provide the contract address by typing \"node server.js --contract-addres <contract-address>\" ");
    process.exit(0);
}
*/

BigInt.prototype.toJSON = function () {
    return { $bigint: this.toString() };
};



//Different providers can be used

//const provider = new EtherscanProvider(process.env.NETWORK_NAME, process.env.ETHERSCAN_API_KEY);
//const provider = new InfuraProvider(process.env.NETWORK_NAME, process.env.INFURA_API_KEY)
//const provider = new JsonRpcProvider("https://holesky.infura.io/v3/690983828c38455ea9d29d847c0fc4c7");
const provider = new WebSocketProvider(process.env.INFURA_ENDPOINT_WEBSOCKET_URL)
//const provider = new JsonRpcProvider("http://localhost:8545");
//Contract address is provided by an argument that setup.ps1 gives after deploying the contract

const contractAddress = process.env.CONTRACT_ADDRESS;


const wallet = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY, provider);

const contract = new ethers.Contract(contractAddress, abi, wallet);


const app = express();

app.use(cors());
app.use(express.json());

const corsOptions = {
    origin: process.env.ORIGIN_URL
}




//var deletions = [];
//var transfers = [];


var creations = [];

function initialize() {

    console.log("//////////////////////////////////////////////////////////////////////////\n" +
"//                                                                      //\n"+
"//                                                                      //\n"+
"//                              Ch3etah server app                      //\n"+
"//                                                                      //\n"+
"//                           Where the magic happens                    //\n"+
"//                                                                      //\n"+
"//                     .o;.                               .:o.          //\n"+
"//                     ;MMNMXko;.    .';c. 'c;'     .;oOXMNMM.          //\n"+
"//                     ;MN .:xKd' '  WOcM: dN;N0 .. 'd0d:. MM.          //\n"+
"//                     ;MX     'xNM  WMWM: dMWMK ,MNd.     MM.          //\n"+
"//                     ;MX   ,xKKKK  WMox: dokMK ,KKKKx'   MM.          //\n"+
"//                     ;Ml           dxWM: dMNxl           kM.          //\n"+
"//                     ;, :WWWN, :d;   NM: dM0   :x, :WWWN, l.          //\n"+
"//                        ,kWMMMOlcc;  NM: dM0  :c:l0MMMXd.             //\n"+
"//                       .l. :OMMMMNc  NM0xKM0  dWMMMMk, .d             //\n"+
"//                        .dk:.MMMo ,Oc;:::::,xk. xMMX.lOl.             //\n"+
"//                       .l. ;OMMM ;MMX:     cNMM'.MMMx' .d             //\n"+
"//                        'dk; MMM :MMMMN' :WMMMM'.MMN.lOl.             //\n"+
"//                       .l. ;OMMM  ;OMkc. 'cOMk, .MMMx' .d             //\n"+
"//                       .WMO;.MMM   ;W:     lW'  .MMN cKMN             //\n"+
"//                         cXMWMMM    ..     .    .MMMWM0;              //\n"+
"//                           ,OMMMc               dMMWx.                //\n"+
"//                       .0;   .dWMWl  k.   'd  dWMNl    cX             //\n"+
"//                       .MMNl.   :KX  KOooo0k  WO,   .dWMM             //\n"+
"//                       .MMNMMx.   .  ,.....,  .   ,OMWNMM             //\n"+
"//                       .MMo.dWMK;    OWMMMNd    cXMXc kMM             //\n"+
"//                       .MMWNNWMMMNl          .oWMMMNNNWMM             //\n"+
"//                        ;;;;;;;;;;;,         ,;;;;;;;;;;              //\n"+
"//                                                                      //\n"+
"//                                                                      //\n"+
"//                                                                      //\n"+
"//                                                                      //\n"+
"//////////////////////////////////////////////////////////////////////////\n");
    try{
        
        const readData = fs.readFileSync('./tok3nize-server/creations.json', 'utf8');
        creations = JSON.parse(readData);
        console.log("Data read successfully");
    } catch(error){}
}




initialize();


contract.on('Creation', async (prop, ownerId, ownerWallet) => {
    console.log("Created")
    if(creations.length <4){
        creations.push({"property": prop, "owner": ownerId, "wallet": ownerWallet});
    } else{
        creations.shift();
        creations.push({"property": prop, "owner": ownerId, "wallet": ownerWallet});
    }
    
})




/*
contract.on('Deletion', async (prop, ownerId, ownerWallet) => {
    if(deletions.length < 4){
        deletions.push({"property": prop, "owner": ownerId, "wallet": ownerWallet});
    } else{
        deletions.shift()
        deletions.push({"property": prop, "owner": ownerId, "wallet": ownerWallet});
        
    }
})


contract.on('Transfer', async (from, to, tokenId) =>{
    if(transfers.length < 4){
        transfers.push({from, to, tokenId})
    }else{
        transfers.shift();
        transfers.push({from, to, tokenId})
    }
        
})
*/


//This is returned if there are no results when searching
const propertyNotFound = JSON.stringify([[
        0n,
        'No results',
        '',
        '0x0000000000000000000000000000000000000000',   
        '',
        0n,
        '',
        0n,
        0n,
        ''
      ]])




app.listen(4000, () => {
    console.log('Server running on port 4000');
});

app.post('/api/createBuilding', async(req, res) => {

    try{
    console.log("Creando propiedad \n");
    
    const  { property } = req.body;
    //console.log(JSON.stringify(property) + "\n");
    if(!ethers.isAddress(property.wallet)){
        throw Error('Wallet address not valid');
    }
    const value = await contract.createPropertyStruct(property.wallet, property);
    await value.wait();
    //console.log("Propiedad creada \n")
    res.send(value);
    
    } catch (error) {
        res.status(500).send(error.message);
        //console.log(error.message + " \n")
    }
});


app.get('/api/getPropertiesByOwnerId', async(req, res) => {
    try {
        const  ownerId  = req.query.ownerId;
        //console.log(ownerId + "\n");
        const value = await contract.getPropertiesByOwnerId(ownerId);
        await value;
        console.log("Result by oID: " + value);

        if (value.length == 0) {
            res.send(propertyNotFound);
        } else {
            res.send(value);
        }
        
    } catch (error) {
        res.status(500).send(error.message);
    }

});

app.get('/api/getPropertiesByOwnerWallet', async(req, res) => {
    try {
        const  ownerWallet  = req.query.wallet;
        //console.log(ownerWallet + "\n");
        if(!ethers.isAddress(ownerWallet)){
            throw new Error("Wallet address is not valid");
        }
        console.log("kka")
        const value = await contract.getPropertiesByOwnerWallet(ownerWallet);
        //console.log(value);

        if (value.length == 0) {
            res.send(propertyNotFound);
        } else {
            res.send(value);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }

});

app.get('/api/getPropertiesByNotary', async(req, res) => {
    try {
        const  notary  = req.query.notary;
        //console.log(notary + "\n");
        let value = await contract.getPropertiesByNotary(notary);
        
        if (value.length == 0) {
            res.send(propertyNotFound);
        } else {
            res.send(value);
        }
        
    } catch (error) {
        res.status(500).send(error.message);
    }

});

app.get('/api/getPropertyById', async(req, res) => {
    try {
        const  propId  = req.query.propId;
        //console.log(propId + "\n");
        const value = await contract.getPropertyByPropId(propId);
        
        //console.log("Result: " + value);

        if (value.length == 0) {
            res.send(propertyNotFound);
        } else {
            //Here, value is wrapped inside an array in order to provide an easier formatting later, as we have done with propertyNotFound
            res.send([value]);
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.get('/api/getCreations', async(req, res) => {
    try {
        res.send(JSON.stringify(creations));
    } catch(error) {
        res.status(500).send(error.message);
    }
})


/* Not used
app.get('/api/getDeletions', async(req, res) => {
    try {
        res.send(JSON.stringify(deletions));
    } catch(error) {
        res.status(500).send(error.message);
    }
})

app.get('/api/getTransfers', async(req, res) => {
    try {
        res.send(JSON.stringify(transfers));
    } catch(error) {
        res.status(500).send(error.message);
    }
})

*/