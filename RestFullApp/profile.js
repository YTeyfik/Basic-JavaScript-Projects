class Profile{
    constructor(){
        this.clientid='',
        this.clientSecret=''
    }
    async getProf(username){
        const profRes=await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)

        const profile=await profRes.json()
        
        const todoRes=await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`)

        const todo=await todoRes.json()

        return {
            profile,
            todo
        }
    }
}