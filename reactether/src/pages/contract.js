import '../App.css';

import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

function Contract() {

    const [data, setData] = useState('');
    const [keyword, setKeyword] = useState('');
  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const onChange = (event) => setKeyword(event.target.value);
      
    async function axiosData(keyword) {
        try{
          // 요청이 시작 할 때에는 error를 초기화하고
          setError(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
    
          await axios.get(`https://api-goerli.etherscan.io/api?module=contract&action=getabi&address=${keyword}&apikey=PDANBSZU2XWSZAFMQG3EBUX3NRECWBX59E`)
          .then((res) => { setData(res.data); console.log(res.data); });
    
        } catch(err) {
          setError(err);
        }
        setLoading(false);
    } 
  
    //비동기 Side Effect(axios API요청)를 useEffect처리
    useEffect(() => {
    axiosData(keyword);
    }, [keyword]);
  
  
  
    if (loading) return <div>Loading..</div>; 
    if (error) return <div>에러가 발생했습니다</div>;
    
    // 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
    if (!data) return null;
    
  
    return(
      <div>
            <div className="account-menu">
                <ul className="account-menu__list">
                    <li className="account-menu__item">
                        <span className="account-menu__text">
                            { data.result === "Invalid Address format" ? <div>Please input proper txHash for ABI code</div> : <div>{data.result}</div> }
                            <input type="text" placeholder="Copy and paste your account.." value={keyword} onChange={onChange}/>
                        </span>
                    </li>
                </ul>
            </div>
      </div>
    )
}

export default Contract;