import React from "react";
import "./Card.css";


const Card = props => (
	<div className="card" id= {props.id} onClick={() => props.chooseCard(props.id)}>
		<div className="img-container">
			<img src= {require(`../../../images/${props.image}`)} alt={props.image} />
		</div>
	</div>
	);

export default Card;
