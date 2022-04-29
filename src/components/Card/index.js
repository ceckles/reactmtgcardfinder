import { useState } from "react";
import {Image, Button, Modal, Group } from "@mantine/core";
import "../../css/mana-cost.css";
import { ConvertMana } from "../res/func/ConvertManaFunc";
import {Link} from 'react-router-dom';

const Card = ({ card }) => {
  console.log(card);
  const [opened, setOpened] = useState(false);


  function ManaCoast(cost) {
    //Mana Format: "{3}{G}"
    //console.log(mana);
    let value = cost.replaceAll("{", " ");
    value = value.replaceAll("}", "");
    value = value.substring(1);
    // cost = cost.slice(0,-1);
    value = value.split(" ");
    //console.log("MANA COAST:", value);
    return value;
  }
  const cost = ManaCoast(card.mana_cost);

  function ReplaceMana(data) {
    //console.log(data);
    const imgs = data.map((val) => {
      //console.log(val);
      const img = ConvertMana(val);
      return `mana small ${img} shadow`;
    });
    return imgs;
  }
  const manaImg = ReplaceMana(cost);
  console.log(manaImg);
  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title={card.name}>
        {
          <div>
            <p>{card.name}</p>
              <Group spacing={"xs"}>
              coast:
              {manaImg.map((mana) => {
                return <span className={mana} />;
              })}
              </Group>
            <Image src={card.image_uris.png} />
            <Group spacing={"xs"} grow>
            <Link to={"/detail/"+card.id}>
            <Button compact variant="gradient" gradient={{ from: "orange", to: "red" }}>Details</Button></Link>
            <Button compact variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} onClick={() => window.open(`${card.purchase_uris.tcgplayer}`)}>Buy from TCG Player {"$"+card.prices.usd}</Button>
            </Group>
          </div>
        }
      </Modal>

      <div style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}>
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
  );
};

export default Card;