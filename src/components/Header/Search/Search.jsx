import React, { Component } from 'react'
import "./Search.css"
import {SearchOutlined} from'@ant-design/icons'
export default class Search extends Component {

   inputRef = React.createRef();

    focus =() =>{
      this.inputRef.current.style.border="2px rgba(69, 85, 206, 0.685) solid";
   }
    blur = () =>{
      this.inputRef.current.style.border="2px rgba(222, 223, 230, 0.685) solid";
    }
  render() {
    return (
    <>
      <SearchOutlined style={{fontSize:"20px",position:"absolute",marginLeft:"10px",marginTop:"5px",color:"grey",paddingTop:"5px",paddingLeft:"5px"}}/>
      <div className="bigbox"  ref={this.inputRef}>
           <input type="text" className="inp" onFocus={this.focus} onBlur={this.blur}/>
      </div>  
    </>
    )
  }
}
