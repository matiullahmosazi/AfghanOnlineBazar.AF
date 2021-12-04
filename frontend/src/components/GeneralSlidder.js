import React, { Component } from "react";
import Slider from "react-slick";
import Image_1 from "./generalSlidder/1.jpg";
import Image_2 from "./generalSlidder/2.jpg";
import Image_3 from "./generalSlidder/3.jpg";
import Image_4 from "./generalSlidder/4.jpg";
import Image_5 from "./generalSlidder/5.jpg";
import Image_6 from "./generalSlidder/6.jpg";
import Image_7 from "./generalSlidder/7.jpg";
import Image_8 from "./generalSlidder/8.jpg";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <div className='container' style={{ paddingBottom: "20px" }}>
        <Slider {...settings}>
          <div>
            <img className='d-block w-100' src={Image_1} alt='First slide' />
          </div>
          <div>
            <img className='d-block w-100' src={Image_2} alt='Second slide' />
          </div>
          <div>
            <img className='d-block w-100' src={Image_3} alt='Third slide' />
          </div>
          <div>
            <img className='d-block w-100' src={Image_4} alt='forth slide' />
          </div>
          <div>
            <img className='d-block w-100' src={Image_5} alt='fifth slide' />
          </div>
          <div>
            <img className='d-block w-100' src={Image_6} alt='sixth slide' />
          </div>
          <div>
            <img className='d-block w-100' src={Image_7} alt='seventh slide' />
          </div>
          <div>
            <img className='d-block w-100' src={Image_8} alt='eighth slide' />
          </div>
        </Slider>
      </div>
    );
  }
}
