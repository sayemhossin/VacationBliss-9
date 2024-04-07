
const BannerSlider = () => {
    return (
        <div className="carousel md:h-[500px] lg:h-[700px] w-full mt-12 rounded-md">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/bddjfk2/THEME-HOTEL-SIGN-FIVE-STARS-FACADE-BUILDING-Getty-Images-1320779330-3.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn text-white btn-outline border-1">❮</a> 
      <a href="#slide2" className="btn text-white btn-outline border-1">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/VtwD6Mm/motel-1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn text-white btn-outline border-1">❮</a> 
      <a href="#slide3" className="btn text-white btn-outline border-1">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/D4Y1zQ3/pexels-thorsten-technoman-338504.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn text-white btn-outline border-1">❮</a> 
      <a href="#slide4" className="btn text-white btn-outline border-1">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/5cG8frT/South-View-Lodges-pic-1-800x450.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn text-white btn-outline border-1 ">❮</a> 
      <a href="#slide1" className="btn text-white btn-outline">❯</a>
    </div>
  </div>
</div>
    );
};

export default BannerSlider;