import React from 'react';
import './Header.css';
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img className="header_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSBh5askhfAcKLLtkTmmqpuzPoFP2hJJeafA&usqp=CAU" alt="amazon"
            />
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text"></input>
                <FaSearch className="header_searchIcon"/>
            </div>

            <div className="header_nav">

                <div className="header_option">
                    <span className="header_optionLineOne">안녕하세요 !</span>
                    <span className="header_optionLineTwo">로그인하기!</span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">돌아가기</span>
                    <span className="header_optionLineTwo">주문내역</span>
                </div>``

                <div className="header_option">
                    <span className="header_optionLineOne">반가워요</span>
                    <span className="header_optionLineTwo">구독과좋아요</span>
                </div>
                <Link to ="/Checkout">
                <div className="header_optionBasket">
                    <FaShoppingBasket/>
                    <span className="header_optionLineTwoheader_basketCount">
                        0
                    </span>
                </div>
                </Link>
            </div>
        </div>
        
    );
}

export default Header;