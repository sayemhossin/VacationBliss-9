import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FaArrowRight, FaCaretRight, FaLocationArrow } from "react-icons/fa";
const Card = ({card}) => {
const {id,image,estate_title,segment_name,price,status,area,location,facilities} = card
     return (
        <section data-aos="fade-up"  className=" mt-6 rounded-xl dark:bg-gray-100 dark:text-gray-800">
	<div className="container  flex flex-col  mx-auto   lg:flex-row lg:justify-between">
		<div data-aos="zoom-in-down" className="flex items-center justify-center  mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={image} alt="image" className="object-contain h-72 w-[600px] lg:mt-[30%] p-2 lg:p-4 sm:h-80 lg:h-96 xl:h-112  2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center  lg:mr-72 p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 data-aos="fade-left" className="text-3xl md:text-5xl font-bold leading-none sm:text-6xl">{estate_title}
			</h1>
			<div className="divider mt-0 mb-0"></div>
			<div className="space-y-3 mt-4 text-gray-500">
				
				<p data-aos="fade-up-right" className="md:text-2xl">Segment: <span className="font-bold">{segment_name}</span></p>
				
				<div  className="flex justify-around">
					<div data-aos="fade-up-right" className="text-gray-700">
					<h2 className="md:text-2xl text-[17px]  font-bold mb-2 pr-32">Facilities:</h2>
					<p className=" md:text-xl">{facilities.map((f,index) => <li className="flex items-center" key={index}><FaCaretRight className="text-[16px] "/>{f}</li>)}</p>
					</div>
					<div>
					<p data-aos="fade-left" className="md:text-2xl"><span className="font-bold">Status: </span> {status}</p>
					</div>
				</div>

				<div className="flex justify-around">
				<p data-aos="fade-up-right" className="md:text-xl"><span className="font-bold text-gray-500">Area:</span> {area}</p>
				<p data-aos="fade-up-left" className="md:text-2xl text-gray-500"> Price: {price}</p>
				</div>
				<p  data-aos="fade-down-right" className="md:text-xl lg:ml-0 md:ml-16 flex items-center gap-2 "><FaLocationArrow/><span className="font-bold text-gray-500">Location:</span> {location}</p>
				
			</div>
			<div className="divider mt-3 "></div>
			<div  className="flex justify-end">
           <Link to={`/details/${id}`}> <button data-aos="flip-right"  className="btn text-xs
		   md:text-[16px]   bg-[#378CE7] hover:bg-[#1181f8] text-[#ecf0f1] ">
            View Property <FaArrowRight className="" />
            </button></Link>
            </div>
		</div>
	</div>
</section>
    );
};

Card.propTypes = {
	card: PropTypes.object.isRequired
}


export default Card;