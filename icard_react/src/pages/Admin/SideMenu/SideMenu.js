import React from 'react';
import "./SideMenu.scss";

export function SideMenu(props) {
    const { children } = props;
  return (
    <div>
      <h1>Side Menu</h1>
        <div> { children }</div>
    </div>
  )
}
