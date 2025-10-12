Array.prototype.myMap = function(thisFn) {
   
    const result = [];

    for (let i = 0; i < this.length; i++) {
        const value = thisFn(this[i], i);
        result.push(value);
    }

    return result;
}

const arr = [1, 2, 3, 4, 5];

const newArr = arr.myMap((item, index) => {
    return item * 2;
});

console.log(newArr); 