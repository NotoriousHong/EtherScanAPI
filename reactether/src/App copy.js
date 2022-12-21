import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';


function Account() {
  const accountAPIurl = 'https://api-goerli.etherscan.io/api?module=account&action=balance&address=0x247b669CbDD58FCa982DBf337C5D94880852E3Fa&tag=latest&apikey=PDANBSZU2XWSZAFMQG3EBUX3NRECWBX59E'

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setData(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
  
      const result = await axios.get(accountAPIurl)
      .then((response) => response.json())
      .then((value) => {
        setData(value); 
        console.log("success!");
      });

      setData(result);
      
    } catch(e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>로딩중..</div>; 
  if (error) return <div>에러가 발생했습니다</div>;

	// 아직 data가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
  if (!data) return null;

	// 드디어 data가 성공적으로 받아와 진 상태입니다.

  return(
    <ul>{data}</ul>

  )
}



function App() {
  return (

    <BrowserRouter>
    <div className="App">
        <nav>
          <li>
            <Link to="/">Account</Link>
          </li>
        </nav>


        <section className="features">
            <Routes>
              <Route path="/" element={<Account />}>Accounts</Route>
            </Routes>
        </section>
    </div>
  </BrowserRouter>
  );
}

export default App;
