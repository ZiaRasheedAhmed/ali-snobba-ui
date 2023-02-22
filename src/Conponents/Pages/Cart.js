import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from './Cart.module.css';

const Cart = () => {
    const param = useParams();
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/product/"+param.productID).then((response) => response.json()).then((result) => setProduct(result));
    }, [param.productID]);
    return (
        <>
            <div className={styles.header}>
                <nav>
                    <img className={styles.logo} src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/Logo.png"></img>
                </nav>
            </div>
            <div className={styles.cart}>
                <h1>Selected Items!</h1>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <img className={styles.img} src={product.productImage}></img>
                        <div className={styles.listrow}>
                            <h4>{product.productName}</h4>
                            <p>Quantity</p>
                            <p>Price: {product.productPrice}/=</p>
                            <p>Total Price</p>
                        </div>
                        <Link to=''>
                            <i class="fa-solid fa-x "></i>
                        </Link>
                    </div>
                </div>
                <div className={styles.pricerow}>
                    <div className={styles.pricecolumn}>
                        <label><h4>Your Total Bill: </h4></label>
                        <input readOnly className={styles.totalPrice} type="text" placeholder="Order Total"></input>
                    </div>
                </div>
                <div className={styles.btnrow}>
                    <div className={styles.btncolumn}>
                        <Link to='/checkout'>
                            <button className={styles.button} type="submit">
                                Checkout
                            </button>
                        </Link>
                    </div>
                </div>
                <div className={styles.btnrow}>
                    <div className={styles.btncolumn}>
                        <Link to='/'>
                            <button className={styles.button} type="submit">
                                Return to Shopping
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Cart;