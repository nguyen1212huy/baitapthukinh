import React, { Component } from "react";

import { connect } from "react-redux";

class BaiTapChonXeRedux extends Component {
  render() {
    return (
      <div className="container">
        <h3>BaiTapChonXe</h3>
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={this.props.imgCar} alt="" />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-3">
                <button
                  onClick={() => {
                    this.props.doiMauXe("./img/products/red-car.jpg");
                  }}
                  className="btn"
                  style={{ backgroundColor: "red", color: "#fff" }}
                >
                  Red
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.props.doiMauXe("./img/products/black-car.jpg");
                    //this.props.doiMauXe
                  }}
                  className="btn"
                  style={{ backgroundColor: "black", color: "#fff" }}
                >
                  Black
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.props.doiMauXe("./img/products/steel-car.jpg");
                  }}
                  className="btn"
                  style={{ backgroundColor: "silver", color: "#fff" }}
                >
                  Silver
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.props.doiMauXe("./img/products/silver-car.jpg");
                  }}
                  className="btn"
                  style={{ backgroundColor: "#eee", color: "#fff" }}
                >
                  White
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doiMauXe: (color) => {
      const action = {
        type: "DOI_MAU_XE",
        color: color,
      };
      dispatch(action);
    },
  };
};

const mapStateToProps = (rootReducer) => {
  return {
    imgCar: rootReducer.stateImgCar,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapChonXeRedux);

//rcredux
