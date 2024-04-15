import { FaCaretRight } from 'react-icons/fa';
import {useLoaderData,useParams} from 'react-router-dom'

const CardDetails = () => {
 const cards = useLoaderData()
 const {id} = useParams()

const card =  cards.find(card => card.id == id)

    console.log(card)
    return (
        <div>
     

        <div className="card w-full  mt-12  border-2">
  <figure>
    <img className='md:w-full lg:h-[700px]' src={card.image} alt="image" />
    </figure>
    <p className='absolute bottom-[580px] md:bottom-[470px] rounded-e-full text-xl md:text-3xl w-fit bg-red-500 p-4  '>{card.status}</p>
  <div className="card-body  text-gray-700">
    <h2 className="card-title text-4xl font-extrabold">{card.estate_title}</h2>
    <p className='text-xl'>{card.description}</p>

<p className='text-2xl font-bold mt-5'>Segment:{card.segment_name}</p>
<div className="flex flex-col md:flex-row">
<p className='text-xl'><span className="font-bold">Area: </span> {card.area}</p>
<p className='text-xl'><span className="font-bold">Price: </span> {card.price}</p>
</div>

<h1 className='text-2xl  font-extrabold mt-4'>Facilities:</h1>
<p className=" md:text-xl">{card.facilities.map((f,index) => <li className="flex items-center" key={index}><FaCaretRight className="text-[16px] "/>{f}</li>)}</p>

<p className='text-xl mt-3'><span className="font-extrabold">  Location: </span>{card.location}</p>
  
  </div>
</div>
        </div>
    );
};

export default CardDetails;