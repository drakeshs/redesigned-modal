import React, { useState } from "react";
import "./styles.css";
import CNBClogo from "./assets/images/cnbcLogo.svg";
import Modal from "./components/modal";

export default function App() {
  const [isOpen, setIsopen] = useState(false);

  return (
    <div className="App">
      <img className="cnbcLogo" src={CNBClogo} alt="CNBC modal challenge" />
        <button onClick={() => setIsopen(!isOpen)} id="openModal">OPEN</button>
        {isOpen ? <Modal/> : <></>}
      <p>
        Sugar plum halvah caramels. Brownie lemon drops chupa chups donut.
        Brownie chupa chups tart tiramisu toffee sweet roll jelly-o. Cotton
        candy dessert donut cookie toffee danish croissant jujubes. Bear claw
        icing tiramisu cake sugar plum dessert. Chocolate cake gingerbread cake
        pastry oat cake. Tart gummies dragée. Dessert gingerbread lemon drops
        muffin halvah cotton candy fruitcake dessert ice cream. Apple pie bear
        claw chupa chups candy oat cake pastry. Pudding sesame snaps fruitcake
        donut macaroon candy canes. Tiramisu tootsie roll oat cake brownie
        jelly. Tiramisu pudding croissant liquorice cake pie tiramisu jelly
        beans. Sweet roll chocolate cupcake.
      </p>

      <p>
        Pastry chocolate cake jelly carrot cake carrot cake. Chocolate cake
        liquorice pie chocolate danish biscuit. Toffee gummi bears biscuit chupa
        chups. Chocolate bar muffin chocolate cake jelly chupa chups icing.
        Sweet roll tiramisu candy. Dragée chupa chups gummies icing gummies
        marzipan toffee sweet. Jelly sesame snaps gummi bears cotton candy
        liquorice apple pie cake muffin. Dragée toffee tootsie roll marzipan
        lemon drops. Gummi bears dessert brownie sweet tiramisu halvah lollipop
        lemon drops. Halvah jelly beans oat cake toffee lollipop. Lollipop
        powder caramels croissant tiramisu. Cupcake liquorice jujubes bonbon
        sweet tiramisu marshmallow tart.
      </p>

      <p>
        Carrot cake sweet jelly cotton candy. Jujubes brownie chocolate bar
        soufflé macaroon lollipop. Cake liquorice candy canes jelly toffee
        gingerbread dragée pudding. Pastry chupa chups muffin lollipop sweet
        roll. Fruitcake bear claw tart pie toffee bonbon. Cotton candy
        gingerbread cake pastry. Marzipan sesame snaps croissant wafer candy ice
        cream cupcake. Marshmallow candy powder. Brownie powder cotton candy
        jelly topping. Halvah lollipop soufflé jujubes jelly-o chocolate cake
        croissant. Sugar plum jelly beans chocolate chocolate bar marshmallow
        bonbon. Macaroon lollipop topping liquorice cupcake tootsie roll
        croissant lemon drops.
      </p>
    </div>
  );
}
