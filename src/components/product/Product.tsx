import React, {FC} from 'react';
import styles from './Product.module.css'
export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images?: string[]
}


export type  IProductTypeProps = IProductProps & {children?: React.ReactNode}
const Product:FC<IProductTypeProps> = ({id,
                                           title,
                                           description,
                                           price,
                                           discountPercentage,
                                           rating,
                                           stock, brand, category, thumbnail, images}) => {
    return (
        <div className={styles.divbox}>
            <h2>{id} - {title}</h2>
            <h4>{brand}: {category}</h4>
            <h3>{price}</h3>
            <p>{description}</p>
            <p>discountPercentage - {discountPercentage}</p>
            <p>rating - {rating}</p>
            <p>stock - {stock}</p>
            <img className={styles.imageBox} src={thumbnail} alt={title}/>

        </div>
    );
};

export default Product;