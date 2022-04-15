import React, { Component } from "react";
// Ket noi redux
import { connect } from "react-redux";
class GioHangRedux extends Component {
  render() {
    return (
      <div>
        <div className="text-right">
          <span className="text-danger font-weight-bold">Gio Hang(0)</span>
        </div>
        <table className="table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Ma san pham</th>
              <th>Ten san pham</th>
              <th>Hinh anh</th>
              <th>So luong</th>
              <th>Thanh tien</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.stateGioHang.map((spGH, index) => {
              return (
                <tr key={index}>
                  <td>{spGH.maSP}</td>
                  <td>{spGH.tenSP}</td>
                  <td>
                    <img src={spGH.hinhAnh} width={50} height={50} alt="..." />
                  </td>
                  <td>{spGH.giaBan}</td>
                  <td>{spGH.soLuong}</td>
                  <td>{spGH.thanhTien}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.xoaGioHang(spGH.maSP);
                      }}
                      className="btn btn-danger"
                    >
                      Xoa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

//Dinh nghia ham mapStateToProps lay du lieu redux ve
const mapStateToProps = (rootReducer) => {
  return {
    stateGioHang: rootReducer.gioHangReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSPClick) => {
      const action = {
        type: "XOA_GIO_HANG",
        maSPClick,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
