//This script is meant for adding example data.

const { ethers, EtherscanProvider } = require('ethers');
const  abi  = require('./abi.json')


const provider = new EtherscanProvider(NETWORK_NAME, ETHERSCAN_API_KEY);

//Contract address goes here
const contractAddress = CONTRACT_ADDRESS; 

//console.log(ethers.utils.isAddress(contractAddress));
const wallet = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY, provider);

const contract = new ethers.Contract(contractAddress, abi, wallet);




const testData = [
    {
        "propId": 0,
        "owner": "Innovation",
        "ownerId": "Ch3etah-ID",
        "wallet": "0x695d1faf219ab33672967e3752943880cafc9e7a",
        "location": "The Blockchain",
        "surface": 369,
        "registry": "Holesky",
        "purchase_price": 369000,
        "date": 1647388800,
        "notary": "The Web 3"
    },
    {
        "propId": 0,
        "owner": "Diana Moore",
        "ownerId": "D112233",
        "wallet": "0x695d1faf219ab33672967e3752943880cafc9e7a",
        "location": "890 Aspen Way",
        "surface": 1793,
        "registry": "Reg005",
        "purchase_price": 695481,
        "date": 1647388800,
        "notary": "Notary C"
    },
    {
        "propId": 0,
        "owner": "Diana Moore",
        "ownerId": "D112233",
        "wallet": "0x42a07633a11697f4d3bede2d3b63e07f700bf1ab",
        "location": "202 Birch Lane",
        "surface": 1352,
        "registry": "Reg002",
        "purchase_price": 435143,
        "date": 1578873600,
        "notary": "Notary B"
    },
    {
        "propId": 0,
        "owner": "Diana Moore",
        "ownerId": "D112233",
        "wallet": "0x577a514632f040846ec0d6d7e53376b7cc9bbb38",
        "location": "123 Elm Street",
        "surface": 1827,
        "registry": "Reg005",
        "purchase_price": 357130,
        "date": 1601251200,
        "notary": "Notary A"
    },
    {
        "propId": 0,
        "owner": "John Smith",
        "ownerId": "J445566",
        "wallet": "0x090aee1eb752485bf5f5e61fc2185898c9e9e724",
        "location": "614 Cedar Road",
        "surface": 849,
        "registry": "Reg005",
        "purchase_price": 610745,
        "date": 1691366400,
        "notary": "Notary C"
    },
    {
        "propId": 0,
        "owner": "John Smith",
        "ownerId": "J445566",
        "wallet": "0xad8f7665ee2c2a78c7536c87cf5ed6dca756fba7",
        "location": "789 Willow Lane",
        "surface": 1512,
        "registry": "Reg001",
        "purchase_price": 723772,
        "date": 1584748800,
        "notary": "Notary C"
    },
    {
        "propId": 0,
        "owner": "John Smith",
        "ownerId": "J445566",
        "wallet": "0x71a8e9983f50ef36c9cfde507f1ac35391028a3d",
        "location": "512 Pine Drive",
        "surface": 1862,
        "registry": "Reg005",
        "purchase_price": 738675,
        "date": 1594512000,
        "notary": "Notary E"
    },
    {
        "propId": 0,
        "owner": "Emma Brown",
        "ownerId": "E778899",
        "wallet": "0x6b73761ec52b2ba6baa0e3d4cefec5dae3ee6e3b",
        "location": "123 Elm Street",
        "surface": 1093,
        "registry": "Reg003",
        "purchase_price": 866156,
        "date": 1692921600,
        "notary": "Notary E"
    },
    {
        "propId": 0,
        "owner": "Emma Brown",
        "ownerId": "E778899",
        "wallet": "0x85bf8b62ee55de6cc91fcaece2b976ca94563583",
        "location": "345 Spruce Court",
        "surface": 1129,
        "registry": "Reg002",
        "purchase_price": 902970,
        "date": 1697846400,
        "notary": "Notary C"
    },
    {
        "propId": 0,
        "owner": "Emma Brown",
        "ownerId": "E778899",
        "wallet": "0x0ba69623de4b37d9e43b6f046f43f059ff87a694",
        "location": "410 Oak Avenue",
        "surface": 1231,
        "registry": "Reg002",
        "purchase_price": 782196,
        "date": 1628035200,
        "notary": "Notary E"
    },
    {
        "propId": 0,
        "owner": "Michael Johnson",
        "ownerId": "M101112",
        "wallet": "0x08a4dc708c3b47f92cc2049af3984ce61ff63b76",
        "location": "512 Pine Drive",
        "surface": 824,
        "registry": "Reg004",
        "purchase_price": 504544,
        "date": 1664150400,
        "notary": "Notary B"
    },
    {
        "propId": 0,
        "owner": "Michael Johnson",
        "ownerId": "M101112",
        "wallet": "0xa6d0f036a6531fe436767dd3d4bafd14b1c42ba7",
        "location": "202 Birch Lane",
        "surface": 1702,
        "registry": "Reg004",
        "purchase_price": 458244,
        "date": 1685750400,
        "notary": "Notary A"
    },
    {
        "propId": 0,
        "owner": "Michael Johnson",
        "ownerId": "M101112",
        "wallet": "0xe2407ed1948db58025263d43f0fa115bcc7947bc",
        "location": "678 Poplar Avenue",
        "surface": 1055,
        "registry": "Reg004",
        "purchase_price": 806308,
        "date": 1631491200,
        "notary": "Notary D"
    },
    {
        "propId": 0,
        "owner": "Sarah Williams",
        "ownerId": "S131415",
        "wallet": "0x3e1f5a367851a1adb87f5a613dabcfc6ef3019f3",
        "location": "410 Oak Avenue",
        "surface": 1383,
        "registry": "Reg001",
        "purchase_price": 489285,
        "date": 1633996800,
        "notary": "Notary A"
    },
    {
        "propId": 0,
        "owner": "Sarah Williams",
        "ownerId": "S131415",
        "wallet": "0xea0888072ae02fa340b5534a8193123456603d24",
        "location": "202 Birch Lane",
        "surface": 1206,
        "registry": "Reg003",
        "purchase_price": 433611,
        "date": 1687219200,
        "notary": "Notary A"
    },
    {
        "propId": 0,
        "owner": "Sarah Williams",
        "ownerId": "S131415",
        "wallet": "0xce62cc46d12363c72f2fb9bd29eca37fa301ac9d",
        "location": "410 Oak Avenue",
        "surface": 1467,
        "registry": "Reg001",
        "purchase_price": 607755,
        "date": 1674086400,
        "notary": "Notary E"
    }
]


async function checkContractDeployed() {
    const code = await provider.getCode(contractAddress);
    if (code === '0x') {
      console.log('No contract deployed at this address \n');
    } else {
      console.log('Contract found at this address \n'+ contractAddress);
    }
  }

async function test() {
    let nonce = await wallet.getNonce();
    console.log("Creating example data");
    console.log(testData[1])
    for(i = 0; i < testData.length; i++){
    const property = testData[i];
        console.log(testData[i])
        const tx = contract.createPropertyStruct(property.wallet, property,{nonce: nonce});
        const receipt = await tx;
        nonce++;
        console.log(`Created ${i+1} of ${testData.length}\n`);      
    }
    console.log("All example data has been created \n");
    setTimeout(() => {console.log("Bye :)")}, 2500);
}

checkContractDeployed();
setTimeout(() => {test()}, 2000);