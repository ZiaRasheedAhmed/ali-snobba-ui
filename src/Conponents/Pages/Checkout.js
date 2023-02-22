import React from "react";
import { Link } from "react-router-dom";
import styles from './Checkout.module.css';
const Checkout = () => {
    return(
        <>
        <div className={styles.header}>
                <nav>
                    <img className={styles.logo} src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/Logo.png"></img>
                </nav>
        </div>
        <div className={styles.mainContainer}>
            <h1>ThankYou for Ordering....!</h1>
            <h2>Your Order is Placed!</h2>
            <div>
                <Link to='/'>
                    <h3>Start Over?</h3>
                </Link>
            </div>

        </div>
        </>
    );
}
export default Checkout;