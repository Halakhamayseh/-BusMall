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
  if (rightRandom!== leftRandom&& middleRandom&&leftRandom!==middleRandom){
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
let buttonResult=document.getElementById('buttonResult');
buttonResult.addEventListener('click',clickButton);
function clickButton(){
  let unolderList=document.getElementById('ulList');
  for (let j=0;j<BusMall.all.length;j++){
    let firstli = document.createElement('li');
    firstli.innerText='This product  ' +BusMall.all[j].nameOfProducts+' has '+BusMall.all[j].vote+' votes and '+BusMall.all[j].views+' views .';
    unolderList.appendChild(firstli);
    console.log(BusMall.all[j].vote,BusMall.all[j].views);
  }
}

function randomNumber(min, max){
  return Math.floor(Math.random()*(max-min+1))+min;
}
// function check(){
//   if (BusMall.all[rightProduct]!= BusMall.all[leftProduct]&& BusMall.all[middleProduct]){
//   }
// }
randomNumber();
render();
