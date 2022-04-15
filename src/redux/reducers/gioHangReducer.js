const stateDefault = [
  {
    maSP: 1,
    tenSP: "iphone",
    hinhaAnh: "./img/products/black-car.jpg",
    giaBan: 1000,
    soLuong: 1,
  },
];
export const gioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHang = state;
      let sp = gioHang.find((sp) => sp.maSP === action.spGH.maSP);
      if (sp) {
        sp.soLuong += 1;
      } else {
        gioHang.push(action.spGH);
        console.log("gioHang");
      }
      return [...gioHang];
    }
    case "XOA_GIO_HANG": {
      let gioHang = [...state];
      gioHang = gioHang.filter((sp) => sp.maSP !== action.maSPClick);
      return gioHang;
    }
    default:
      return state;
  }
};
