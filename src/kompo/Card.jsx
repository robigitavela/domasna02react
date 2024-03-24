import React from "react";

const Card = ({ model, img, price, availability }) => {
	return (
		<div className='BMW-KARTICI'>
			<h2>{model}</h2>
			<img src={img} alt={model} />
			<h4>Full price {price}</h4>
			<h5>Available === {availability}</h5>
		</div>
	);
};
export default Card;
