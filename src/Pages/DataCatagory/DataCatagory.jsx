import {useLoaderData} from 'react-router-dom'
import Card from '../Card/Card';

const DataCatagory = () => {
    const cards = useLoaderData()
  
    return (
        <div>
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default DataCatagory;