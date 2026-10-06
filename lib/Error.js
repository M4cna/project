class CustomError extends Error{
    constructor(code,message,description){
        super(`{"code": "${code}","message":"${message},"description":"${description}"`)
    }
}