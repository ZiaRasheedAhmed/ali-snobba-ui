import React, { useState } from "react";
import { useCallback } from "react";
import styles from './ProductDetail.module.css';
const ProductDetail = () =>{
    const [quantity, setQuantity] = useState('1');


    const handleQuantity = useCallback(e => {
        setQuantity(e.target.value);
    }, []);
    return(
        <>
            <div className={styles.header}>
                <nav>
                    <img className={styles.logo} src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/Logo.png"></img>
                </nav>
            </div>
            <div className={styles.mainContainer}>
                <table className={styles.productDesc}>
                    <tr>
                        <td rowSpan={2}><img src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/LandYachtMotorHome.jpg" className={styles.image}></img></td>
                    </tr>
                    <tr>
                        <div className={styles.descText}>
                            <td className={styles.text}>
                                <h2>Ruby Slippers</h2>
                                <p>Harry Winston has carefully crafted these fantastic shoes.  Each pair boasts a total of 4,600 gemstones including 1,350 carats of premium rubies and 50 carats of diamonds. You’ll be the talk of the town when you wear these slippers (not to mention the target of shoe thieves everywhere).  Harry makes no promise about how comfortable these slippers are though.</p>
                                <label className={styles.label}>Price:</label>
                                <p className={styles.price}>Rs. 684,750,000</p>
                                <label className={styles.label}>Quantity: </label>
                                <input className={styles.qty} type="number" value={quantity} onChange={handleQuantity}/>
                                <div className={styles.button}>
                                    {/* <Link to={`/BookNowForm/${item.id}`}> */}
                                        <button type="submit" className={styles.btn}>Add to Cart</button>
                                    {/* </Link> */}
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