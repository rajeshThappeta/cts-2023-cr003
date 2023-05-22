import "./Products.css";
import Product from "../product/Product";

function Products() {
  //state
  let products = [
    {
      id: 100,
      name: "Watch",
      image: "https://m.media-amazon.com/images/I/41xNB9WGLDL._AC_SY400_.jpg",
      price: 70000,
    },
    {
      id: 200,
      name: "Water purifier",
      image: "https://m.media-amazon.com/images/I/41QOpnWKj-L._AC_SY400_.jpg",
      price: 45000,
    },
    {
      id: 300,
      name: "Bags",
      image: "https://m.media-amazon.com/images/I/91weq3mK2TL._AC_SY400_.jpg",
      price: 12000,
    },
  ];

  //function to getdata from child
  function getDataFromChild(data) {
    console.log("data is ", data);
  }

  return (
    <div className="main container">
      {/* Nest Product */}
      <div className="d-flex justify-content-between">
        {products.map((prodObj) => (
          <Product
            key={prodObj.id}
            product={prodObj}
            getDataFromChild={getDataFromChild}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
