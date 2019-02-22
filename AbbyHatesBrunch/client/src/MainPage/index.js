import React, { Component } from "react";

import MainToolbar from "./MainToolbar.js";
import RelativeSidebar from "./RelativeSidebar";
import BlogFeed from "./BlogFeed.js";

import "./MainPage.css";

export default class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <RelativeSidebar />
        <div className="main-page-content">
          <MainToolbar />
          <BlogFeed />
        </div>
      </div>
    );
  }
}
