import React from 'react';
import './petFilterStyle.css';

// don't repeat yourself 😌
const PetSelection = ({ handlePetSelection }) => {
  const petCategory = [
    {
      category: 'all',
      image: '../img/treats.png',
      bgImage: '../img/green-background.jpg',
    },
    {
      category: 'cat',
      image: '../img/cat.png',
      bgImage: '../img/red-background.jpg',
    },
    {
      category: 'dog',
      image: '../img/dog.png',
      bgImage: '../img/yellow-background.jpg',
    },
    {
      category: 'horse',
      image: '../img/horseback.png',
      bgImage: '../img/red-background.jpg',
    },
    {
      category: 'bird',
      image: '../img/bird.png',
      bgImage: '../img/yellow-background.jpg',
    },
    {
      category: 'fish',
      image: '../img/fish.png',
      bgImage: '../img/green-background.jpg',
    },
  ];

  return (
    <div className='pet-selection'>
        <ul className='pets-list'>
          {petCategory.map(({ category, image, bgImage }) => {
            return (
              <li
                key={category}
                className='pet-item'
                title={category}
                onClick={(e) => handlePetSelection(category)}>
                <img
                  className='category-background'
                  src={bgImage}
                  alt='green'
                />
                <img className='pet-icon' src={image} alt={category} />
              </li>
            );
          })}
        </ul>
    </div>
  );
};
export default PetSelection;
