export const initialState = {
  title: "",
  description: "",
  imgFile: null
};

const createProducts = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_CREATE_PRODUCT":
      return {
        ...state,
        title: action.payload.valueTitle,
        description: action.payload.valueDescription,
        imgFile: action.payload.imgFile
      };
    default:
      return state;
  }
};

export default createProducts;
