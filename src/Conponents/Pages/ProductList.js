import React from 'react';
import styles from './ProductList.module.css';

const ProductList = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <nav>
                    <img className={styles.logo} src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/Logo.png"></img>
                </nav>
            </div>
            <div className={styles.product}>

                <h1>Welcome to Ali Snobba</h1>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <img className={styles.img} src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/ActualRubyRubySlippers.jpg"></img>
                        <h2>Ruby Slippers</h2>
                        <p>An impressive pair of slippers featuring thousands of real rubies.</p>
                        <p>Product Price: Rs.684,750,000</p>
                        <p>Product Quantity</p>
                        <p><button className={styles.btn}>Add to Cart</button></p>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <img className={styles.img} src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/ChocolatePudding.png"></img>
                        <h2>Product Name</h2>
                        <p>Short Description</p>
                        <p>Product Price</p>
                        <p>Product Quantity</p>
                        <p><button className={styles.btn}>Add to Cart</button></p>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <img className={styles.img} src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/DiamondWatch.jpg"></img>
                        <h2>Product Name</h2>
                        <p>Short Description</p>
                        <p>Product Price</p>
                        <p>Product Quantity</p>
                        <p><button className={styles.btn}>Add to Cart</button></p>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <img className={styles.img} src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/GoldenToilet.jpg"></img>
                        <h2>Product Name</h2>
                        <p>Short Description</p>
                        <p>Product Price</p>
                        <p>Product Quantity</p>
                        <p><button className={styles.btn}>Add to Cart</button></p>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.img} className={styles.column}>
                        <img className={styles.img} src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/LandYachtMotorHome.jpg"></img>
                        <h2>Product Name</h2>
                        <p>Short Description</p>
                        <p>Product Price</p>
                        <p>Product Quantity</p>
                        <p><button className={styles.btn}>Add to Cart</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;