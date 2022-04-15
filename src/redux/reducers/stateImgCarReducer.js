export const stateImgCar = (state = "", action) => {
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
