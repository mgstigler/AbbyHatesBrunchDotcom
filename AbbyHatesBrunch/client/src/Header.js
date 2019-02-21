import React, { Component } from "react";
import "./App.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { classes: "header closed" };
  }

  toggleHide() {
    if (this.state.classes === "header") {
      this.setState({ classes: "header closed" });
    } else {
      this.setState({ classes: "header closed" });
    }
  }
  render() {
    return (
      <div className="header" onClick={() => this.toggleHide()}>
        <div className="header-title">
          <span>Abby</span>
          <span style={{ color: "red", margin: "0px 20px" }}>Hates</span>{" "}
          <span>Brunch</span>
        </div>
        <div className="header-image" />
      </div>
    );
  }
}

export default Header;
