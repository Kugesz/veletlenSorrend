function legyenVeletlenSorrend(tomb){
    ujTomb = []
    hosz = tomb.length - 1
    for(let i = hosz; i >= 0; i--){
        let r = veletlenSzam(0, i)
        ujTomb.push(tomb[r])
        tomb.splice(r,1)
    }

    return ujTomb
}

function veletlenSzam(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(legyenVeletlenSorrend(["h", "k", "sze", "cs", "p", "szo", "v"]))
console.log(legyenVeletlenSorrend([1, 2, 3, 4, 5, 6, 7, 8, 9]))