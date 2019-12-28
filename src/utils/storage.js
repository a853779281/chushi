export const getStorage = (name) => {
    return localStorage.getItem(name) && JSON.parse(localStorage.getItem(name)) || []
}

export const setStorage = (name,value) => {
    return localStorage.setItem(name, JSON.stringify(value))
}