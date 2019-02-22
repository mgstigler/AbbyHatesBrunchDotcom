import React, { Component } from "react";
import Sidebar from "react-sidebar";
import { FaBars } from "react-icons/fa";

import SidebarContent from "./SidebarContent.js";

import "../MainPage.css";

export default class RelativeSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
  }

  onSetSidebarOpen = open => {
    console.log("set" + open);
    this.setState({ sidebarOpen: open });
  };

  render() {
    return (
      <div className="sidebar-container">
        <Sidebar
          sidebar={<SidebarContent onSetSidebarOpen={this.onSetSidebarOpen} />}
          docked={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          sidebarClassName="sidebar"
          styles={{
            root: { overflowX: "visible" },
            sidebar: { overflowX: "visible" },
            content: { overflowX: "visible" },
            overlay: { overflowX: "visible" }
          }}
        >
          <span
            className="sidebar-open-button"
            onClick={() => this.onSetSidebarOpen(true)}
          >
            <FaBars size={20} />
          </span>
        </Sidebar>
      </div>
    );
  }
}
