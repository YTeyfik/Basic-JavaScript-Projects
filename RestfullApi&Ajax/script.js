const first = () => {
  console.log("first");
  second();
};

const second = () => {
  setTimeout(() => {
    console.log("second");
  }, 2000);
  third();
};

const third = () => {
  console.log("third");
};

first();

//Ajax=Asynchronous Javascript And XML

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else if (xhr.status === 404) {
      console.log("kaynak bulunamadı");
    }
  }
};

xhr.onprogress = function () {
  console.log("on  progressing");
};

xhr.open("GET", "msg.txt", true); // true asenkron olma drumu
xhr.send();

/*
readyState:
0: request not initialized
1:server connection established
2:request received
3:processing request
4:request finished and response is ready

status:
200:"OK"
403:"Forbidden"
404:"Not Found"

*/

document.querySelector("#getEmployee").addEventListener("click", loadEmployee);

function loadEmployee() {
  let loadImage = document.querySelector("#loading");
  loadImage.style.display = "block";

  const ahr = new XMLHttpRequest();
  ahr.open("GET", "employees.json", true);

  setTimeout(() => {
    ahr.onload = function () {
      //sonlanıp sonlanmadığını gönderir
      loadImage.style.display = "none";
      if (this.status === 200) {
        let employees = JSON.parse(this.responseText);
        let html = "";
        employees.forEach((employee) => {
          html += `<tr>
                            <td>${employee.firstname}</td>
                            <td>${employee.lastname}</td>
                            <td>${employee.age}</td>
                            <td>${employee.retired}</td>
                        </tr>`;
        });

        document.querySelector("#employees").innerHTML = html;
      }
    };
    ahr.send();
  }, 2000);
}
////////REST APİ GET Talepleri
document.querySelector("#getOne").addEventListener("click", getOne);

document.querySelector("#getAll").addEventListener("click", getAll);

document.querySelector('#postData').addEventListener('click',postData);

function getOne() {
  var id=document.getElementById('postid').value
  const url = "https://jsonplaceholder.typicode.com/posts/"+id;
  var qhr = new XMLHttpRequest();
  
  qhr.open("GET", url, true);

  qhr.onload = function () {
    if (this.status === 200) {
      var post = JSON.parse(this.responseText);

      var html = "";

      
        html += `<div class="card mb-2">
          <div class="card-header">
            ${post.id}--${post.title}
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>${post.body}</p>
            </blockquote>
          </div>
          </div>`;
      

      document.querySelector("#results").innerHTML = html;
    }
  };
  qhr.send();
}

function getAll() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  var qhr = new XMLHttpRequest();

  qhr.open("GET", url, true);

  qhr.onload = function () {
    if (this.status === 200) {
      var posts = JSON.parse(this.responseText);

      var html = "";

      posts.forEach((post) => {
        html += `<div class="card mb-2">
          <div class="card-header">
          ${post.id}--${post.title}
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>${post.body}</p>
            </blockquote>
          </div>
          </div>`;
      });

      document.querySelector("#results").innerHTML = html;
    }
  };
  qhr.send();
}

//restapi post
function postData(){
  const data={
    userId:1,
    title:"new title",
    body:"new body"
  }
  let json=JSON.stringify(data)
  let url="https://jsonplaceholder.typicode.com/posts"
  let mhr=new XMLHttpRequest()
  mhr.open('POST',url,true)
  mhr.setRequestHeader('Content-type','application/json; charset=utf-8')

  mhr.onload=function(){
      if(mhr.status===201&&mhr.readyState===4){
        var post=mhr.responseText;
        console.log(post)
      }
  }
  mhr.send(json)
  
}


///Callback fonksiyonları ve asenkron programlama

let prodd=[
  {id:1,name:"Samsung",price:2500},
  {id:2,name:"GM",price:1500},
  {id:3,name:"Huawei",price:3500},
]

var added=false

function addProdd(prd,callback){
  //burası promise
  return new Promise(function(resolve,reject){
    setTimeout(() => {
      prodd.push(prd)
      let added=false
      if(added){
        resolve()
      }
      else{
        reject('hata:500')
      }

  }, 2000);
  })


/* burası callback fonksiyon 
  if(added){
    setTimeout(() => {
      prodd.push(prd)
      callback(null,prd)
  }, 2000);
  }else{
    callback('500',prd)
  }
  */
  
}

const getProdd=()=>{
  setTimeout(() => {
    prodd.forEach(p=>{
      console.log(p.name)
    })
  }, 1000);
}


addProdd({id:4,name:"Iphone",price:4000})
.then(getProdd)
.catch(function(err){
  console.log(err)
})
/* burası callback fonksiyon için 
,function(err,data){
  if(err){
    console.log(err)
  }else{
    console.log(data)
  }
})*/