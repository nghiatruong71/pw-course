// bai 1
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log(car.year);
// bai 2
const person = {
    name: "nghia",
    address: {
        street: "huy can",
        city: "Da Nang",
        country: "Viet Nam",
    }
};
console.log(person.address.street);
// bai 3
const student = {
    name: "nghia",
    grades: {
        Math: 6,
        english: 4
    },
}
console.log(student["grades"]["Math"]);
// bai 4
const setting = {
    volume: 12,
    brightness: 41,
}
setting.volume = 53;
console.log(setting.volume);
// bai 5
const bike = {

}
bike.color = 8;
console.log(bike);
// bai 6
const employee = {
    name: "nghia",
    age: 31,
}
delete employee.age;
console.log(employee);
// bai 7
const school = {classA:["An","Binh","Chau"], classB:["Dao", "Huong", "Giang"]};
console.log(school);





