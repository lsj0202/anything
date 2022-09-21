import React from 'react';
import './Checkout.css'; /* CSS만 파일명을 쓰지 않는다. */
import Subtotal from "./Subtotal";


function Checkout(){
    return(
        <div className="Checkout"> 
            <div className="Checkout_left">
                <img className="checkout_ad"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Bceyl2kTXPfdngqnVRxvPAU4eVJXwqtuew&usqp=CAU"
                alt="/"/>

                <div>
                    <h2 className="Checkout_title">
                        장바구니입니다
                    </h2>

                    
                </div>
            </div>
            <div className="Checkout_right">
                <Subtotal/>
            </div>  

        </div>
    );
}

export default Checkout;