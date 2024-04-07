import Navbar from "../../Components/Navbar/Navbar";
import DataCatagory from "../DataCatagory/DataCatagory";
import BannerSlider from "./BannerSlider";

const Home = () => {
  
    return (
        <div>
            <Navbar></Navbar>
           
           <BannerSlider></BannerSlider>
           <DataCatagory></DataCatagory>
    
        </div>
    );
};

export default Home;