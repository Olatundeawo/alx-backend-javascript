export default function getFullResponseFromAPI(success){
    return new Promise((resolve, reject)=>{
        if (success === true){
            resolve({status:200, body:"success"})
        }else {
            reject('The fake API is not working currently')
        }
    })
}
