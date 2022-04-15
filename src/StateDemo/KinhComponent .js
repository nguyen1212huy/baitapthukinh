import React, { Component } from "react";

export default class KinhComponent extends Component {
  render() {
    let { glassesItem } = this.props;
    return (
      <img
        onClick={() => {
          this.props.changeGlasses(glassesItem);
        }}
        className="p-2 ml-2 border border-width-1"
        style={{ width: "90px", cursor: "pointer" }}
        src={glassesItem.img}
      />
    );
  }
}
