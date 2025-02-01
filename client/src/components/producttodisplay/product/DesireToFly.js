import React, { useRef, useState } from "react";
import Rodal from "rodal";
import { useNavigate } from "react-router-dom";
import NewLayout from "../../NewLayout/NewLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../productDisp.css";
import "rodal/lib/rodal.css";
import CommonButton from "../../CommonButton/CommonButton";

function DesireToFly() {
  const productRef = useRef(null);
  const smallScreenMediaQuery = "(max-width: 700px)";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("dtf1.jpg");

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

  // const navigate = useNavigate();

  const scrollSection = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="parent-div" className="parent-parent">
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
            <h2 className="title">Desire To Fly</h2>

            <div className="btnContainer">
              <CommonButton title="Shop Now" onClickHandler={scrollSection} />
            </div>
          </div>
          <img src="dtfnew.jpg" className="newImg" alt="new dtf img"></img>
        </section>
        <NewLayout productID="dtf" productRef={productRef}/>
      </div>
    </div>
  );
}

export default DesireToFly;
