import React from 'react';
import Card from './Card';

export default class Cards extends React.Component{

	render(){
		return(
			<div style={{
				display: 'grid',
				gridTemplateColumns: 'auto auto auto',
			  gridColumnGap: '15px',
			  gridRowGap: '15px'
			}}>
				{ this.props.cardList.map((card,i) => 
					<Card 
						key={i} 
						id={i} 
						data={card} 
						show={this.props.show} 
						setShow={this.props.setShow}
						deleteItem={()=>this.props.deleteItem(i)}
					/>
				)}
			</div>
		)
	}
}