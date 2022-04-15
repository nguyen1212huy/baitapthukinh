import React, { Component } from "react";
import SanPham from "../Props/BaiTapXemChiTiet/SanPham";
import KinhComponent from "./KinhComponent ";

export default class BaiTapThuKinh extends Component {
  arrProduct = [
    {
      id: 1,
      name: "gucci123",
      img: "./img-NBH-baitapthukinh/glassesImage/v1.png",
      price: 5000,
    },
    {
      id: 1,
      name: "gucci123",
      img: "./img-NBH-baitapthukinh/glassesImage/v2.png",
      price: 5000,
    },
    {
      id: 1,
      name: "gucci123",
      img: "./img-NBH-baitapthukinh/glassesImage/v3.png",
      price: 5000,
    },
    {
      id: 1,
      name: "gucci123",
      img: "./img-NBH-baitapthukinh/glassesImage/v4.png",
      price: 5000,
    },
    {
      id: 1,
      name: "gucci123",
      img: "./img-NBH-baitapthukinh/glassesImage/v5.png",
      price: 5000,
    },
    {
      id: 1,
      name: "gucci123",
      img: "./img-NBH-baitapthukinh/glassesImage/v6.png",
      price: 5000,
    },
    {
      id: 1,
      name: "gucci123",
      img: "./img-NBH-baitapthukinh/glassesImage/v7.png",
      price: 5000,
    },
    {
      id: 1,
      name: "gucci123",
      img: "./img-NBH-baitapthukinh/glassesImage/v8.png",
      price: 5000,
    },
    {
      id: 1,
      name: "gucci123",
      img: "./img-NBH-baitapthukinh/glassesImage/v9.png",
      price: 5000,
    },
  ];

  state = {
    glassesCurrent: {
      id: 1,
      name: "gucci123",
      img: "./img-NBH-baitapthukinh/glassesImage/v1.png",
      price: 5000,
    },
  };

  renderGlassesList = () => {
    return this.arrProduct.map((glassesItem, index) => {
      return (
        <div className="key={index} bg-light container text-center mt-5 d-flex justify-content-center">
          <KinhComponent
            glassesItem={glassesItem}
            changeGlasses={this.changeGlasses}
          />
        </div>
      );
    });
  };

  changeGlasses = (newGlasses) => {
    this.setState({ glassesCurrent: newGlasses });
  };

  render() {
    const styleGlasses = {
      width: "150px",
      top: "75px",
      right: "23px",
      oppacity: "0.7",
    };
    const infoGlasses = {
      width: "250px",
      top: "200px",
      left: "225px",
      paddingLeft: "15px",
      backgroundColor: "rgba(255,127,0,.5)",
      textAlign: "left",
      height: "105px",
    };

    return (
      <div
        style={{
          backgroundImage:
            "url(./img-NBH-baitapthukinh/glassesImage/background.jpg)",
          backgroundSize: "2000px",
          minHeight: "2000px",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,.8)", minHeight: "2000px" }}>
          <h3
            style={{ backgroundColor: "rgba(0,0,0,.3)" }}
            className="text-center text-light p-5"
          >
            Try glass
          </h3>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    src="./img-NBH-baitapthukinh/glassesImage/model.jpg"
                    alt="..."
                    style={{ width: "250px" }}
                  />
                  <img
                    style={styleGlasses}
                    className="position-absolute"
                    src={this.state.glassesCurrent.img}
                  />
                  <div
                    className="position-relative font-weight-bold"
                    style={infoGlasses}
                  >
                    <span style={{ color: "#AB82FF", fontSize: "18px" }}>
                      Ten kinh
                    </span>{" "}
                    <br />
                    <span style={{ fontSize: "13px", fontWeight: "400px" }}>
                      Mo Ta
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  className="position:absolute"
                  src="./img-NBH-baitapthukinh/glassesImage/model.jpg"
                  alt="..."
                  style={{ width: "250px" }}
                />
              </div>
            </div>
          </div>
          /* Div chua cac kinh duoc chon*/
          <div className="bg-light container text-center mt-5 d-flex justify-content-center">
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}
