import React, { Component } from 'react'
import ToppingBox from "./ToppingBox/ToppingBox"
import "./Topping.css"
export default class Topping extends Component {
  render() {
    return (
      <div className='Topping'>
          <ToppingBox/>
          <ToppingBox/>
          <ToppingBox/>
          <ToppingBox/>
      </div>
    )
  }
}
