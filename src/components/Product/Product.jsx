import './product.css';
import StarRating from '../StarRating/StarRating';


const Product = ({products}) => {

    const productCard = products.map((product) => {
        
        let productRating = product.rating;

        return (
            <div className="card">
                <img src={product.images[0]}></img>
                <div className="card-container">
                    <h4>{product.title}</h4>
                    <h6>{product.description}</h6>
                    <h5>{product.brand}</h5>
                    <p>Category: {product.category}</p><br></br>
                    <p>Price: {product.price}</p>
                    <p>Stock Remaining: {product.stock}</p>
                    <p>Rating: {product.rating}</p>
                    <StarRating productRating={productRating}/>
                </div>
            </div>
        )
    });

    return (
      <>
       {productCard}
      </>
    )
};
 
export default Product;