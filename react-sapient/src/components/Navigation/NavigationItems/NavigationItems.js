import React, { Fragment } from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.css";

const navigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem link="/" exact>Comments</NavigationItem>
    <NavigationItem link="/vote-count">Vote Count</NavigationItem>
    <NavigationItem link="/upvote">Up Vote</NavigationItem>
    <NavigationItem link="/details">News Details</NavigationItem>
  </ul>
)

export default navigationItems;
