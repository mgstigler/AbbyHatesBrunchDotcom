import React, { Component } from "react";
import { FaChevronLeft } from "react-icons/fa";

import "../MainPage.css";

export default class SidebarContent extends Component {
  render() {
    return (
      <div className="sidebar-content">
        <div
          className="sidebar-title"
          onClick={() => this.props.onSetSidebarOpen(false)}
        >
          <span className="sidebar-title-icon">
            <FaChevronLeft />
          </span>
          <span className="sidebar-title-text">Explore AHBDC!</span>
        </div>
        <div className="sidebar-nav" />
      </div>
    );
  }
}
