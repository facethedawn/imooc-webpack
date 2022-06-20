import "@babel/polyfill";

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
