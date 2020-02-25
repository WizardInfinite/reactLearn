import React from "react";
function Lesson(props) {
  return (
    <div>
      {props.stage} - {props.title}
    </div>
  );
}
// 定义高阶组件widthConten 负责包装
// 包装后的组件传入参数 根据改参数 获取显示数据
// props=>{}指的是包装以后的组件
// Comp指的是传递过来的组件
const lessons = [
  { stage: "React", title: "核心API" },
  { stage: "React", title: "组件化1" },
  { stage: "React", title: "组件化2" }
];
// 包装函数的内部操作
// 相当于
// function widthContent(Comp){
//     return function(props){
//         const Content = lessons[props.idx];
//    return <Comp {...Content} />
//     }
// }
const widthContent = Comp => props => {
    const Content = lessons[props.idx];
   return <Comp {...Content} />
}
//包装
const LessWidthContent = widthContent(Lesson)
const HocTest = () => {
  return (
      <div>
          {[0,0,0].map((item,idx)=>(<LessWidthContent key={idx} idx={idx}/>))}
      </div>
  )
};

export default HocTest;
