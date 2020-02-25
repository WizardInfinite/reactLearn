import React, { Component } from 'react'
import Logo from '../assets/logo192.png'
import Style from '../index.module.css'
export default class JSXTtets extends Component {
    render() {
        const names = {
            a: "hm",
            b: "wjy"
          };
          function FomatName(username) {
            return username.a + username.b;
          }
          const arr = [1, 2, 3];
          const li = arr.map(item => <li key={item}>{item}</li>);
        return (
                <h1>
                  {FomatName(names)}
              <ul>{li}</ul>
                  <img src={Logo} alt="" className={Style.img} />
                </h1>
              
        )
    }
}
