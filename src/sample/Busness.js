import React, { useState } from 'react';
import './style.css';
import dataList from '../assets/api/sample';
import BusnessList from './BusnessList';


const Busness = () => {
    const [data , setData] = useState( dataList )
    return (   
        <section className = "business">
        <div class="inner">
            <h2>BUSINESS</h2>
            <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>
            <BusnessList data={data} />
            <p class="more"><a href="#">View More</a></p>
        </div>
    </section>
    );
};

export default Busness;