import React, { useState } from 'react';
import { SimpleGrid } from "@mantine/core";
import Card from '../Card';

const CardList = ({cardList}) => {
  return (
      <>
    <SimpleGrid cols={3} spacing="sm">
        {
            cardList.map(card =>{
                return(
                <div>
                <Card card={card}/>
                </div>)
            })
        }
    </SimpleGrid>
    </>
 )
}

export default CardList
