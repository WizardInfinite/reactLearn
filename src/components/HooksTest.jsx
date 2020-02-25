import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import {Button} from 'antd'
// import Button from 'antd/lib/button'
//  import "antd/dist/antd.css"
//仅仅展示水果列表
function FruitsList({fruits,setfruit}){
    console.log(fruits)
    return(
        <ul>
            <Button>这是antd的按钮</Button>
            {fruits.map(item=><li key={item} onClick={()=>setfruit(item)}>{item}</li>)}
        </ul>
    )
}
function AddFruits(props){
    const[pname,setPname] = useState();
  const Addfn=(e)=>{
        if(e.key==='Enter'){
            props.onAddFruit(pname)
            setPname("")
        }
    }
    return(
        <input type="text" value={pname} onChange={e=>setPname(e.target.value)} onKeyDown={Addfn} />
    )
}
const HooksTest = () => {
    const [fruit,setfruit] = useState("")
    const [fruits,setfruits] = useState([])
    // 异步获取水果列表
    //后面的是依赖数组，只要依赖数组变，就会执行里面的函数，依赖为空，代表只执行一次
    useEffect(()=>{
        Axios.get('https://www.fastmock.site/mock/32ee2f0c5c4c465dccf1abe8b8b2a0eb/test/commentsList')
        .then(res=>{console.log(res)})
    },[])
    return (
        <div>
            <AddFruits onAddFruit={pname=>setfruits([...fruits,pname])} />
            {fruit===''?'请选择喜爱的水果':`您喜欢的水果是${fruit}`}
            <FruitsList fruits={fruits} setfruit={setfruit}></FruitsList>
        </div>
    );
}

export default HooksTest;
