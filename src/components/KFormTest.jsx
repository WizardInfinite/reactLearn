import React, { Component } from 'react'
import {Input,Button} from 'antd'
// 创建一个高阶组件
function KfromCreate(Comp){
    return class extends Component{
        constructor(props){
            super(props)
            this.state={
                usernameMessae:'错误提示'
            }
            this.options = {}
        }
          //单向校验
          validateField=(field)=>{
            console.log('validate')
            const{rules} = this.options[field];
            rules.some(rule=>{
                if(rule.required){
                      this.setState({
                          [field+'Message']:rule.message
                      })
                      return true
                }
            })
            return false
        }
        // 变更处理
        handleChange=(e)=>{
            const {name,value} = e.target;
            this.setState({
                [name]:value
            },()=>{
                this.validateField(name)
            })
        }
        getFiledDec=(fiels,option)=>{
            this.options[fiels] = option
            //返回一个装饰器即高阶组件
            return function(InputComp){
                return (
                    <div>
                        {/* 这里不能直接修改，需要对其进行clone */}
                        {
                            React.cloneElement(InputComp,{
                                name:fiels,//控件的name
                                value:this.state[fiels]||'',
                                onChange:this.handleChange

                            })
                        }
                        <InputComp></InputComp>
                    </div>
                )
            }
        }
        // 全局校验
        validateFields=()=>{
            console.log('validate')
        }
      
       render(){
           return <Comp {...this.props} getFiledDec={this.getFiledDec} validateFields={this.validateFields}></Comp>
       }
    }
}
@KfromCreate
class KFormTest extends Component {
    login = ()=>{
        this.props.validateFields()
    }
    render() {
        const{getFiledDec} = this.props
        return (
            <div>
              {getFiledDec('username',{
                  rules:[{required:true,message:'请输入用户名'}]
              })(<Input />)}
              <Input type="password"></Input>
              <Button onClick={this.login}>登录</Button>  
            </div>
        )
    }
}
export default KFormTest

