import React from "react";
import './petFilterStyle.css';

const PetSelection = ({handlePetSelection}) => {
  return(
    <div className="pet-selection">
      <div className="container">
        <ul className="pets-list">
          <li className="pet-item" title='all' onClick={(e) => handlePetSelection('all')}>
            <img className="category-background" src="../img/green-background.jpg" alt="green"/>
            <img className="pet-icon" src="../img/treats.png" alt="all"/>
          </li>
          <li className="pet-item" title='cat' onClick={(e) => handlePetSelection('cat')}>
            <img className="category-background" src="../img/red-background.jpg" alt="red"/>
            <img className="pet-icon" src="../img/cat.png" alt="cat"/>
          </li>
          <li className="pet-item" title='dog' onClick={(e) => handlePetSelection('dog')}>
            <img className="category-background" src="../img/yellow-background.jpg" alt="yellow"/>
            <img className="pet-icon" src="../img/dog.png" alt="dog"/>
          </li>
          <li className="pet-item" title='horse' onClick={(e) => handlePetSelection('horse')}>
            <img className="category-background" src="../img/green-background.jpg" alt="green"/>
            <img className="pet-icon" src="../img/horseback.png" alt="horse"/>
          </li>
          <li className="pet-item" title='bird' onClick={(e) => handlePetSelection('bird')}>
            <img className="category-background" src="../img/red-background.jpg" alt="red"/>
            <img className="pet-icon" src="../img/bird.png" alt="bird"/>
          </li>
          <li className="pet-item" title='fish' onClick={(e) => handlePetSelection('fish')}>
            <img className="category-background" src="../img/yellow-background.jpg" alt="yellow"/>
            <img className="pet-icon" src="../img/fish.png" alt="fish"/>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default PetSelection;