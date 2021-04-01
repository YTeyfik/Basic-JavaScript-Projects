const models = [
  {
    name: "Bmw 416d",
    image: "img/bmw.jpg",
    link: "http://www.arabalar.com.tr/1",
  },
  {
    name: "Mazda CX-3",
    image: "img/mazda.jpg",
    link: "http://www.arabalar.com.tr/2",
  },
  {
    name: "Volvo S60",
    image: "img/volvo.jpg",
    link: "http://www.arabalar.com.tr/3",
  },
  {
    name: "Skoda Superb",
    image: "img/skoda.jpg",
    link: "http://www.arabalar.com.tr/4",
  },
  {
    name: "Honda Civic",
    image: "img/honda.jpg",
    link: "http://www.arabalar.com.tr/5",
  },
];

let index = 0;
let slaytCount = models.length;
/*let interval;
let settings={
    duration:'2000',
    random:false
};
*/

//init(settings);

document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });

/*document.querySelectorAll('.fas').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    });
});

document.querySelectorAll('.fas').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
}) 
*/
/*function init(settings){
    //setTimeout bir kere çalışır 
    let prev;
    interval=setInterval(() => {
        if(settings.random){
            do{
                index=Math.floor(Math.random()*slaytCount);
            }
            while(index==prev)
           prev=index;
        }
        else{
            if(slaytCount==index+1){
                index=-1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        
        showSlide(index);
    }, settings.duration);
}
*/

function showSlide(i) {

    index=i;

    if(i<0){
        index=slaytCount-1;
    }
    else if(i>4){
        index=0;
    }


  document.querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
  document.querySelector(".card-title").textContent = models[index].name;
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
