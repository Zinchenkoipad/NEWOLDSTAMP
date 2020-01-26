import React from 'react';

export default class Card extends React.Component{
	constructor(){
		super();
		this.state={
			show: false,
			btn: false
		}
	}
	render(){
		return(
			<div 
				style={{borderRadius: '1px', boxShadow: '0px 0px 3px 1px rgba(0,0,0,0.2)', position: 'relative'}}
				onMouseEnter={()=>this.setState({show: true})}
				onMouseLeave={()=>this.setState({show: false})}
			>
				<img 
					style={{borderRadius: '1px', width: '100%',objectFit: 'cover'}} 
					src={`img/${this.props.data.img}.png`} 
					alt={`img/${this.props.data.img}.png`}
				/>
				{
					this.props.show || this.state.show?
						<div style={{
							borderRadius: '1px', 
							position: 'absolute', 
							width: '100%', 
							height: '100%', 
							backgroundColor: 'rgb(65,0,253)', 
							opacity: '0.9', 
							top: '0px'
						}}>
							<input 
								type='checkbox' 
								value={this.props.data.checkbox}
								style={{display: 'block', margin: '10px', height: '18px', width: '18px'}}
								onChange={(event)=>this.props.setShow(event.target.checked, this.props.id)}
							/>
							{
								!this.props.show?
									<React.Fragment>
										<table style={{marginLeft: '28px', fontSize: '14px', color: 'white'}}>
											<tbody>
												<tr>
													<td style={{width: '120px'}}>Sent by admin:</td>
													<td style={{width: '120px'}}>{this.props.data.sendByAdmin}</td>
												</tr>
												<tr>
													<td style={{width: '120px'}}>Installed by user:</td>
													<td style={{width: '120px'}}>{this.props.data.installedByUser}</td>
												</tr>
												<tr>
													<td style={{width: '120px'}}>Last edited:</td>
													<td style={{width: '120px'}}>{this.props.data.lastEdited}</td>
												</tr>
											</tbody>
										</table>
										<div style={{display: 'flex', justifyContent: 'space-between', padding: '24px 31px 0 31px', alignItems: 'center'}} >
											<button 
												onClick={()=>window.open('https://www.linkedin.com/in/valerii-zinchenko-034a9217b/')}
												style={{
													fontSize: '14px', 
													border: '2px solid white', 
													padding: '3px 25px', 
													backgroundColor: this.state.btn?'white':'transparent', 
													color: this.state.btn ? 'rgb(65,0,253)' : 'white',
													borderRadius: '3px'
												}}
												onMouseEnter={()=>this.setState({btn: true})}
												onMouseLeave={()=>this.setState({btn: false})}
											>
												Use
											</button>
											<div style={{display: 'flex'}}>
												<div><img style={{width: '15px'}} src='icons/edit.png' alt='edit'/></div>
												<img style={{width: '20px', margin: '0px 20px 0 20px'}} src='icons/eye.png' alt='eye'/>
												<div onClick={this.props.deleteItem}><img style={{width: '17px'}} src='icons/delete.png' alt='delete'/></div>
											</div>
										</div>
									</React.Fragment>
								:
									null
							}
						</div>
					:
						null
				}
			</div>
		)
	}
}