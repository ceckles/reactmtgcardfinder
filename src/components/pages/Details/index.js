import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
const Details = () => {
    const [loading, setLoading] = useState(true);
    const [card, setCard] = useState({});
    const { id } = useParams();

    const getCard = async () =>{
      try{
        const resp = await axios.get('https://api.scryfall.com/cards/'+id);
        console.log(resp.data);
        setCard(resp.data);
      }catch(err){console.log(err);}
    };

    useEffect(()=>{
      getCard();
    },[]);

  return (
    <div className="App">
    <h1>DETAILS PAGE</h1>
    <p>{id}</p>
    {card.name}
    </div>
  )
}

export default Details