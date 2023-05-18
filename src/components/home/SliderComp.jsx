import React from 'react'
import Slider from "react-slick";
const SliderComp = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
          <Slider {...settings} className='mt-4 bg-light'>
          <div className='d-flex align-items-center justify-content-start'>
               <div className='m-3'><h3 className='display-4 '>en babat vetnamkalar burda</h3>
               <p className='text-secondary m-4 h4 '>cox babatdidayna Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse possimus facilis totam tempora nam doloribus eaque explicabo impedit vero a?</p>
               <span className=' details-header'> Details</span>
               </div>
                <img src="https://5.imimg.com/data5/IOS/Default/2021/6/LB/WF/HS/17552598/product-jpeg-500x500.png" alt="" />
          </div>
          <div className='d-flex align-items-center justify-content-start'>
               <div className='m-3'><h3 className='display-4 '>en babat tapickalar burda</h3>
               <p className='text-secondary m-4 h4 '>cox babatdidayna Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse possimus facilis totam tempora nam doloribus eaque explicabo impedit vero a?</p></div>
                <img src="https://5.imimg.com/data5/IOS/Default/2021/6/LB/WF/HS/17552598/product-jpeg-500x500.png" alt="" />
          </div>
          
         
          
        
        </Slider>
    </div>
  )
}

export default SliderComp