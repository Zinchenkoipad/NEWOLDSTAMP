import React from 'react';

export default class Header extends React.Component{
	constructor(props){
		super(props);
		this.deleteItems = this.deleteItems.bind(this);
	}
	deleteItems(){
		var itemsToDelete = Object.keys(this.props.checked);
		alert(`cards ${itemsToDelete.map(item=>this.props.cardList[item].checkbox)} were deleted successfully`);
		this.props.deleteItem(itemsToDelete);
		this.props.setShow();
	}
	render(){
		return(
			!this.props.show?
				<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '15px'}}>
					<div style={{fontSize: '15px', color: 'rgb(75,75,75)'}}>Signature List</div>
					<button style={{fontSize: '14px', border: '1px solid rgb(65,0,253)', color: 'rgb(65,0,253)', borderRadius: '2px', padding: '6px 17px'}}>Create a signature</button>
				</div>
			:
				<div style={{cursor: 'pointer', display: 'flex', paddingBottom: '15px'}}>
					<div style={{display: 'flex'}} onClick={this.props.setShow}>
						<input 
							type='checkbox' 
							style={{display: 'block', margin: '5px 20px 0 0', height: '18px', width: '18px'}}
						/>
						<div style={{marginRight: '30px', fontSize: '15px', color: 'rgb(75,75,75)', padding: '6px 0'}}>
							Selected ({this.props.show}) 
							<img style={{width: '12px', marginLeft: '10px'}} src='icons/cancel.png' alt='cancel'/>
						</div>
					</div>
					<div onClick={this.deleteItems} style={{cursor: 'pointer', display: 'flex'}}>
						<div style={{padding: '5px 5px 0 0'}}><img style={{width: '17px'}} src='icons/deleteViolet.png' alt='delete'/></div>
						<div style={{color: 'rgb(65,0,253)', padding: '6px 0'}}>Delete ({this.props.show})</div>
					</div>
				</div>
		)
	}
}