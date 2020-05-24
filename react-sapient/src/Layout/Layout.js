import React from "react";

import Aux from "../Auxiliary/Auxiliary";
import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import Pagination from '../components/Pagination/Pagination';

const layout = (props) => (
  
  <Aux>
    <Toolbar/>
    <main>{props.children}</main>
    <Pagination/>
  </Aux>
)
export default layout;
