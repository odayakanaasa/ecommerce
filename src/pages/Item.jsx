import "./Item.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";

class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemId: props.match.params.itemId,
		};
	}
	render() {
		const item = PRODUCTS[this.state.itemId];
		console.log(item);
		return (
			<div className="item-page">
				<div className="item-page-items">
					<h1 className="item-pg-item-rndr">
						{item.name}
					</h1>
					<img className="item-pg-item-img" src={item.images[0].small}/>
					<img className="item-pg-item-img" src={item.images[1].small}/>
					<img className="item-pg-item-img" src={item.images[2].small}/>
					<p>{item.price}</p>
					<div className="item-page-item-description">Description:
						<p className="item-page-item-description-p">
							{item.description}
						</p>
					</div>
				</div>,
			</div>


		);
	}
}

export default Item;
