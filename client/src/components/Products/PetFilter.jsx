import React from 'react';
import './petFilterStyle.css';

// don't repeat yourself 😌
const PetSelection = ({ handlePetSelection }) => {
  const petCategory = [
    {
      category: 'all',
      image: '../img/treats.png',
    },
    {
      category: 'cat',
      image: '../img/cat.png',
    },
    {
      category: 'dog',
      image: '../img/dog.png',
    },
    {
      category: 'horse',
      image: '../img/horseback.png',
    },
    {
      category: 'bird',
      image: '../img/bird.png',
    },
    {
      category: 'fish',
      image: '../img/fish.png',
    },
  ];

  return (
    <div className='pet-selection'>
      <div className='container'>
        <ul className='pets-list'>
          {petCategory.map(({ category, image }) => {
            return (
              <li
                key={category}
                className='pet-item'
                title={category}
                onClick={(e) => handlePetSelection(category)}>
                <img
                  className='category-background'
                  src='../img/green-background.jpg'
                  alt='green'
                />
                <img className='pet-icon' src={image} alt={category} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default PetSelection;
