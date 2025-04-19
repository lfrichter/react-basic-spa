import React from 'react';
import Menu from './Menu';
import './LeftBar.css';

const LeftBar = (props) => {
    return (
        <aside className="LeftBar">
            <div className="logoArea">
                {props.logo ? (
                    <img src={props.logo} alt="Logo" />
                ) : (
                    <div className="logoPlaceholder">Logo</div>
                )}
            </div>
            <Menu />
        </aside>
    );
};

export default LeftBar;
