import React from 'react';

function CheckoutSummary() {
    return (
        <div className="right-side flex-auto order-lg-1">
            <div className="right-side-top w-100 d-block">
                <div className="product-thumb"><span className="cart-item">1</span><img
                    src="images/product.jpeg" alt="" className="img-fluid"/></div>
                <div className="product-name w-100 d-block">Semaglutide</div>
                <div className="product-supply">1 Month Supply</div>
                <div className="product-price"><span>$395</span> $99.00</div>
            </div>
            <div className="discount-box w-100 d-block">
                <input type="text" className="form-control checkout" placeholder="Discount code"/>
                <button>Apply</button>
            </div>
            <div className="discount-code-btn-row">
                <ul>
                    <li>
                        <button className="discount-code-btn">75%OFF</button>
                        <span className="code-close-btn">x</span></li>
                </ul>
            </div>
            <div className="total-box-row w-100 d-block">
                <div className="data-row w-100 d-flex flex-wrap justify-content-between">
                    <span>Subtotal</span> <span>$99.00</span></div>
                <div className="data-row w-100 d-flex flex-wrap justify-content-between">
                    <span>Shipping</span> <span>Free</span></div>
                <div className="data-row w-100 d-flex flex-wrap justify-content-between total">
                    <span>Total</span> <span>USD $99.00</span></div>
            </div>
        </div>
    );
}

export default CheckoutSummary;
