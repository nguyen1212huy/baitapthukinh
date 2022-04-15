import React, { Component } from "react";
import { connect } from "react-redux";
class SanPhamRedux extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.sanPham.hinhAnh} alt="..." height={350} />
        <div className="card-body">
          <p>{this.props.sanPham.tenSP}</p>
          <p>{this.props.sanPham.giaBan}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.themGioHang(this.props.sanPham);
            }}
          >
            Them gio hang
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      //console.log(sanPhamClick);
      let spGH = { ...sanPhamClick, soLuong: 1 };
      // Tao ra actionn gui len redux
      const action = {
        type: "THEM_GIO_HANG",
        spGH,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(SanPhamRedux);
