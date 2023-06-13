import './product.css';
import StarRating from '../StarRating/StarRating';


const Product = ({products}) => {

    const productCard = products.map((product) => {
        
        let productRating = product.rating;

        function stockColor(stock) {
            if (stock <= 20){
                return (<p style={{color:"red"}}>Stock Remaining: {stock}</p>)
            } else {
                return (<p>Stock Remaining: {stock}</p>)
            }
        }
        
        return (
            <div key={product.id} className="card">
                <img src={product.images[0]}></img>
                <div className="card-container">
                    <h4>{product.title}</h4>
                    <h6>{product.description}</h6>
                    <h5>{product.brand}</h5>
                    <p>Category: {product.category}</p><br></br>
                    <p>Price: {product.price}</p>
                    {stockColor(product.stock)}
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