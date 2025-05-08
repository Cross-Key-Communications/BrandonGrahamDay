import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageSlider = () => {
 const settings = {
 dots: true,
 infinite: true,
 speed: 600,
 slidesToShow: 1,
 slidesToScroll: 1,
 autoplay: true,
 autoplaySpeed: 3000,
 };

 const images = [
 '/img1.jpg',
 '/img2.jpg',
 '/img3.jpg'
 ];

return (
<div style={{ width: '100%' , maxWidth: '1000px' margin: '20px auto' }}>
<Slider {...settings}>
{images.map((src, index) => (
<div key={index}>
<img src={src}
alt={`Slide ${index + 1}`}
style={{ width: '100%', height: '400px', objectFit: 'cover' }}
/>
</div>
))}
</Slider>
</div>
);
};

export default ImageSlider;