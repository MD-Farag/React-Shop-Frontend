import React from 'react'
import Slider from './Slider'
import HeaderFeatures from './HeaderFeatures'

const Header = () => {
    return (
        <div className='lg:relative mb-10 lg:mb-20'>
            <Slider />
            <HeaderFeatures />
        </div>
    )
}

export default Header