import fetch from 'node-fetch';

const accountAPIurl = 'https://api-goerli.etherscan.io/api?module=account&action=balance&address=0x247b669CbDD58FCa982DBf337C5D94880852E3Fa&tag=latest&apikey=PDANBSZU2XWSZAFMQG3EBUX3NRECWBX59E';

async function getAccountAPI() {
    const accountBalance = await fetch(accountAPIurl).then((result) => { return result.json()});

    return accountBalance;
};


export default {
    getAccountAPI
  }

