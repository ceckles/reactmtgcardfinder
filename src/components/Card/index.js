import React, {useState} from 'react'
import { Image,Text, Badge, Button, MantineProvider, Modal } from '@mantine/core';
import { Link } from "react-router-dom";

const Card = ({card}) => {
  const [opened, setOpened] = useState(false);
  for (let [key, value] of Object.entries(card)) {
    console.log(key + ':' + value);
  }
  return (
    <MantineProvider
      theme={{
        colors: {
          'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
          'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        },
      }}
    >
    <Modal opened={opened} onClose={() => setOpened(false)} title={card.name}>
    {
      <p>Card Details Here</p>
    }
    </Modal>
      {/*<Button color="ocean-blue">Ocean blue button</Button>
    <Badge color="bright-pink" variant="filled">Bright pink badge</Badge>*/}

    <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
        <Image
            key={card.id}
            height={400}
            width={300}
            src={card.image_uris.png}
            alt={card.name}
            radius="md"
            onClick={() => setOpened(true)}
        />
    </div>
    </MantineProvider>
  )
}

export default Card;