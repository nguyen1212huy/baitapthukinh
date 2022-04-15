const stateDefault = 1;
const stateDefaultImg = "./img/products/black-car.jpg";
export const stateNumber = (state = stateDefaultImg, action) => {
  switch (action.type) {
    case "DOI_MAU_XE": {
      state = action.color;
      // state = `./img/products/${action.color}-car.jpg`
      return state;
    }
    default:
      return state;
  }
};
