import React, { useEffect, useState, useCallback } from 'react';
import styles from './ProductList.module.css';
import { Link, useParams } from 'react-router-dom';

const ProductList = () => {
    const [quantity, setQuantity] = useState('1');


    const handleQuantity = useCallback(e => {
        setQuantity(e.target.value);
    }, []);
    // const param = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/product/all").then((response) => response.json()).then((result) => setProduct(result));
    }, []);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <nav>
                    <img className={styles.logo} src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/Logo.png"></img>
                </nav>
            </div>

            <h1>Welcome to Ali Snobba</h1>


            <div className={styles.product}>
                {product.length !== 0 ? product.map((data) => {
                    return <div className={styles.row}>
                        <div className={styles.column}>
                            <img className={styles.img} src={data.productImage}></img>
                            <h2>
                                <Link to={`/productdetails/${data.id}`}>
                                {data.productName}
                                </Link>
                            </h2>
                            <p>{data.shortDescription}</p>
                            <p>Price: {data.productPrice} Rupees Only</p>
                            <label className={styles.label}>Quantity: </label>
                                <input className={styles.qty} type="number" value={quantity} onChange={handleQuantity}/>
                            <p><Link to={`/productcart/${data.id}`}>
                                <button className={styles.btn}>Add to Cart</button>
                                </Link> 
                            </p>
                        </div>
                    </div>
                }) : null};
            </div>
                {/* <div className={styles.row}>
                    <div className={styles.column}>
                        <img className={styles.img} src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/ChocolatePudding.png"></img> */}
                        {/* <h2><Link to='/productdetails'>///////</Link> */}
                            {/* Ruby Slippers */}
                            {/* </Link></h2> */}
                        {/* <p>Short Description</p>
                        <p>Product Price</p>
                        <p>Product Quantity</p>
                        <p><button className={styles.btn}>Add to Cart</button></p>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <img className={styles.img} src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/DiamondWatch.jpg"></img> */}
                        {/* <h2><Link to='/productdetails'> */}
                            {/* Ruby Slippers */}
                            {/* </Link></h2> */}
                        {/* <p>Short Description</p>
                        <p>Product Price</p>
                        <p>Product Quantity</p>
                        <p><button className={styles.btn}>Add to Cart</button></p>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <img className={styles.img} src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/GoldenToilet.jpg"></img> */}
                        {/* <h2><Link to='/productdetails'> */}
                            {/* Ruby Slippers */}
                            {/* </Link></h2> */}
                        {/* <p>Short Description</p>
                        <p>Product Price</p>
                        <p>Product Quantity</p>
                        <p><button className={styles.btn}>Add to Cart</button></p>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <img className={styles.img} src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/LandYachtMotorHome.jpg"></img> */}
                        {/* <h2><Link to='/productdetails'> */}
                            {/* Ruby Slippers */}
                            {/* </Link></h2> */}
                        {/* <p>Short Description</p>
                        <p>Product Price</p>
                        <p>Product Quantity</p>
                        <p><button className={styles.btn}>Add to Cart</button></p>
                    </div>
                </div> */}
            {/* </div> */}
        </div>
    );
}

export default ProductList;