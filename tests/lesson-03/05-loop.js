// bai1
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i
}
console.log(sum);
// bai 2
for (let i = 2; i<= 9; i++) {
    for (let j = 1; j<= 9; j++) {
        console.log(i+"x"+j + "="+i*j);
        console.log(`${i}x${j}=${i*j}`);

    }
};
// bai 3
let mang = [];
for (let i =1; i <=99; i+=2){
    mang.push(i);
}
console.log(mang);
// bai 4 
for(let i=1; i<=10; i++){
    console.log(`user${i}@gmail.com`);
}
// bai 5
let tong = 0;
const doanhThu=[{"month":1,"total":123},
                {"month":2,"total":13},
                {"month":3,"total":133},
                {"month":4,"total":423},]
for(let i = 0; i< doanhThu.length;i++){
    // console.log(doanhThu[i].total);
    tong += doanhThu[i].total
}
  console.log(tong)