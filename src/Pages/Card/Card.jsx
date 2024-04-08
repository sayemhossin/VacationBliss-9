import { Link } from "react-router-dom";

const Card = ({card}) => {
const {id,image,estate_title,segment_name,description,price,status,area,location,facilities} = card
     return (
        <section className=" mt-6 dark:bg-gray-100 dark:text-gray-800">
	<div className="container  flex flex-col  mx-auto   lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center  mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={image} alt="image" className="object-contain h-72 w-[600px]  p-2 lg:p-4 sm:h-80 lg:h-96 xl:h-112  2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center lg:mr-80 p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="md:text-5xl font-bold leading-none sm:text-6xl">{estate_title}
			</h1>
			<div>
				<p>{segment_name}</p>
				<p>{description}</p>
				<p>{price}</p>
				<p>{status}</p>
				<p>{area}</p>
				<p>{location}</p>
				<p>{facilities.map(f => <p key={f.idx}>{f}</p>)}</p>
				
			</div>
			<div>
           <Link to={`/details/${id}`}> <button className="btn">
            View Property
            </button></Link>
            </div>
		</div>
	</div>
</section>
    );
};

export default Card;