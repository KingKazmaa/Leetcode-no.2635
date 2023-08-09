const map = (arr, fn) => {
    for (let i=0;i<arr.length;i++) {
        arr[i] = fn(arr[i], i)
    }
    return arr
}
// OR JUST USE MAP METHOD BUT THIS TEACHES YOU HOW TO ITERATE OVER EACH ELEMENT IN AN ARRAY AND ALTER EACH ONE

const map = (arr, fn) => arr.map((n) => fn(arr[i], i))