const generateMessage = (username,text) =>{
    return {
        username,
        text,
        createdAt : new Date().getTime()
    }
}

const generatelocationMessage = (username,location) =>{
    return{
        username,
        location,
        createdAt:new Date().getTime()
    }
}

module.exports =  {
    generateMessage,
    generatelocationMessage
}