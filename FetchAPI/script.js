//text 

const getText=()=>{
    fetch('text.txt')
    .then(response=>{
        return response.text()
    }).then(data=>{
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })
}

getText()


//json
const getJson=()=>{
    fetch('prod.json')
    .then(response=>{
        return response.json()
    }).then(data=>{
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })
}
getJson()

//external api

const getExternal=()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(data=>{
        return data.json()
    }).then(users=>{
        var html=""
        users.results.forEach(user => {
           html+=`<div>
                <img src="${user.picture.medium}">
                <div>
                ${user.name.title}
                ${user.name.first}
                ${user.name.last}
                </div>
                </div>`
           
            //console.log(user)
        });
        document.querySelector('#users').innerHTML=html
    }).catch(err=>{
        console.log(err)
    })
}

getExternal()

const postExternalApi=()=>{
    const urll="https://jsonplaceholder.typicode.com/todos/"

    var data={
        method:"POST",
        body:JSON.stringify({
            userId:1,
            title:"sample title",
            body:"sample body"
        }),
        headers:new Headers({
            'content-type':"application/json"
        })
    }

    fetch(urll,data)
    .then(res=>{
        console.log(res)
    })

}

postExternalApi()


//async await

const  fn=async ()=>{
    return "hello"
}

console.log(fn())

fn()
.then(res=>console.log(res))

//burası gerekirse bak tekrar


function getCate(){
    return new Promise(res=>{
        setTimeout(() => {
            res('phone')
        }, 1000);
    })
}

async function getProd(){
    try {
        let cat= await getCate()
        let result= await getProds(cat)
        console.log(result)
    }
    catch(error){
        console.error()
    }
   
}

getProd()