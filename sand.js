const test = [1, 2, 2,null,null]

const mapped = test.map((item, i) => {
    if (!item){
        console.log(test);
        return item = 23
    }
    else{
        return item
    }
})
const filtered = test.filter(Boolean);
// console.log(mapped);
// console.log(filtered);
const sample = Array(4).fill(null)
console.log(sample.length - 2);


const values = [1, 2, 3, 4, 5, 6, 7]
const sec = [4 ,90, 32, 12, 33]

console.log(values.slice(0, 3));
console.log(values.slice(1, 4));

const empty = ''
if (empty){
    console.log('YEP');

}
