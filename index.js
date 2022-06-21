import "@babel/polyfill";
import React, {Component} from "react";
import ReactDom from "react-dom";
import {add} from "./math";

console.log('hello world');
import "./index.scss";
import imgUrl from "./1.jpeg";

const img = new Image();

img.src = imgUrl;

document.querySelector(".wrap").append(img);


var btn = document.createElement('button');

btn.innerHTML = '新增';

document.body.appendChild(btn);

btn.onclick = function() {
  var div = document.createElement('div');
  div.innerHTML = 'item';
  document.body.appendChild(div);
}


const arr = [
  new Promise(() => {
    console.log(123)
  }),
  new Promise(() => {
    console.log(123)
  })
]

const result = arr.map(item => {
  console.log(item)
})


console.log(result)


class App extends Component {
  render() {
    return <div>Hello world</div>;
  }
}

ReactDom.render(<App />, document.querySelector(".wrap"));


add(1,2);
