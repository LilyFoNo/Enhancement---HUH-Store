import React, { useRef, useState } from "react";
import CommonButton from "../../CommonButton/CommonButton";
import { useNavigate } from "react-router-dom";
import Rodal from "rodal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../productDisp.css";
import "rodal/lib/rodal.css";
import NewLayout from "../../NewLayout/NewLayout";

function NotForYou() {
  const navigate = useNavigate();
  const productRef = useRef(null);
  const smallScreenMediaQuery = "(max-width: 700px)";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("nfu1.jpg");
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const getCustomStyles = () => {
    return {
      width: window.matchMedia(smallScreenMediaQuery).matches ? "70%" : "50%",
      height: window.matchMedia(smallScreenMediaQuery).matches
        ? "35%"
        : "80.5%",
      borderRadius: "3px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      margin: "auto",
      padding: 0,
    };
  };
  const customStyles = getCustomStyles();

  const scrollSection = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="rodal-parent">
        <Rodal
          visible={isModalOpen}
          onClose={closeModal}
          customStyles={customStyles}
        >
          <div>
            <img
              src={require(`../../../shared/${selectedImage}`)}
              alt="enlarged"
              className="enlarged-image"
              style={{ width: "100%" }}
            />
          </div>
        </Rodal>
      </div>

      <div className="displayProductContents">
        <section className="video-container" style={{ height: "100vh" }}>
          <div className="titleContainer">
            <h2 className="title">Not For you</h2>

            <div className="btnContainer">
              <CommonButton
                title="Shop Now"
                onClickHandler={scrollSection}
              />
            </div>
          </div>
          <img src="nfynew.jpg" className="newImg" alt="new dtf img"></img>
        </section>
        <NewLayout productID="nfy" productRef={productRef}/>
      </div>
    </div>
  );
}

export default NotForYou;
