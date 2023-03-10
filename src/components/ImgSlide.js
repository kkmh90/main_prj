import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade";

// border-radius: 0.5rem
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
    };
    return (
      <Fade right>
        <div
          style={{ margin: "auto", width: "90%" }}
          id="gallery"
          className="pt-20"
        >
          <div>
            <Slider {...settings}>
              <div>
                <img
                  src="./img/slide01.png"
                  style={{ height: "600px", width: "100vw" }}
                  alt=""
                />
              </div>
              <div>
                <img
                  src="./img/slide02.png"
                  style={{ height: "600px", width: "100vw" }}
                  alt=""
                />
              </div>
              <div>
                <img
                  src="./img/slide03.png"
                  style={{ height: "600px", width: "100vw" }}
                  alt=""
                />
              </div>
              <div>
                <img
                  src="./img/slide04.png"
                  style={{ height: "600px", width: "100vw" }}
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </Fade>
    );
  }
}
