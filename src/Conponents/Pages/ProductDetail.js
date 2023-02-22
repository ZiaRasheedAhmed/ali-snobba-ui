import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import styles from './ProductDetail.module.css';
import { Link } from "react-router-dom";

const ProductDetail = () =>{
    const [quantity, setQuantity] = useState('1');


    const handleQuantity = useCallback(e => {
        setQuantity(e.target.value);
    }, []);

    const param = useParams();
    const [product, setProduct] = useState([]);
    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'PKR'
    }).format(value);

    useEffect(()=>{
        fetch("http://localhost:8080/product/"+param.productID).then((response) => response.json()).then((result) => setProduct(result));
    }, [param.productID]);
    return(
        <>
            <div className={styles.header}>
                <nav>
                    <img className={styles.logo} src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/Logo.png"></img>
                </nav>
            </div>
            <h1>Product Details</h1>
            <div className={styles.mainContainer}>
                <table className={styles.productDesc}>
                    <tr>
                        <td rowSpan={2}><img src={product.productImage} className={styles.image}></img></td>
                    </tr>
                    <tr>
                        <div className={styles.descText}>
                            <td className={styles.text}>
                                <h2>{product.productName}</h2>
                                <p>{product.longDescription}</p>
                                <label className={styles.label}>Price:</label>
                                <p className={styles.price}>{numberFormat(product.productPrice)}/=</p>
                                <label className={styles.label}>Quantity: </label>
                                <input className={styles.qty} type="number" value={quantity} onChange={handleQuantity}/>
                                <div className={styles.button}>
                                    <Link to={`/productcart/${product.id}`}>
                                        <button type="submit" className={styles.btn}>Add to Cart</button>
                                    </Link>
                                </div>
                            </td>
                        </div>

                    </tr>

                </table>



            </div>
            </>
    );
}

export default ProductDetail;