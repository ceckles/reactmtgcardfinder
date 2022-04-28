import React, { useState } from 'react';
import { SimpleGrid, useMantineTheme } from "@mantine/core";
import Card from '../Card';

const CardList = ({cardList}) => {
    const theme = useMantineTheme();
    const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
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
