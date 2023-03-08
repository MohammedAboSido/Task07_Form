import React, { Component } from 'react';
import "./style.css";
class Separator extends Component {
    render() {
        const {title}  = this.props;
        return (
            <div className='separatorWrapper'>
                {title && <span className='separatorTitle'>{title}</span>}
            </div>
        );
    }
}

export default Separator;
