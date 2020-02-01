import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state={
      circles: [
        [],
        []
      ]
    }
  }
  render(){
    return(
    <div>
      {this.state.circles.map= (item,index) =>{
        if (item.length === 0){
          return <div id={index}></div>
        }else{
          item.map((arr,ind)=>{
            if(arr.length === 0){
              return <div id={`${index}+${ind}`}></div>
            }
          })
        }
      }} 
      <h1>HEY</h1>
    </div>
    )
  }

}

export default App;
