import styled from "./card.module.css";


const Card = ({name, gender, onClose, species, image}) => {
   return (
      <div className={styled.container}>
         <button onClick={onClose} className={styled.cerrar}>X</button>
         <h2>{name}</h2>
         <img  src={image} alt="rick" />
         <h2>{species} </h2>
         <h2>{gender}</h2>
      </div>
   );
}

export default Card;