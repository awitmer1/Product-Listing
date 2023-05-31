import './product.css';

const Product = ({products}) => {
 
    console.log(products)

    const productCard = products.map((product) => {

        return (
            <div className="card">
                <img></img>
                <div className="card-container">
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.discountPercentage}</p>
                    <p>{product.category}</p>
                    <p>{product.brand}</p>
                    <p>{product.stock}</p>
                    <p>{product.rating}</p>
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