import React from 'react'
import Title from '../Title'
import ItemCount from '../ItemCount';

const productos = [
    
        {
            "id": 1,
            "title": "Licensed Wooden Bacon",
            "price": 5585,
            "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
            "images": [
              "https://picsum.photos/640/640?r=937",
              "https://picsum.photos/640/640?r=3827",
              "https://picsum.photos/640/640?r=2204"
            ],
            "creationAt": "2023-05-02T16:06:33.000Z",
            "updatedAt": "2023-05-02T19:15:05.000Z",
            "category": {
              "id": 2,
              "name": "Electronics",
              "image": "https://picsum.photos/640/640?r=3826",
              "creationAt": "2023-05-02T16:06:33.000Z",
              "updatedAt": "2023-05-02T16:06:33.000Z"
            }
          },

          {
            "id": 2,
            "title": "Electronic Concrete Chicken",
            "price": 95,
            "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
            "images": [
              "https://picsum.photos/640/640?r=2926"
            ],
            "creationAt": "2023-05-02T16:06:33.000Z",
            "updatedAt": "2023-05-02T17:15:57.000Z",
            "category": {
              "id": 4,
              "name": "Shoes",
              "image": "https://picsum.photos/640/640?r=7776",
              "creationAt": "2023-05-02T16:06:33.000Z",
              "updatedAt": "2023-05-02T16:06:33.000Z"
            }
          },

          {
            "id": 3,
            "title": "Refined Soft Salad",
            "price": 137,
            "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
            "images": [
              "https://picsum.photos/640/640?r=5753",
              "https://picsum.photos/640/640?r=7319",
              "https://picsum.photos/640/640?r=7416"
            ],
            "creationAt": "2023-05-02T16:06:33.000Z",
            "updatedAt": "2023-05-02T16:06:33.000Z",
            "category": {
              "id": 3,
              "name": "Furniture",
              "image": "https://picsum.photos/640/640?r=548",
              "creationAt": "2023-05-02T16:06:33.000Z",
              "updatedAt": "2023-05-02T16:06:33.000Z"
            }
          },  

];

const ItemListContainer = ({texto}) => {

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

  return (
    <>
        <Title greeting={texto} />
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </>
  
  );
}


export default ItemListContainer;