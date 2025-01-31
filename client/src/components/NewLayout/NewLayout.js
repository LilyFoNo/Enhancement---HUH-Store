import imageData from "../../shared/itemdata";
import "./NewLayout.css";

const NewLayout = ({ productID }) => {
  const imageNFY = imageData.find((img) => img.id === "nfy");

  //   console.log(imageNFY.id, productID);
  return (
    <>
      {productID === imageNFY.id ? (
        <div className="product-container-new-layout">
          <div className="front-product">
            <div className="product-image">
              <img
                src={require(`../../shared/${imageNFY.images[0]}`)}
                alt="Front Image"
              />
            </div>
            <div className="product-description">
              <p>{imageNFY.description}</p>
            </div>
          </div>
          <div className="back-product">
            <div className="product-image">
            <img
                src={require(`../../shared/${imageNFY.images[1]}`)}
                alt="Front Image"
              />
            </div>
            <div className="product-form">
                <h3>{imageNFY.name.toUpperCase()}</h3>
            </div>
          </div>
        </div>
      ) : (
        <img
          src={require(`../../shared/${imageNFY.images[0]}`)}
          alt="Front Image"
        />
      )}
    </>
  );
};

export default NewLayout;
