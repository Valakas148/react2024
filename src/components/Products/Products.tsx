import React, {FC, useEffect, useState} from 'react';
import Product, {IProductProps, IProductTypeProps} from "../product/Product";
import styles from './Products.module.css'


const Products:FC = () => {

    const [products, SetProduct] = useState<IProductProps[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(({products}) => {
                SetProduct(products)
            });
    },[])


    return (
        <div className={styles.productsDiv}>
            {
                products
                    .map(
                        (res: IProductProps) => (
                            <Product key={res.id} id={res.id}
                                     title={res.title}
                                     description={res.description} price={res.price} discountPercentage={res.discountPercentage}
                                     rating={res.rating} stock={res.stock} brand={res.brand} category={res.category} thumbnail={res.thumbnail} images={res.images}/>
                        )
                    )
            }
        </div>
    );
};

export default Products;