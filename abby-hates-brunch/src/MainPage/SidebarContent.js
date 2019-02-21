import React, { Component } from "react";
import "./MainPage.css";
import { FaChevronLeft } from "react-icons/fa";

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
