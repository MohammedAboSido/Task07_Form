import React, { Component } from 'react';
import "./style.css";
class Button extends Component {
    render() {
        const {title,type,toggle}  = this.props;
        return (
            <button type={type} className={toggle ? 'btn white' : 'btn'}>{title}</button>
        );
    }
}

export default Button;
