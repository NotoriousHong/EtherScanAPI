import express from 'express';
import fetch from 'node-fetch';
//import (getAccountAPI에 쓰일 account인자를 frontend에서 받아와야함)

const router = express.Router();


router.get('/', async function getAccountAPI(req, res) {

    const accountAPIurl = 'https://api-goerli.etherscan.io/api?module=account&action=balance&address=0x247b669CbDD58FCa982DBf337C5D94880852E3Fa&tag=latest&apikey=PDANBSZU2XWSZAFMQG3EBUX3NRECWBX59E';
    /*
    let information = ''
    information = `module=account&action=balance&address=${   }&tag=latest&apikey=PDANBSZU2XWSZAFMQG3EBUX3NRECWBX59E`

    const apiUrl = https://api-goerli.etherscan.io/api?${information}

    const accountBalance = await fetch(apiUrl).then((response) => console.log( response ));
    */

    const accountBalance = await fetch(accountAPIurl).then((response) => response.json()).then((data) => res.status(200).send(data.result));

    return accountBalance;
});

export default router;