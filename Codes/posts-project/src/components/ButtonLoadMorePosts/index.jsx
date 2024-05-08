import { Component } from "react";
import {} from './style.css';

export class Buttom extends Component {
    
    render() {
        // ,colorButtom,
        const {text, triggederEvent, disabled} = this.props;
        // const {onClick} = this.props;
        return (
            // style={{'background-color':colorButtom}}
            <button disabled={disabled} className="btn-load-posts" onClick={triggederEvent} type="button">{text}</button>
        );
    }
}

