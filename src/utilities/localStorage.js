const saveToLocalStorage = cart =>{
    const convertToString = JSON.stringify(cart)
    localStorage.setItem("item", convertToString)
}

const addToLocalStorage = id =>{
    const item = getItem()
    item.push(id)

    saveToLocalStorage(item)
}

const getItem = () =>{
    const getData = localStorage.getItem("item")
    if(getData){
        return JSON.parse(getData)

    }
    return[]
}

export {addToLocalStorage, getItem}
