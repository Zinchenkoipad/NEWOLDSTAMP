import React from 'react';
import Header from './elements/Header';
import Cards from './elements/Cards';

const cardsList=[
  {
    img: 1,
    checkbox: 'Reanna Blankenship',
    sendByAdmin: 'NO',
    installedByUser: 'NO',
    lastEdited: '03.04.2019 16:43'
  },
  {
    img: 2,
    checkbox: 'Vlad Heaton',
    sendByAdmin: 'YES',
    installedByUser: 'YES',
    lastEdited: '12.05.2017 13:34'
  },
  {
    img: 3,
    checkbox: 'Virginia Lowe',
    sendByAdmin: 'YES',
    installedByUser: 'YES',
    lastEdited: '23.09.2018 12:14'
  },
  {
    img: 4,
    checkbox: 'Kiran mcfarland',
    sendByAdmin: 'NO',
    installedByUser: 'NO',
    lastEdited: '30.01.2015 11:14'
  },
  {
    img: 5,
    checkbox: 'Cyrus Manning',
    sendByAdmin: 'YES',
    installedByUser: 'NO',
    lastEdited: '15.01.2020 08:14'
  },
  {
    img: 4,
    checkbox: 'Kiran mcfarland',
    sendByAdmin: 'NO',
    installedByUser: 'NO',
    lastEdited: '30.01.2015 11:14'
  },
  {
    img: 2,
    checkbox: 'Vlad Heaton',
    sendByAdmin: 'YES',
    installedByUser: 'YES',
    lastEdited: '12.05.2017 13:34'
  },
  {
    img: 3,
    checkbox: 'Virginia Lowe',
    sendByAdmin: 'YES',
    installedByUser: 'YES',
    lastEdited: '23.09.2018 12:14'
  },
  {
    img: 1,
    checkbox: 'Reanna Blankenship',
    sendByAdmin: 'NO',
    installedByUser: 'NO',
    lastEdited: '03.04.2019 16:43'
  }
]

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      show: 0,
      checked: {},
      cardList: cardsList
    }
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.deleteItem = this.deleteItem.bind(this)
  }
  handleCheckbox(status,id){
    var checked = {...this.state.checked};
    if(status){
      checked[id] = 1;
    }else{
      checked[id] = 0;
    }
    var qty = Object.values(checked).reduce((sum,value)=>sum+value);
    this.setState({show: qty, checked: checked});
  }
  deleteItem(id){
    var items = [...this.state.cardList]
    if(id.length){
      id.sort((a,b) => b-a)
      id.forEach(i => items.splice(i,1))
    }else{
      items.splice(id,1);
      alert(`card ${this.state.cardList[id].checkbox} was deleted successfully`)
    }
    this.setState({cardList: items})
  }
  render(){
    return (
      <div style={{padding: '20px 20px 20px 10px', fontFamily: 'Arial'}}>
        <Header cardList={this.state.cardList} deleteItem={this.deleteItem} setShow={()=>this.setState({show: 0, checked: {}})} show={this.state.show} checked={this.state.checked}/>
        <Cards cardList={this.state.cardList} deleteItem={this.deleteItem} show={this.state.show} setShow={this.handleCheckbox}/>
      </div>
    );
  }
}