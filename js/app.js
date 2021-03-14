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
const imageSection=document.getElementById('imageSection');
const left=document.getElementById('left');
const middle=document.getElementById('middle');
const right=document.getElementById('right');
function BusMall(nameOfProducts,imgEx){
  this.nameOfProducts=nameOfProducts;
  this.imgEx=imgEx;
  this.vote=0;
  this.views=0;
  this.src=`./img/${nameOfProducts}.${imgEx}`;
  BusMall.all.push(this);
}
BusMall.all=[];
for ( let i =0; i<nameOfProducts.length;i++){
  new BusMall (nameOfProducts[i]);
}
function render (){
  const leftProduct= randomNumber(0,BusMall.all.length-1);
  const leftRandom=BusMall.all[leftProduct];
  left.src=leftRandom.src;
  left.title=leftRandom.nameOfProducts;
  left.alt=leftRandom.nameOfProducts;
  const middleProduct= randomNumber(0,BusMall.all.length-1);
  const middleRandom=BusMall.all[middleProduct];
  middle.src=middleRandom.src;
  middle.title=middleRandom.nameOfProducts;
  middle.alt=middleRandom.nameOfProducts;
  const rightProduct= randomNumber(0,BusMall.all.length-1);
  const rightRandom=BusMall.all[rightProduct];
  right.src=rightRandom.src;
  right.title=rightRandom.nameOfProducts;
  right.alt=rightRandom.nameOfProducts;
}
imageSection.addEventListener('click',clickEvent);
function clickEvent(event){
    if(event.target.id ==='left' || event.target.id==='middle'|| event.target.id==='right'){
        for(let i=0;i<BusMall.all.length;i++){
            if(BusMall.all[i].nameOfProducts===event.target.title){
                BusMall.all[i].vote++;
                BusMall.all[i].views++;
                consale.table(BusMall.all[i]);
            }
        }
        render();
    }

}
function randomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
randomNumber();
render();
const buttonResult=document.getElementById('buttonResult');
let totalClick=0;
buttonResult.addEventListener('click',clickButton);
function clickButton(event){
    if(totalClick<25){
        alert ()
    }