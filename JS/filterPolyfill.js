Array.prototype.myFilter = function(thisFn){
    const result = [];

    for(let i=0;i<this.length;i++)
    {
        if( thisFn(this[i]) ){
            result.push(this[i]);
        }
    }
    return result;
}

const arr = [1,2,3,4,5,6];

const n2 = arr.myFilter((e)=> e %2==0);
console.log(n2);
