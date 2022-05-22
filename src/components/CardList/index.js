import { useState } from 'react';
import { SimpleGrid } from "@mantine/core";
import { motion } from 'framer-motion';
import Card from '../Card';

const CardList = ({cardList}) => {
  return (
      <>
    <SimpleGrid cols={3} spacing="sm">
        {
            cardList.map(card =>{
                return(
                <motion.div
                    animate={{scale: 1}}
                    transition={{ delay:2, type:"tween", duration: 0.55}}
                    initial={{scale: 0}}
                >
                <Card card={card}/>
                </motion.div>)
            })
        }
    </SimpleGrid>
    </>
 )
}

export default CardList
