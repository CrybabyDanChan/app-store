export const initialState = {
  arrayOfAllProducts: [{
    id: 1,
    name: "Iphone 10",
    avatar: "https://izone.pl/21526-large_default/apple-iphone-11-zielony-64gb.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, impedit."
  }],
  arrayOfMyProducts: [
    {
      id: 1,
      name: "Iphone 11",
      avatar: "https://vernik.me/wp-content/uploads/2019/09/uemrerminor.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, impedit."
    }
  ]
};

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default products;
