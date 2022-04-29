import React, { useState } from "react";
import {Image, Button, Modal, } from "@mantine/core";
import "../../css/mana-cost.css";
import { ConvertMana } from "../res/func/ConvertManaFunc";

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
            <p>
              coast:
              {manaImg.map((mana) => {
                return <span className={mana} />;
              })}
            </p>
            <Image src={card.image_uris.png} />
            <Button
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
              onClick={() => window.open(`${card.name}`)}
            >
              Orange red
            </Button>
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