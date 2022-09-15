import React from 'react';
import './Home.css';
import Product from "./Product";

function Home(){
    return (
        <div className="home">
            <div className="home-container">
                <img className="home-image" src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg" alt=""/>
                
                <div className="home_row">
                    <Product id="2323" 
                    title="에어팟"
                    price={100000} 
                    image="https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/V6IVICGKZTSQ3UPMB6ARVU2KY4.jpg"
                    rating ={5}/>

                    <Product id="2320" 
                    title="청소기"
                    price={250000} 
                    image="https://news.koreadaily.com/data/photo/originals/2021/11/03/174425550.jpg"
                    rating ={4}/>
                </div>

                <div className="home_row">
                    <Product id = "2321"
                    title="아이폰"
                    price={1000000} 
                    image="https://img.etnews.com/news/article/2022/06/03/cms_temp_article_03173711804625.jpg"
                    rating ={5}/>

                    <Product 
                    title="미니 티비" id ="2322"
                    price={87000} 
                    image="http://m.ecoon.co.kr/web/product/big/201903/85428614ac3252d5da89c9759299bdd5.jpg"
                    rating ={2}/>
                    
                </div>
                
                <div className="home_row">
                    <Product 
                    title="노트북" id ="2322"
                    price={890000} 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5m_dmI1WbxIX3ejYb2Xw-okiAzkZtHZkG8A&usqp=CAU"
                    rating ={3}/>
                </div>


            </div>
        </div>
    );
}

export default Home;