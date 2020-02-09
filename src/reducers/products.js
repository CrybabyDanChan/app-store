/* eslint-disable no-case-declarations */
export const initialState = {
  arrayOfAllProducts: [{
    id: 1,
    name: "Iphone 10",
    avatar: "https://izone.pl/21526-large_default/apple-iphone-11-zielony-64gb.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, impedit.",
    quantity: 5,
    count: 1,
    beInCart: false
  },
  {
    id: 2,
    name: "Apple watch 3",
    avatar: "https://s.alicdn.com/@sc01/kf/HTB14GqcegTqK1RjSZPhq6xfOFXan/Best-Excellent-Quality-watch-Series-3-38Mm.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, impedit.",
    quantity: 2,
    count: 1,
    beInCart: false
  }],
  arrayOfMyProducts: [
    {
      id: 3,
      name: "Iphone 11",
      avatar: "https://vernik.me/wp-content/uploads/2019/09/uemrerminor.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, impedit.",
      quantity: 10,
      count: 1,
      beInCart: false
    }
  ],
  arrayOfCart: []
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let newArrayOfCart = state.arrayOfCart.concat();
      const newArrayOfAllProducts = state.arrayOfAllProducts.concat();
      const id = action.payload;
      const product = newArrayOfAllProducts.find(p => p.id === id);
      product.beInCart = !product.beInCart;
      newArrayOfCart.push(product);
      newArrayOfCart = newArrayOfCart.filter(product => product.beInCart);
      return {
        ...state,
        arrayOfCart: newArrayOfCart,
        arrayOfAllProducts: newArrayOfAllProducts
      };

    case "CLEAR_CART" :
      const newArrayOfCartClear = state.arrayOfCart
        .concat()
        .map(product => {
          product.beInCart = false;
          return product;
        })
        .filter(product => product.beInCart);
      return {
        ...state,
        arrayOfCart: newArrayOfCartClear
      };
    default:
      return state;
  }
};

export default products;
