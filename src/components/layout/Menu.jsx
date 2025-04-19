import React from 'react';
import './Menu.css';

const Menu = props => (
  <aside className="Menu">
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/param/1">Param First</a></li>
        <li><a href="WrongURL">Not Found</a></li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
