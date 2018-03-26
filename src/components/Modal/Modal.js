import React from "react";
import "./Modal.css";

class Modal extends React.Component{

	render(){
		return( 
			<div className="myModal">{props.children}</div>
		);
	}
}

export default class Modal;