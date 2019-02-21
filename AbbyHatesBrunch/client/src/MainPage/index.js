import React, { Component } from "react";
import Toolbar from "./Toolbar.js";

import RelativeSidebar from "./RelativeSidebar.js";
import BlogFeed from "./BlogFeed.js";
import "./MainPage.css";

export default class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <RelativeSidebar />
        <div className="feed-container" />
      </div>
    );
  }
}
