function* flat(arr) {
    for (let item of arr) {
        if (item.length > 0){
            yield *flat(item);
        }else{
            yield item;
        }
    }
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
    console.log(f);
}
// 1 2 3 4 5 6
