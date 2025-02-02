import React, { useRef, useState, useEffect } from "react";
import Rodal from "rodal";
import { useInView } from "react-intersection-observer";
import NewLayout from "../../NewLayout/NewLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../productDisp.css";
import "rodal/lib/rodal.css";
import CommonButton from "../../CommonButton/CommonButton";
import { useDispatch } from "react-redux";
import { setNavbarColor } from "../../../features/counter/navbarSlice";

function DesireToFly() {
  const productRef = useRef(null);
  const smallScreenMediaQuery = "(max-width: 700px)";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("dtf1.jpg");
  const dispatch = useDispatch();
  const { ref: section1, inView: inViewSection1 } = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  const { ref: section2, inView: inViewSection2 } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const [lastInView, setLastInView] = useState(null);
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

  useEffect(() => {
    console.log(dispatch(setNavbarColor("gray")));
    dispatch(setNavbarColor("white"));
    return () => {
      dispatch(setNavbarColor("black"));
    };
  }, [dispatch]);

  useEffect(() => {
    if (inViewSection1 && lastInView !== "section1") {
      dispatch(setNavbarColor("white"));
      setLastInView("section1");
    } else if (inViewSection2 && lastInView !== "section2") {
      dispatch(setNavbarColor("black"));
      setLastInView("section2");
    }
  }, [inViewSection1, inViewSection2, dispatch]);

  return (
    <div id="parent-div" className="parent-parent" ref={section1}>
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
        <section ref={section2} className="dtf-Container">
          <NewLayout productID="dtf" productRef={productRef} />
        </section>
      </div>
    </div>
  );
}

export default DesireToFly;
