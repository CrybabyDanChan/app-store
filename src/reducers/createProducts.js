export const initialState = {
  title: "",
  description: "",
  imgFile: null,
  count: 1
};

const createProducts = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_CREATE_PRODUCT":
      return {
        ...state,
        title: action.payload.valueTitle,
        description: action.payload.valueDescription,
        imgFile: action.payload.imgFile,
        count: action.payload.count
      };
    default:
      return state;
  }
};

export default createProducts;
