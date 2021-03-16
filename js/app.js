'use strict';
const nameOfProducts=[
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg',
];
let imageSection=document.getElementById('imageSection');
let left=document.getElementById('left');
let middle=document.getElementById('middle');
let right=document.getElementById('right');
function BusMall(nameOfProducts,imgEx){
  this.nameOfProducts=nameOfProducts;
  this.imgEx=imgEx;
  this.vote=0;
  this.views=0;
  this.src=`./img/${nameOfProducts}`;
  BusMall.all.push(this);
}
BusMall.all=[];
for ( let i =0; i<nameOfProducts.length;i++){
  new BusMall (nameOfProducts[i]);
}
function render (){
  //max,min random and put the data in array(left)//
  let leftProduct= randomNumber(0,BusMall.all.length-1);
  let leftRandom=BusMall.all[leftProduct];
  //max,min random and put the data in array(middle)//
  let middleProduct= randomNumber(0,BusMall.all.length-1);
  let middleRandom=BusMall.all[middleProduct];
  //max,min random and put the data in array(right)//
  let rightProduct= randomNumber(0,BusMall.all.length-1);
  let rightRandom=BusMall.all[rightProduct];
  //if for repeated//
  if (rightRandom!== leftRandom && middleRandom !==rightRandom&&leftRandom!==middleRandom){
    //left//
    left.src=leftRandom.src;
    left.title=leftRandom.nameOfProducts;
    left.alt=leftRandom.nameOfProducts;
    //middle//
    middle.src=middleRandom.src;
    middle.title=middleRandom.nameOfProducts;
    middle.alt=middleRandom.nameOfProducts;
    //right//
    right.src=rightRandom.src;
    right.title=rightRandom.nameOfProducts;
    right.alt=rightRandom.nameOfProducts;
    //increase the viwes for each side//
    BusMall.all[rightProduct].views++;
    BusMall.all[leftProduct].views++;
    BusMall.all[middleProduct].views++;
  }
}
imageSection.addEventListener('click',clickEvent);
let totalClick=25;
function clickEvent(event){
  // console.log(event);
  if(event.target.id ==='left' || event.target.id==='middle'||event.target.id==='right'){
    totalClick-=1;
    for(let i=0;i<BusMall.all.length;i++){
      if(BusMall.all[i].nameOfProducts===event.target.title){
        BusMall.all[i].vote++;
      }
    }
    if (totalClick===0){
      imageSection.removeEventListener('click',clickEvent);
    }
    render();
  }
}
// let buttonResult=document.getElementById('buttonResult');
// buttonResult.addEventListener('click',clickButton);
// function clickButton(){
//   let unolderList=document.getElementById('ulList');
//   for (let j=0;j<BusMall.all.length;j++){
//     let firstli = document.createElement('li');
//     firstli.innerText='This product  ' +BusMall.all[j].nameOfProducts+' has '+BusMall.all[j].vote+' votes and '+BusMall.all[j].views+' views .';
//     unolderList.appendChild(firstli);
//     console.log(BusMall.all[j].vote,BusMall.all[j].views);
//   }
// }

function randomNumber(min, max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

let buttonResult=document.getElementById('buttonResult');
buttonResult.addEventListener('click',clickButton);
let viewsArray=[];
let clickArray=[];
function clickButton(){
  for (let j=0;j<BusMall.all.length;j++){
    viewsArray.push(BusMall.all[j].views);
    // console.log(BusMall.all[j].views);
    clickArray.push(BusMall.all[j].vote);}
  let context=document.getElementById('ChartPar').getContext('2d');
  let parChart=new Chart(context,{
    type:'bar',
    data: {
      labels:[
        'bag',
        'banana',
        'bathroom',
        'boots',
        'breakfast',
        'bubblegum',
        'chair',
        'cthulhu',
        'dog-duck',
        'dragon',
        'pen',
        'pet-sweep',
        'scissors',
        'shark',
        'sweep',
        'tauntaun',
        'unicorn',
        'usb',
        'water-can',
        'wine-glass',
      ],
      datasets:[{
        clolor:'red',
        backgroundColor: [ 'rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 206, 86, 0.8)','rgba(75, 192, 192, 0.8)', 'rgba(153, 102, 255, 0.8)', 'rgba(255, 159, 64, 0.8)', 'rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 206, 86, 0.8)', 'rgba(75, 192, 192, 0.8)','rgba(153, 102, 255, 0.8)', 'rgba(255, 159, 64, 0.8)', 'rgba(255, 99, 132, 0.8)','rgba(54, 162, 235, 0.8)', 'rgba(255, 206, 86, 0.8)','rgba(75, 192, 192, 0.8)','rgba(153, 102, 255, 0.8)', 'rgba(255, 159, 64, 0.8)', 'rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)','rgba(255, 206, 86, 0.8)', 'rgba(75, 192, 192, 0.8)'],
        borderColor:'blue',
        label:'views',
        data:viewsArray,
      },{
        label:'click',
        data:clickArray,
      }]
    },
  });
}

randomNumber();
render();
