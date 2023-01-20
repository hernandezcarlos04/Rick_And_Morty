import Card from './Card';

 function Cards({ characters } ) {

   return (
      <div>
         {
            characters.map( ({id,name, gender, onClose, specie, image}) => {
               return(
                  <Card 
                  key={id}
                  name={name}
                  specie={specie}
                  gender={gender}
                  image={image}
                  onClose={ () => window.alert('Emulamos que se cierra la card')}
                  />
               )
            })
         }
      </div>
   );
}

export default Cards;