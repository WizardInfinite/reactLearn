import React, { Component } from 'react';
// import Test from './components/Test's
// import State from './components/State'
// import Clock from './components/Clock'
// import StateHooks from './components/StateHooks'
// import HandleEvent from './components/EventHandle'
// import ContextTest from './components/ContextTest'
// import React, { Component } from 'react'
// import HocTest from './components/HocTest'
// import Composition from './components/Composition'
// import HooksTest from './components/HooksTest'
import FormTest from './components/FormTest'
import KFormTest from './components/KFormTest'
import Dialog from './components/Dialog'
import TreeNodes from './components/Tress'
import ReduxTest from './components/ReduxTest'
export default class App extends Component {
  receiveSonMesage=(val)=>{
    console.log(val)
  }
  render() {

    return (
      <div>
        <ReduxTest></ReduxTest>
        {/* <HandleEvent change={(val)=>this.receiveSonMesage(val)}></HandleEvent> */}
        {/* {this.props.title} */}
      </div>
    )
  }
}

// const App = (props) => {
//     return (
//         <div>
//           {props.title}
//           {/* <Test></Test> */}
//           {/* <State></State> */}
//           <HandleEvent></HandleEvent>
//         </div>
//     );
// }

// export default App;
