import { Helmet } from "react-helmet-async";
import Avarage from "../../Components/Avarage/Avarage";
import Team from "../../Components/Team/Team";
import DataCatagory from "../DataCatagory/DataCatagory";
import BannerSlider from "./BannerSlider";
import Marquee from "react-fast-marquee";

const Home = () => {
  
    return (
        <div className="overflow-hidden">
          <Helmet>
            <title>VacationBliss</title>
          </Helmet>
      <div className="mt-12 animate__animated animate__backInDown">
      <Marquee speed={70} className="text-xl text-[#144172] font-extrabold">
<i> Welcome to VacationBliss Company LTD.  <span className="mr-12">Your gateway to dream vacations, offering curated destinations and exclusive deals.</span></i>
</Marquee>



      </div>
           
           <div>
           <BannerSlider></BannerSlider>
           </div>

          <div>
            <div className="text-center mt-16 mb-10">
            <h1  data-aos="fade-up" className="text-2xl md:text-5xl text-gray-700 font-extrabold">Luxury Living with Our <span className="text-[#378CE7]">Estate</span></h1>
            <p data-aos="fade-left" className="lg:w-[900px] text-[14px] md:text-[16px] mx-auto mt-4 text-gray-500">Explore Our Estate and Unlock a World of Luxury Living. From Exquisite Homes to Premier Amenities, Experience the Epitome of Comfort and Elegance.</p>
            </div>

          <DataCatagory></DataCatagory>
          </div>
    <div>
    <div className="text-center mt-16 mb-10">
            <h1 data-aos="fade-down" className="text-2xl md:text-5xl text-gray-700 font-extrabold">Company Achievements Overview </h1>
            <p data-aos="fade-up" className="lg:w-[900px] text-[14px] md:text-[16px] mx-auto mt-4 text-gray-500">Discover our Company Achievements Overview, showcasing our milestones, breakthroughs, and successes. From transformative projects to industry recognition, explore how we have surpassed expectations and continue to drive innovation in our field</p>
            </div>
      <Avarage></Avarage>
    </div>
    <div>
      <Team></Team>
    </div>
        </div>
    );
};

export default Home;