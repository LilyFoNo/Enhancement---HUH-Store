import { useState } from "react";
import imageData from "../../shared/itemdata";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import "./NewLayout.css";
import { useDispatch } from "react-redux";
import { addItem, setCartIsOpen } from "../../features/counter/cartSlice";

const NewLayout = ({ productID, productRef }) => {
  const imageNFY = imageData.find((img) => img.id === productID);
  const imageDTF = imageData.find((img) => img.id === "dtf");
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("small");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleSizeChart = (image) => {
    setIsModalOpen(true);
  };

  const handleAddToCart = (item) => {
    dispatch(addItem({ newItem: item, size: size, newQuantity: quantity }));
    dispatch(setCartIsOpen(true));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getCustomStyles = () => {
    const smallScreenMediaQuery = "(max-width: 600px)";
    return {
      width: window.matchMedia(smallScreenMediaQuery).matches ? "90%" : "50%",
      height: window.matchMedia(smallScreenMediaQuery).matches ? "40%" : "70%",
      backgroundColor: "rgb(128, 128, 128, 0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      margin: "auto",
      padding: 0,
    };
  };

  const customStyles = getCustomStyles();

  return (
    <>
      {productID === imageNFY.id ? (
        <div
          className="product-container-new-layout"
          id="notForYou"
          ref={productRef}
        >
          <Rodal
            visible={isModalOpen}
            onClose={closeModal}
            customStyles={customStyles}
          >
            <div>
              <img
                src={require(`../../shared/asset.png`)}
                alt="enlarged"
                className="enlarged-image"
                style={{ width: "100%" }}
              />
            </div>
          </Rodal>
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
              <h4>{`CAD: $${imageNFY.priceInCad}`}</h4>
              <div className="quaintity-container">
                <label className="text" htmlFor="input-quantity">
                  Quantity
                </label>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={handleQuantityChange}
                  id="input-quantity"
                />
              </div>
              <h4 className="text">Size</h4>
              <div className="dropdown">
                <FormControl sx={{ height: "2rem", minWidth: 90 }} size="small">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    onChange={handleSizeChange}
                  >
                    <MenuItem value="small">Small</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="large">Large</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <button
                className="button-cart-add"
                onClick={() => handleAddToCart(imageNFY)}
              >
                Add to Cart
              </button>
              <button className="button-cart-size" onClick={handleSizeChart}>
                Size Chart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          
          <h1>Produt Not Found</h1>
        </div>
      )}
    </>
  );
};

export default NewLayout;
