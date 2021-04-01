/*var p = new Promise(function(resolve,reject){
    if(true){
        resolve('Success')
    }else{
        reject('Error')
    }
})

p.then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err)
})*/

/*
new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(5)
    }, 1000);
}).then(function(data){
    console.log(data)
    return data*data
}).then(function(data){
    console.log(data)
    return data*data
}).then(function(data){
    console.log(data)
    return data*data
}).then(function(data){
    console.log(data)
    return data*data
})


*/
/*
const isMomHappy=true

const willGetNewPhone=new Promise((resolve,reject)=>{
    if(isMomHappy){
        const phone={
            name:'Iphone 8',
            price:4000,
            color:"silver"
        }
        resolve(phone)
    }else{
        const err=new Error('Mom is not happy')
        reject(err)
    }
})

const showToFriends=(phone)=>{
    const message="Hi friends this is my new phone"+ phone.name
    return Promise.resolve(message)
}
const askMom=()=>{
    willGetNewPhone
    .then(showToFriends)
    .then(message=>console.log(message))
    .catch(err=>{
        console.log(err)
    })
}
askMom()
*/


let myObj={
    url:"https://randomuser.me/api/?results=5"  
}

let request=obj=>{
    return new Promise((resolve,reject)=>{
        let xhr=new XMLHttpRequest()
        xhr.open(obj.method || 'GET',obj.url)
        if(xhr.headers){
            Object.keys[obj.headers].forEach(key => {
                xhr.setRequestHeader(key,obj.headers[key])
            });
        }
        xhr.onload=()=>{
            if(xhr.status >=200 &&xhr.status<300){
                resolve(xhr.response)
            }else{
                reject(xhr.statusText)
            }
        }
        
        xhr.onerror=()=>{
        reject(xhr.statusText)
        }

        xhr.send(obj.body)

    })
}

let buildHtml=data=>{
    let users=JSON.parse(data)
    let html=""
    users.results.forEach(user=>{
        html+=`
        <div>
            <img src="${user.picture.medium}">
            <div>
                ${user.name.title}
                ${user.name.first}
                ${user.name.last}
            </div>
        </div>`
        console.log(user)
    })
   document.querySelector('#users').innerHTML=html

   return Promise.resolve("Html is loaded")
}

request(myObj)
.then(buildHtml)
.then(msg=>{
    console.log(msg)
})
.catch(error=>{
    console.log(error)
})