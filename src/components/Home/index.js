import '../../App.css';
import React, { useState, useEffect } from 'react';
import { TextInput, Button, Group, Box, } from '@mantine/core';
import { useForm } from '@mantine/form';
import CardList from '../CardList';
import axios from 'axios';


const Home =() => {
  //States
  const [cardList, setCardList] = useState([]);

  //Search for Card
  // const handleSubmit = (e) =>{
  //   e.preventDefault();
    
  // }
    const form = useForm({
      initialValues: {
        cardName: '',
      },
      validate: (values) => ({
        cardName: values.cardName.length < 2 ? 'Too short name' : null,
      }),
    });

    function GetCards (name){
      //Fetch Card from DB and set response in state array
      console.log("Card name searching:",name);
      axios.get('https://api.scryfall.com/cards/search?q=%22' + name + '%22')
        .then(response => {
          const lst = response.data.data;
          //console.log(lst);
          setCardList(lst);
          //console.log(cardList.length);
          //console.log(cardList[0].artist)
        }, error =>{
          console.log("Error Fetching Card Data:", error);
        });
    }

  
  return (
    <Box sx={{ maxWidth: 1000 }} mx="auto">
    <form onSubmit={form.onSubmit((values) => GetCards(values.cardName))}>
          <TextInput
          id="cardName"
          placeholder="Search for a Magic Card"
          required
          label="Card Name"
          {...form.getInputProps('cardName')}
        />
        <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
    <br/>
     {cardList.length > 0
       ? <CardList cardList={cardList}/>
       : <div id="cardlist"></div>
     }
    </Box>
  );
}

export default Home;
