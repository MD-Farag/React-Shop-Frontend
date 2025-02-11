import React from 'react'
import Header from '../components/homeComp/Header'
import Selected from '../components/commonComp/Selected'
import DefaultSale from '../components/homeComp/DefaultSale'
import WhyUs from '../components/homeComp/WhyUs'
import TodayProducts from '../components/homeComp/TodayProducts'

export default function Home() {
    return (
        <div className='flex flex-col'>
            <Header />
            <DefaultSale />
            <Selected />
            <WhyUs />
            <TodayProducts />
        </div>
    )
}
