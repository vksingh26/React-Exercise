import React, { Fragment } from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.css";

const navigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem link="/" exact>Comments</NavigationItem>
    <NavigationItem link="/past">Vote Count</NavigationItem>
    <NavigationItem link="/comments">Up Vote</NavigationItem>
    <NavigationItem link="/ask">New Details</NavigationItem>
  </ul>
)

export default navigationItems;
