import React from 'react';
import "./Home.css";
import Product from './Product.js'

function Home() {
    return (
        <div className='home'>
            <div className='home_conatainer'>
                <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/March-21/Network_Hero_banners/HeroPC_1500x600_5._CB657961025_.jpg' />
            </div>
            <div className='home_row'>
            <Product 
            id='12321341'
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses' 
            price={29.99} 
            image='https://m.media-amazon.com/images/I/51WIKlio9qL.jpg' 
            rating={4} />
<Product
            id='12321342'
            title='New Apple iPhone 12 Pro Max (512GB) - Graphite' 
            price={329} 
            image='https://m.media-amazon.com/images/I/71XXJC7V8tL._AC_UL480_FMwebp_QL65_.jpg' 
            rating={5}/>

            
           
            </div>
            <div className='home_row'>
            <Product
            id='12321343'
            title='Skybags Trooper 55 Cms Polycarbonate Blue Hardsided Cabin Luggage' 
            price={69.99} 
            image='https://images-na.ssl-images-amazon.com/images/I/81JMCSQa78L._SL1500_.jpg' 
            rating={4}/>

<Product
            id='12321344'
            title='Fossil Gen 5(44mm, black) Carlyle Silicone Touchscreen Men Smartwatch with Speaker, Heart Rate, GPS, Music storage and Smartphone Notifications - FTW4025'
            
            price={129.99} 
            image='https://m.media-amazon.com/images/I/318LcIR9MGL.jpg' 
            rating={5}/>
            
            <Product
            id='12321345'
            title='boAt Stone 1400 30W Bluetooth Speaker(Army Green)' 
            price={38} 
            image='https://m.media-amazon.com/images/I/41jJyZvxjiL.jpg' 
            rating={3}/>
                
            </div>
            <div className='home_row'>
            <Product
            id='12321346'
            title='LG 217 cms (86 inches) 4K Ultra HD Smart NanoCell TV 86SM9400PTA | With Built-in Alexa (Rocky Black) (2019 Model)' 
            price={1129.99} 
            image='https://m.media-amazon.com/images/I/91S8zeQzHuL._AC_UL480_QL65_.jpg' 
            rating={5}/>
                
            </div>
            
        </div>
    )
}

export default Home
