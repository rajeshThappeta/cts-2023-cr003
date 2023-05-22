import "./Product.css";

function Product(props) {
  //{ product:{},getDataFromChild:getDataFromChild()}

  //state
  let childData = 1234;

  return (
    <div className="card p-4" style={{ width: "300px" }}>
      <img
        src={props.product.image}
        className="w-75 d-block mx-auto"
        height="200px"
        alt=""
      />
      <h2 className="text-primary">{props.product.name}</h2>
      <p className="lead text-danger">Rs.{props.product.price}</p>
      <button className="btn btn-warning" onClick={()=>props.getDataFromChild(childData)}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
