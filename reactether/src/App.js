import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { RiAccountCircleLine, RiFilePaper2Line, RiExchangeBoxLine } from "react-icons/ri";


// router로 경로 지정한 /account, /contract, /transaction은 pages폴더에서 import해옴
import Account from './pages/account.js'
import Contract from './pages/contract.js'
import Transaction from './pages/transaction.js'





function App() {
  const menuItems = document.querySelectorAll('.tab-menu__item');

  let previousSelectedItem = menuItems[0];

  menuItems.forEach(item => {
      item.addEventListener('click', () => {
          previousSelectedItem?.classList.remove('tab-menu__active')
          previousSelectedItem = item;
          item.classList.add('tab-menu__active');
          //여기 단계에서 링크타고 들어갈 수 없나
      })
  })


  return (

    <BrowserRouter>
            <div>
            <h1 className="header">EtherScan</h1>

              <div className="tab-menu">

                <ul className="tab-menu__list">
                  <li className="tab-menu__item">
                    <span className="tab-menu__icon">
                      <Link to="/account"><RiAccountCircleLine/></Link>
                      <i className="ri-home-line"></i>
                    </span>
                    <span className="tab-menu__text"></span>
                  </li>

                  <li className="tab-menu__item">
                    <span className="tab-menu__icon">
                      <Link to="/contract"><RiFilePaper2Line/></Link>
                    </span>
                    <span className="tab-menu__text"></span>
                  </li>

                  <li className="tab-menu__item">
                    <span className="tab-menu__icon">
                      <Link to="/transaction"><RiExchangeBoxLine/></Link>
                    </span>
                    <span className="tab-menu__text"></span>
                  </li>
                </ul>
              </div>
        
        
            <li className="accountLink">
              <Link to="/account">Account balance</Link>
            </li>
            <li className="accountLink">
              <Link to="/contract">Contract</Link>
            </li>
            <li className="accountLink">
              <Link to="/transaction">Transaction</Link>
            </li>

            <div className="features">
              <Routes>
                <Route path="/account" element={<Account />}>Accounts</Route>
                <Route path="/contract" element={<Contract />}>Contract</Route>
                <Route path="/transaction" element={<Transaction />}>Transaction</Route>
              </Routes>
            </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
