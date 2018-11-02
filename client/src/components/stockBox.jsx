import React from "react";
import styles from '../../Styles/stockBox.css'
import $ from 'jquery';

function StockBox(props) {
  const stocks = props.stocks;
  const stockList = stocks.map((stock) => 
    <div className={styles.stockBox} >
      <div className={styles.wrapper}>
        <p className={styles.name}>{stock.name}</p>
        <div className={styles.ratingHover}>
          <i className="fa fa-tag fa-rotate-90 fa-lg" ></i>
          <span className={styles.rating}>{stock.rating}%</span>
          <p className={styles.ratingBlurb}>{stock.ratingBlurb}.</p>  
      </div>
    </div>
      <div className={styles.priceWrapper}>
        <div className={styles.price}>${stock.price}</div>
        <div className={styles.priceChange}>{stock.priceChange}%</div>
      </div>
    </div>
  )
  return (
    <div>
      {stockList}
    </div>
  )
}

export default StockBox;
//<div className="ratingBlurb">{stock.ratingBlurb}</div>