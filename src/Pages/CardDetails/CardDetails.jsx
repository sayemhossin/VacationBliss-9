import {useLoaderData,useParams} from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';

const CardDetails = () => {
 const cards = useLoaderData()
 const {id} = useParams()

const card =  cards.find(card => card.id == id)

    console.log(card)
    return (
        <div>
     

        <div className="card w-full mt-12  border-2">
  <figure><img className='lg:w-full lg:h-[700px]' src={card.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{card.estate_title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary ">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CardDetails;