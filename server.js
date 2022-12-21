import express from 'express';
import cors from 'cors';

const app = express();
const port = 8080;



/*
2.
파일 경로 안에 있는 static파일들을 사용하겠다
app.use(express.static(path.join(___dirname, 'EtherScanReact/build')))
*/

app.get('/', (req, res) => {
    res.status(200).send('Welcome, EtherScan!');
    /*
    1.
    res.sendFile(path.join(__dirname, 'EtherScanReact/build/index.html'))

    https://codingapple.com/unit/nodejs-react-integration/
    */
});

app.use((req, res, next) => {
    res.status(404).send('Not Found!');
});
  

app.listen(port, () => {
    console.log('Listening...');
});


/*
3.
React Router로 server route관리할려면 맨 하단에 아래의 코드를 적어놓는게 좋음
모든 경로에 대해(*) 즉, 유저가 url창에 어떤 경로를 입력하면 'EtherScanReact/build/index.html'여기롤 보여줌
때문에 'EtherScanReact/build/index.html'여기에서 React가 다시 routing을 하기 때문에 React에서 router관리가 가능하게 됨 

app.get('*', (req, res) => {
    res.status(200).send('Welcome, EtherScan!');
    
    res.sendFile(path.join(__dirname, 'EtherScanReact/build/index.html'))    
});

*/