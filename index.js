const standerlizeInput = function (collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection)
}

const myEach = function (collection, callback) {
    const newCollection = standerlizeInput(collection)

    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
    }

    return collection
}

const myMap = function (collection, callback) {
    const newCollection = standerlizeInput(collection)

    const newArr = []

    for (let i = 0; i < newCollection.length; i++) {
        newArr.push(callback(newCollection[i]))
    }

    return newArr
}

const myReduce = function (collection, callback, acc) {
    let newCollection = standerlizeInput(collection)
    if (!acc) {
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }

    for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection)
    }
    return acc
}

const myFind = function (collection, predicate) {
    const newCollection = standerlizeInput(collection)
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i]))
            return newCollection[i]
    }
    return undefined
}

const myFilter = function (collection, predicate) {
    const newCollection = standerlizeInput(collection)

    const newArr = []

    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i]))
            newArr.push(newCollection[i])
    }
    return newArr
}

const mySize = function (collection) {
    const newCollection = standerlizeInput(collection)
    const arrLength = newCollection.length
    return arrLength
}
const myFirst = function (array, n) {
    if (n === undefined) {
        return array[0]
    } else {
        return array.slice(0, n)
    }
}

const myFirst2 = function (array, n = false) {
    //函数的默认参数值仅在调用函数时没有提供相应的参数值时才会使用。
    return n ? array.slice(0, n) : array[0]
}

const myLast = function (array, n) {
    return n ? array.slice(-n) : array[array.length - 1]
}

const mySortBy = function (array, callback) {
    let newArr = [...array]
    newArr.sort(function (a, b) {
        let valueA = callback(a)
        let valueB = callback(b)

        if (typeof valueA === 'number' && typeof valueB === 'number') {
            return valueA - valueB
        }

        if (typeof valueA === 'string' && typeof valueB === 'string') {
            return valueA.toUpperCase() > valueB.toUpperCase() ? 1 : -1
        }
    })

    return newArr
}
const myKeys = function (object) {

    let keys = []
    for (let key in object) {
        keys.push(key)
    }
    return keys
}

const myValues = function (object) {
    let values = []
    for (let key in object) {
        values.push(object[key])
    }
    return values
}
