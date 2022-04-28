import React, {useState} from 'react'
import { Image,Text, Badge, Button, MantineProvider, Modal, useMantineTheme } from '@mantine/core';
import { Link } from "react-router-dom";
import '../../css/mana-cost.css';
import {ManaCoast} from '../res/manaCoast';
import {ConvertMana} from '../res/ConvertManaFunc';

const Card = ({card}) => {
  const theme = useMantineTheme();
  const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  const [opened, setOpened] = useState(false);
  // for (let [key, value] of Object.entries(card)) {
  //   console.log(key + ':' + value);
  // }

  function ManaCoast(cost){
    //Mana Format: "{3}{G}"
    //console.log(mana);
    let value = cost.replaceAll("{"," ");
    value = value.replaceAll("}", "");
    value = value.substring(1);
    // cost = cost.slice(0,-1);
    value = value.split(" ");
    //console.log("MANA COAST:", value);
    return value
  };
  const cost = ManaCoast(card.mana_cost);

  function ReplaceMana(data){
    //console.log(data);
    const imgs = data.map((val) =>{
      //console.log(val);
      const img = ConvertMana(val);
      return `mana small ${img} shadow`;
  })
  return imgs;
  };
  const manaImg = ReplaceMana(cost);
  console.log(manaImg);
  return (
    <>
    <Modal opened={opened} onClose={() => setOpened(false)} title={card.name}>
    {
      <div>
        <p>{card.name}</p>
        <p>coast:{
          manaImg.map(mana =>{
            return(
                  <span class={mana}/>
            )
           }
          )}
      </p>
        <Image
          src={card.image_uris.png}
        />
      </div>
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
    </>
  )
}

export default Card;