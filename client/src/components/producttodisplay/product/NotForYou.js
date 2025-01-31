// eslint-disable-next-line
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import CommonButton from "../../CommonButton/CommonButton";
import { useNavigate } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Rodal from "rodal";

import imageData from "../../../shared/itemdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../productDisp.css";
import "rodal/lib/rodal.css";
import NewLayout from "../../NewLayout/NewLayout";


// import ReactPlayer from "react-player";

function NotForYou() {
  const navigate = useNavigate();

  const smallScreenMediaQuery = '(max-width: 700px)';
  const iconSize = 28;
  const delta = 5;
  let startX;
  let startY;
  const imageNFY = imageData.find((img) => img.id === "nfy");

  const sliderRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("nfu1.jpg");

  const handleMouseDown = (event) => {
    startX = event.pageX;
    startY = event.pageY;
  };
  const handleMouseUp = (event, image) => {
    const diffX = Math.abs(event.pageX - startX);
    const diffY = Math.abs(event.pageY - startY);

    if (diffX < delta && diffY < delta) {
      handleImageClick(image);
    }
  };
  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };
  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    swipe: true,
    touchMove: true,
  };
  const getCustomStyles = () => {
    return {
      width: window.matchMedia(smallScreenMediaQuery).matches ? "70%" : "50%",
      height: window.matchMedia(smallScreenMediaQuery).matches? "35%" : "80.5%",
      borderRadius: "3px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      margin: "auto",
      padding: 0
    };
  };

  const customStyles = getCustomStyles();

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
              style={{width: '100%'}}            
            />
          </div>
        </Rodal>
      </div>

      <div className="displayProductContents">
        <section className="video-container" style={{ height: "100vh" }}>
          <div className="titleContainer">
            <h2 className="title">Not For you</h2>

            <div className="btnContainer">
              <CommonButton title="Shop Now" onClickHandler={() => navigate("/notforyoudetail")}/>
            </div>
          </div>

          {/* <ReactPlayer
            className="reactPlayer"
            url="/nfu.mp4"
            playing={true}
            controls={false}
            volume={null}
            muted={true}
            width="100%"
            height="100%"
            loop={true}
            playsinline={true}
          /> */}
          <img src="nfynew.jpg" className="newImg" alt="new dtf img"></img>

        </section>
            <NewLayout productID="nfy"/>
        {/* <div className="carousel-container">
          <div className="arrow-left" onClick={handlePrevious}>
            <IoIosArrowBack size={iconSize} />
          </div>
          <Slider {...settings} ref={sliderRef}>
            {imageNFY.images.map((image, index) => (
              <div key={index}>
                <div
                  className="image-container"
                  onMouseDown={handleMouseDown}
                  onMouseUp={(event) => handleMouseUp(event, image)}
                >
                  <img
                    src={require(`../../../shared/${image}`)}
                    alt='jaja'
                    className="carousel-image"
                  />
                </div>
              </div>
            ))}
          </Slider>
          <div className="arrow-right" onClick={handleNext}>
            <IoIosArrowForward size={iconSize} />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default NotForYou;
