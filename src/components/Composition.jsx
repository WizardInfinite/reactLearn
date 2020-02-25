import React from "react";
function Dialog(props) {
  console.log(props);
  // 这里props里的children就代表了内部的内容
  return (
    <div style={{ border: "1px solid #000" }}>
      {props.children.def}
      {props.children.footer}
    </div>
  );
}
function RadionGroup(props) {
  return (
    <div>
      {React.Children.map(props.children, radio => {
        // 要修改虚拟dom,只能clone它
        //参数1是克隆对象
        // 参数2是设置的属性
        return React.cloneElement(radio, {
          name: props.name
        });
      })}
    </div>
  );
}
function Radion({ children, ...rest }) {
  return (
    <label>
      <input type="radio" {...rest} />
      {children}
    </label>
  );
}
const Composition = () => {
  return (
    <div>
      <Dialog>
        {{
          def: "this is default",
          footer: <button onClick={() => alert("react可以的")}>点击事件</button>
        }}
      </Dialog>
      <RadionGroup name="mvvm">
        <Radion value="vue">Vue</Radion>
        <Radion value="react">React</Radion>
      </RadionGroup>
    </div>
  );
};

export default Composition;
