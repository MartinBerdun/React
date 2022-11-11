let ok = true

export const customFetch = (time, task) =>{
    return new Promise ((resolve, reject) =>{
        setTimeout (()=>{
            if (ok){
                resolve(task)
            } else {
                reject (task)
            }
        }, time)
    })
}

