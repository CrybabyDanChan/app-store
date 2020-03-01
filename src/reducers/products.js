/* eslint-disable no-case-declarations */
export const initialState = {
  arrayOfAllProducts: [],
  arrayOfMyProducts: [],
  arrayOfCart: [],
  valueForm: null,
  checkProducts: false,
  productIdToChange: null
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ALL_PRODUCTS":
      return {
        ...state
      };

    case "ADD_ALL_PRODUCTS":
      const newProducts = action.payload;
      const myProducts = newProducts.filter(product => product.ownedByUser);
      return {
        ...state,
        arrayOfAllProducts: newProducts,
        arrayOfMyProducts: myProducts,
        checkProducts: true
      };

    case "LOAD_CREATE_PRODUCT":
      return {
        ...state,
        valueForm: action.payload
      };

    case "ADD_PRODUCT":
      const newProduct = action.payload;
      const newArrayOfProducts = state.arrayOfAllProducts.concat();
      const newArrayOfMyProducts = state.arrayOfMyProducts.concat();
      newArrayOfProducts.push(newProduct);
      newArrayOfMyProducts.push(newProduct);
      return {
        ...state,
        arrayOfAllProducts: newArrayOfProducts,
        arrayOfMyProducts: newArrayOfMyProducts,
        valueForm: null
      };

    case "LOAD_EDIT_PRODUCT":
      return {
        ...state,
        productIdToChange: action.payload.productId,
        valueForm: action.payload.valueForm
      };

    case "EDIT_PRODUCT":
      const updateProduct = action.payload;
      const newAllProducts = state.arrayOfAllProducts.concat();
      const newMyProducts = state.arrayOfMyProducts.concat();
      const indexProductInMy = newMyProducts.findIndex(product => product.id === updateProduct.id);
      const indexProductInALl = newAllProducts.findIndex(product => product.id === updateProduct.id);
      newAllProducts[indexProductInALl] = updateProduct;
      newMyProducts[indexProductInMy] = updateProduct;
      return {
        ...state,
        arrayOfAllProducts: newAllProducts,
        arrayOfMyProducts: newMyProducts,
        productIdToChange: null,
        valueForm: null
      };

    case "ADD_PRODUCTS_TO_CART":
      let newAllProd = state.arrayOfAllProducts.concat();
      const newCartProd = action.payload;
      newAllProd = newAllProd.map(product => {
        const newProduct = newCartProd.find(p => p.id === product.id);
        if (newProduct) {
          return newProduct;
        }
        return product;
      });
      return {
        ...state,
        arrayOfAllProducts: newAllProd,
        arrayOfCart: newCartProd
      };

    case "ADD_PRODUCT_TO_CART":
      const productFromCart = action.payload;
      let newAllProdAdd = state.arrayOfAllProducts.concat();
      const newCartProdAdd = state.arrayOfCart.concat();
      newCartProdAdd.push(productFromCart);
      newAllProdAdd = newAllProdAdd.map(p => {
        if (p.id === productFromCart.id) {
          return productFromCart;
        }
        return p;
      });
      return {
        ...state,
        arrayOfAllProducts: newAllProdAdd,
        arrayOfCart: newCartProdAdd
      };

    case "UPDATE_PRODUCT_FROM_CART":
      const updateProductFromCart = action.payload;
      const arrayOfProductsForUpdate = state.arrayOfAllProducts.concat();
      const arrayOfCartsForUpdate = state.arrayOfCart.concat();
      const indexUpdateProductInAll = arrayOfProductsForUpdate.findIndex(p => p.id === updateProductFromCart.id);
      const indexUpdateProductInCart = arrayOfCartsForUpdate.findIndex(p => p.id === updateProductFromCart.id);
      arrayOfProductsForUpdate[indexUpdateProductInAll] = updateProductFromCart;
      arrayOfCartsForUpdate[indexUpdateProductInCart] = updateProductFromCart;
      return {
        ...state,
        arrayOfAllProducts: arrayOfProductsForUpdate,
        arrayOfCart: arrayOfCartsForUpdate
      };

    case "REMOVE_PPRODUCT_FROM_CART":
      const productRemoveFromCart = action.payload;
      const newProdAllArray = state.arrayOfAllProducts.concat();
      let newCartArray = state.arrayOfCart.concat();
      newCartArray = newCartArray.filter(p => p.id !== productRemoveFromCart.id);
      const indexProductInAll = newProdAllArray.findIndex(prod => prod.id === productRemoveFromCart.id);
      newProdAllArray[indexProductInAll] = productRemoveFromCart;
      return {
        ...state,
        arrayOfCart: newCartArray,
        arrayOfAllProducts: newProdAllArray
      };

    case "USER_HAS_CHANGED":
      return {
        ...state,
        checkProducts: false
      };

    default:
      return state;
  }
};

export default products;
