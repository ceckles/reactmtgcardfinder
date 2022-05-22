import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { LoadingOverlay,Center } from '@mantine/core';
const Details = () => {
    const [loading, setLoading] = useState(false);
    const [card, setCard] = useState({});
    const { id } = useParams();

    const getCard = async () =>{
      try{
        const resp = await axios.get('https://api.scryfall.com/cards/'+id);
        setCard(resp.data);
        setLoading((v) => !v);
      }catch(err){
        console.log(err);
      }
    };

    useEffect(()=>{
      getCard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  return (
    <>
    <Center>
    <div style={{ width: 400, position: 'relative' }}>
    <LoadingOverlay visible={loading} />
    <h1>DETAILS PAGE</h1>
    <p>{id}</p>
    {card.name}
    </div>
    </Center>
    </>
  )
}

export default Details