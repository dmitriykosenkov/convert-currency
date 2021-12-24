import React from "react";
import { Route, Routes } from "react-router-dom";
import s from "./App.module.css"
import bgImg from "./assets/img/bg-main.jpg";
import Navbar from "./components/Navbar/Navbar";
import CurrencyExchange from "./pages/CurrencyExchange/CurrencyExchange";
import ExchangeRates from "./pages/ExchangeRates/ExchangeRates";


export const App = () => {
  return (
    <div className={s.wrapper}>
      <img className={s.bgScreen} src={bgImg} alt="" />

      <div className={s.container}>
         <Navbar/>
         <Routes>
            <Route path="/" element={<ExchangeRates title={"Конвертировать валюту"}/>}/>
            <Route path="/converter" element={<CurrencyExchange/>}/>
         </Routes>
      </div>

    </div>
  );
};
