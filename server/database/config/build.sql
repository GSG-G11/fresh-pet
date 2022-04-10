BEGIN;

DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE
  products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    pet_category TEXT NOT NULL,
    sub_category TEXT NOT NULL,
    price DECIMAL NOT NULL,
    image TEXT NOT NULL
  );

INSERT INTO
  products(name, description, pet_category, sub_category, price, image)
VALUES (
    'Meow Mix',
    'Original Choice Dry Cat Food, 6.3-lb bag',
    'cat',
    'food',
    9.48,
    'https://img.chewy.com/is/catalog/99965_MAIN._AC_SS232_V1462999356_.jpg'
  ), (
    'Friskies',
    ' Pate Country Style Dinner Canned Cat Food, 5.5-oz, case of 24',
    'cat',
    'food',
    16.80,
    'https://img.chewy.com/is/image/catalog/76181_MAIN._AC_SS232_V1638493372_.jpg'
  ), (
    'Frisco',
    ' Hooded Cat Litter Box, Gray, Extra Large, 26-in',
    'cat',
    'accessories',
    34.64,
    'https://img.chewy.com/is/image/catalog/153375_Main._AC_SS232_V1567796240_.jpg'
  ), (
    'Trixie',
    ' Trixie Ava White and Grey Scratching Post - XXL',
    'cat',
    'accessories',
    99.99,
    'https://cdn.shopify.com/s/files/1/0086/0795/7054/products/TrixieAvaWhiteandGreyScratchingPost-XXL_510x@2x.jpg'
  ), (
    'Pedigree',
    ' Pedigree Vegetarian Adult Dry Dog Food',
    'dog',
    'food',
    16.80,
    'https://cdn.shopify.com/s/files/1/0086/0795/7054/products/PedigreeVegetarianAdultDryDogFood_2ff90367-12ec-4954-a33c-6d0a5f22f69e_510x@2x.jpg'
  ), (
    'Petstages',
    ' Petstages Dogwood Durable Dog Chew Stick',
    'dog',
    'toy',
    15.33,
    'https://cdn.shopify.com/s/files/1/0086/0795/7054/products/PetstagesDogwoodDurableDogChewStick_510x@2x.jpg'
  ), (
    'Vitapol',
    ' Vitapol Economic Food For Cockatiel - 1.2 kg',
    'bird',
    'food',
    22.80,
    'https://cdn.shopify.com/s/files/1/0086/0795/7054/products/Vitapol-Economic-Food-For-Cockatiel---1.2-kg_510x@2x.jpg'
  ), (
    'Tetra BettaMin Flakes',
    ' A specialized combination of freeze dried brine shrimp and small, thin red flakes formulated to maximize intake. ',
    'fish',
    'food',
    7.99,
    'https://www.pet.co.nz/images/cache/product_feature/images/products/5c0ef2ba357436.28410216.jpeg'
  ), (
    'Aqua Ones',
    ' Aqua Ones Artificial Plants will add vibrancy and brighten up any aquarium.Suitable for Coldwater and Freshwater Tropical.',
    'fish',
    'accessories',
    5.99,
    'https://www.pet.co.nz/images/cache/product_feature/images/products/620d81683a39f6.47934570.jpeg'
  );

COMMIT;