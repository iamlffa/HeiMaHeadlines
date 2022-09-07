// 封装本地存储模块

// 存储数据
export const setItem = (key,value) => {
    // 如果传入的数据是对象或者数据类型，则转成字符串
    if(typeof value === 'object'){
        value = JSON.stringify(value)
        console.log(value);
    }
    window.localStorage.setItem(key,value)
}

// 获取数据
export const getItem = (key) => {
    const data = window.localStorage.getItem(key)
    // 如果传入的是字符串则转化为对象
    try {
        return JSON.parse(data)
    } catch (error) {
        return data
    }
}

// 移除数据
export const removeItem = (key) => {
    window.localStorage.removeItem(key)
}