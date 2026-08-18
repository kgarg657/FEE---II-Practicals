{/*function ProductCard(props){
    return(
        <>
        <div style ={{border:"2px solid lightcoral", width: "400px"}}>
        <p>Product name: {props.name}</p>
        <p>Product description: {props.description}</p>
        <p>Stock: 5</p>
        <p>Price: {props.price}</p>
        <p>Available: {props.available?"AVAILABLE":"NOT AVAILABLE"}</p>
        <button>Buy now</button>
        <br />
        <button>Add to Cart</button>
        </div>
        </>
    
    )
}
export default ProductCard;*/}

function ProductCard(props) {
    return (
        <div className="product-card">
            <img src={props.image} alt={props.name} />

            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>Stock: 5</p>
            <p className="price">₹{props.price}</p>

            <p className={props.available ? "available" : "not-available"}>
                {props.available ? "AVAILABLE" : "NOT AVAILABLE"}
            </p>

            <div className="buttons">
                <button>Buy Now</button>
                <button>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;