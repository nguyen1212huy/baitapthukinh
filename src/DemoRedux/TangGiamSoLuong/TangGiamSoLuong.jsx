import React, { Component } from "react";
//Kết nối redux
import { connect } from "react-redux";
class TangGiamSoLuong extends Component {
  // state = {number: 1}
  render() {
    console.log(this.props);

    return (
      <div className="container">
        <p>{this.props.number}</p>
        <button
          onClick={() => {
            this.props.tangGiamSoLuong(1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.props.tangGiamSoLuong(-1);
          }}
        >
          -
        </button>
      </div>
    );
  }
}

//Lấy dữ liệu từ redux về
const mapStateToProps = (rootReducer) => {
  //state tổng của ứng dụng   // tạo ra các props cho component là giá trị
  return {
    number: rootReducer.stateNumber,
  };
};
//Hàm định props gửi dữ liệu lên store


// Định nghĩa 1 hàm mapDispatchToProps => Nhiệm vụ: tạo ra các props cho component là hàm

const mapDispatchToProps = (dispatch) => {
  return {
    tangGiamSoLuong: (soLuong) => {
      //console.log(123);
          const action = {
              type: 'TANG_GIAM_SO_LUONG', // redux bat buoc phai co
              soLuong: soLuong,
          }
          //Dua du lieu len redux
          dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TangGiamSoLuong);
