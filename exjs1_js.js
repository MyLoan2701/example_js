let a, b, c;
a = 5;
b = 6;
c = a + b;
document.getElementById("demo2").innerHTML = "John" + " Doe";

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];
let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;
document.getElementById("demo3").innerHTML = html;

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let flen = fruits.length;
//Cach1
let text = "<ul>";
for (let i = 0; i < flen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
//document.getElementById("demo4").innerHTML = text;

fruits.push("Lemon"); // Adds a new element (Lemon) to fruits
//Cach2
let text2 = "<ul>";
fruits.forEach(myFunction4);
text2 += "</ul>";
document.getElementById("demo4").innerHTML = text2;
function myFunction4(value) {
  text2 += "<li>" + value + "</li>";
}

document.getElementById("demo5").innerHTML = "Mảng ban đầu: " + fruits;
document.getElementById("demo6").innerHTML =
  "Mảng sắp xếp theo alpha: " + fruits.sort(); //sort the array
document.getElementById("demo7").innerHTML =
  "Mảng đảo ngược: " + fruits.reverse();

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo8").innerHTML = "Mảng số ban đầu: " + points;
document.getElementById("demo9").innerHTML =
  "Mảng số được sắp xếp tăng dần: " +
  points.sort(function (a, b) {
    return a - b;
  });
document.getElementById("demo10").innerHTML =
  "Mảng số dc sắp xếp giảm dần: " +
  points.sort(function (a, b) {
    return b - a;
  });

document.getElementById("demo11").innerHTML = points;

function myFunction11() {
  points.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  document.getElementById("demo11").innerHTML = points;
}

document.getElementById("demo12").innerHTML = points;
function myFunction12() {
  for (let i = points.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }
  document.getElementById("demo12").innerHTML = points;
}

document.getElementById("demo13").innerHTML = myArrMax(points);
function myArrMax(arr) {
  return Math.max.apply(null, arr);
}

document.getElementById("demo14").innerHTML = myArrMin(points);
function myArrMin(arr) {
  return Math.min.apply(null, arr);
}

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
displayCars();
//cars.sort(function(a, b){return a.year - b.year});
function myFunction15() {
  cars.sort(function (a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  displayCars();
}
//displayCars();
function displayCars() {
  document.getElementById("demo15").innerHTML =
    cars[0].type +
    " " +
    cars[0].year +
    "<br>" +
    cars[1].type +
    " " +
    cars[1].year +
    "<br>" +
    cars[2].type +
    " " +
    cars[2].year;
}

const numbers = [45, 4, 9, 16, 25];
// const : Nó KHÔNG xác định một mảng hằng số. Nó định nghĩa một tham chiếu không đổi đến một mảng.
//Do đó, chúng ta vẫn có thể thay đổi các phần tử của một mảng không đổi.
let txt = "";
numbers.forEach(myFunction16);
document.getElementById("demo16").innerHTML = txt;
function myFunction16(value) {
  txt += value + "<br>";
}

const numbers2 = numbers.map(myFunction17);
document.getElementById("demo17").innerHTML = numbers2;
function myFunction17(value) {
  return value * 2;
}

const over18 = numbers.filter(myFunction18);
document.getElementById("demo18").innerHTML = over18;
function myFunction18(value) {
  return value > 18;
}

let sum = numbers.reduce(myFunction19);
// chạy một hàm trên mỗi phần tử mảng để tạo (giảm nó thành) một giá trị duy nhất..
// hoạt động từ trái sang phải trong mảng.

//Phương thức reduce() có thể nhập mt giá trị ban đầu:
//let sum = numbers.reduce(myFunction19, 100);
document.getElementById("demo19").innerHTML = "the sum is " + sum;

let sum2 = numbers.reduceRight(myFunction19);
//reduceRight() tương tự reduce() nhưng chạy từ phải sang trái
document.getElementById("demo20").innerHTML = "The sum is " + sum2;

function myFunction19(total, value) {
  return total + value;
}

//kiểm tra xem tất cả các giá trị mảng có vượt qua kiểm tra hay không.
let allOver18 = numbers.every(myFunction21);
document.getElementById("demo21").innerHTML = "All over 18 is " + allOver18;
function myFunction21(value) {
  return value > 18;
}

//Kiểm tra xem một số giá trị mảng có vượt qua kiểm tra hay không.
let someOver18 = numbers.some(myFunction22);
document.getElementById("demo22").innerHTML = "Some over 18 is " + someOver18;
function myFunction22(value, index, array) {
  return value > 18;
}

//tìm kiếm một giá trị phần tử trong một mảng và trả về vị trí của nó.
let position = fruits.indexOf("Apple") + 1;
document.getElementById("demo23").innerHTML =
  "Apple is found in position " + position;

//Array.lastIndexOf()giống như Array.indexOf(), nhưng trả về vị trí của lần xuất hiện cuối cùng của phần tử được chỉ định.
let position2 = fruits.lastIndexOf("Apple") + 1;
document.getElementById("demo24").innerHTML =
  "Apple is found in position " + position;

//trả về giá trị của phần tử mảng đầu tiên vượt qua một hàm kiểm tra.
let first = numbers.find(myFunction25);
document.getElementById("demo25").innerHTML =
  "First number over 18 is " + first;
function myFunction25(value, index, array) {
  return value > 18;
}

//trả về chỉ số của phần tử mảng đầu tiên vượt qua một hàm kiểm tra.
document.getElementById("demo26").innerHTML =
  "First number over 18 has index " + numbers.findIndex(myFunction26);
function myFunction26(value, index, array) {
  return value > 18;
}

//trả về một đối tượng Array từ bất kỳ đối tượng nào có thuộc tính length hoặc bất kỳ đối tượng nào có thể lặp lại.
document.getElementById("demo27").innerHTML = Array.from("ABCDEF");

//trả về một đối tượng Array Iterator với các khóa của một mảng.
const keys = fruits.keys();
let text3 = "";
for (let x of keys) {
  text3 += x + "<br>";
}
document.getElementById("demo28").innerHTML = text3;

//trả về một đối tượng Array Iterator với các cặp khóa / giá trị:
let f = fruits.entries();
for (let x of f) {
  document.getElementById("demo29").innerHTML += x + "<br>";
}

//kiểm tra xem một phần tử có trong một mảng hay không (bao gồm cả NaN, không giống như indexOf).
document.getElementById("demo30").innerHTML = fruits.includes("Mango");

//Trả về x được làm tròn thành số nguyên gần nhất của nó
document.getElementById("demo47").innerHTML = Math.round(4.6);

//Math.ceil(x)trả về giá trị của x được làm tròn LÊN số nguyên gần nhất của nó:
document.getElementById("demo48").innerHTML = Math.ceil(4.2);

//Math.floor(x)trả về giá trị của x được làm tròn XUỐNG số nguyên gần nhất của nó:
document.getElementById("demo49").innerHTML = Math.floor(4.2);

//Math.trunc(x)trả về phần nguyên của x:
document.getElementById("demo50").innerHTML = Math.trunc(4.2);

//Math.sign(x)trả về nếu x là âm, null hoặc dương:
document.getElementById("demo51").innerHTML = Math.sign(4);
document.getElementById("demo52").innerHTML = Math.sign(0);
document.getElementById("demo53").innerHTML = Math.sign(-4);

//Math.pow(x, y)trả về giá trị của x thành lũy thừa của y:
document.getElementById("demo54").innerHTML = Math.pow(8, 2);

//Math.sqrt(x)trả về căn bậc hai của x:
document.getElementById("demo55").innerHTML = Math.sqrt(64);

//Math.abs(x)trả về giá trị tuyệt đối (dương) của x:
document.getElementById("demo56").innerHTML = Math.abs(-4.7);

//Math.sin(x)trả về sin (giá trị từ -1 đến 1) của góc x (tính bằng radian).
//Muốn sử dụng độ thay vì radian thì phải đổi đơn vị: radian = độ * PI / 180
document.getElementById("demo57").innerHTML = Math.sin((90 * Math.PI) / 180);

//Tương tự sin
document.getElementById("demo58").innerHTML = Math.cos((0 * Math.PI) / 180);

//Math.min()và Math.max()có thể được sử dụng để tìm giá trị thấp nhất hoặc cao nhất trong danh sách các đối số:
document.getElementById("demo59").innerHTML = Math.min(
  0,
  150,
  30,
  20,
  -8,
  -200
);
document.getElementById("demo60").innerHTML = Math.max(
  0,
  150,
  30,
  20,
  -8,
  -200
);

//Math.random()trả về một số ngẫu nhiên giữa 0 (bao gồm) và 1 (không bao gồm):
document.getElementById("demo61").innerHTML = Math.random();

//Math.log(x)trả về lôgarit tự nhiên của x.
document.getElementById("demo62").innerHTML = Math.log(1);

//Math.log2(x)trả về logarit cơ số 2 của x.
document.getElementById("demo63").innerHTML = Math.log2(1);

//Math.log10(x)trả về logarit cơ số 10 của x.
document.getElementById("demo64").innerHTML = Math.log10(1000);

// Returns a random integer from 0 to 9:
document.getElementById("demo65").innerHTML = Math.floor(Math.random() * 10);

// Returns a random integer from 0 to 10:
document.getElementById("demo66").innerHTML = Math.floor(Math.random() * 11);

// Returns a random integer from 0 to 99:
document.getElementById("demo67").innerHTML = Math.floor(Math.random() * 100);

// Returns a random integer from 0 to 100:
document.getElementById("demo68").innerHTML = Math.floor(Math.random() * 101);

// Returns a random integer from 1 to 10:
document.getElementById("demo69").innerHTML =
  Math.floor(Math.random() * 10) + 1;

// Returns a random integer from 1 to 100:
document.getElementById("demo70").innerHTML =
  Math.floor(Math.random() * 100) + 1;

//Hàm JavaScript này luôn trả về một số ngẫu nhiên giữa tối thiểu (bao gồm) và tối đa (loại trừ):
function getRndInteger1(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//Hàm JavaScript này luôn trả về một số ngẫu nhiên giữa tối thiểu và tối đa (bao gồm cả hai):
function getRndInteger2(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//== equal to
let x = 5;
document.getElementById("demo73").innerHTML = x == 8;
document.getElementById("demo74").innerHTML = x == 5;
document.getElementById("demo75").innerHTML = x == "5";

//=== equal value and equal type
document.getElementById("demo76").innerHTML = x === 8;
document.getElementById("demo77").innerHTML = x === 5;
document.getElementById("demo78").innerHTML = x === "5";

//!= not equal
document.getElementById("demo79").innerHTML = x != 8;

//!== not equal value or not equal type
document.getElementById("demo80").innerHTML = x !== 8;
document.getElementById("demo81").innerHTML = x !== 5;
document.getElementById("demo82").innerHTML = x !== "5";

function conditional() {
  let age = document.getElementById("age").value;
  let voteable = age < 18 ? "Too Young" : "Old enough";
  document.getElementById("demo83").innerHTML = voteable + " to vote!";
}

const hour = new Date().getHours();
let lc;
if (hour == 0) lc = "Greeting the new day!";
else if (hour >= 1 && hour < 11) lc = "Good morning!";
else if (hour >= 11 && hour < 18) lc = "Good afternoon!";
else if (hour >= 18 && hour < 22) lc = "Good evening!";
else lc = "Good night!";
document.getElementById("demo84").innerHTML = lc;

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thurday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
document.getElementById("demo85").innerHTML = "Today is: " + day;

let text4;
switch (new Date().getDay()) {
  case 6:
    text4 = "Today is Saturday";
    break;
  case 0:
    text4 = "Today is Sunday";
    break;
  default:
    text4 = "Looking forward to the Weekend";
}
document.getElementById("demo86").innerHTML = text4;

const name = ["Anh", "Loan", "Duyen", "Thuan", "Minh", "Hien", "Quynh"];
let text5 = "";
//lặp lại một khối mã nhiều lần
for (let i = 0; i < name.length; i++) {
  text5 += name[i] + "<br>";
}
document.getElementById("demo87").innerHTML = text5;

//lặp qua các thuộc tính của một Đối tượng
const person = { fname: "Dao", lname: "Duyen", age: 22 };
let t6 = "";
for (let x in person) {
  t6 += person[x] + " ";
}
document.getElementById("demo88").innerHTML = t6;

//lặp qua các giá trị của một đối tượng có thể lặp lại.
let t7 = "";
for (let x of name) {
  t7 += x + " ";
}
document.getElementById("demo89").innerHTML = t7;

let t8 = "Loan";
let t9 = "";
for (let x of t8) {
  t9 += x + " ";
}
document.getElementById("demo90").innerHTML = t9;

//lặp đi qua một khối mã miễn là một điều kiện được chỉ định là đúng.
let i = 0,
  j = 0,
  t10 = "",
  t11 = "";
while (i < 6) {
  t10 += "The number is " + i + "<br>";
  i++;
}
document.getElementById("demo91").innerHTML = t10;

//là một biến thể của vòng lặp while.
//Vòng lặp này sẽ thực thi khối mã một lần,
//trước khi kiểm tra xem điều kiện có đúng không,
//sau đó nó sẽ lặp lại vòng lặp miễn là điều kiện là đúng.
do {
  t11 += "The number is " + i + " ";
  i++;
} while (i < 10);
document.getElementById("demo92").innerHTML = t11;

// Create a Set
const letters = new Set(["a", "b", "c"]);
document.getElementById("demo93").innerHTML = letters.size;
// Add Values to the Set
letters.add("d");
document.getElementById("demo94").innerHTML = letters.size;
// List all Elements
let t12 = "";
letters.forEach(function (value) {
  t12 += value;
});
document.getElementById("demo95").innerHTML = t12;

letters.add("e");
//trả về một đối tượng trình vòng lặp mới chứa tất cả các giá trị trong một Tập hợp:
let t13 = "";
for (const x of letters.values()) {
  t13 += x;
}
document.getElementById("demo96").innerHTML = t13;

// Create a Map
const fruits2 = new Map([
  ["apple", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
document.getElementById("demo97").innerHTML = fruits2.size;
// Set Map Values
fruits2.set("melon", 100);
fruits2.set("strawberry", 50);
document.getElementById("demo98").innerHTML = fruits2.get("apple"); // Returns 500
//loại bỏ một phần tử Bản đồ:
fruits2.delete("apple");
document.getElementById("demo99").innerHTML = fruits2.has("apples");
// List all entries
let t14 = "";
fruits2.forEach(function (value, key) {
  t14 += key + " = " + value + "<br>";
});
//Hoặc dùng for/of
document.getElementById("demo100").innerHTML = t14;

/*
                *Trong JavaScript, có 5 kiểu dữ liệu khác nhau có thể chứa các giá trị:
                string, number, boolean, object, function

                *Có 6 loại đối tượng:
                Object, Date, Array, String, Number, boolean

                *Và 2 kiểu dữ liệu không thể chứa giá trị:
                null, undefined
                */
document.getElementById("demo101").innerHTML =
  "'John': " +
  typeof "john" +
  "<br>" +
  "3.14 : " +
  typeof 3.14 +
  "<br>" +
  "NaN: " +
  typeof NaN +
  "<br>" +
  "false: " +
  typeof false +
  "<br>" +
  "[1,2,3,4]: " +
  typeof [1, 2, 3, 4] +
  "<br>" +
  "{name:'john', age:34}: " +
  typeof { name: "john", age: 34 } +
  "<br>" +
  "new Date(): " +
  typeof new Date() +
  "<br>" +
  "function() {}: " +
  typeof function () {} +
  "<br>" +
//   "myCar (chưa được khai bao): " +
//   typeof myCar +
//   "<br>" +
  "null: " +
  typeof null;

document.getElementById("demo102").innerHTML = Number("3.14"); //return 3.14
//Number("") //return 0
//Number(" ") //return 0
//Number("99 88") //return NaN

//Method chuyển đổi thành số: Number(), parseFloat(), parseInt()

//Toán tử một ngôi + có thể được sử dụng để chuyển đổi một biến thành một số:
let y = "5"; //y is a string
let xx = +y; //xx is a number
//Nếu không thể chuyển đổi biến, nó vẫn sẽ trở thành một số, nhưng với giá trị NaN (Không phải là một Số):
let yy = "John"; //yy is a string
let x2 = +yy; //x2 is a number (NaN)
document.getElementById("demo103").innerHTML = x2;

//Method toàn cục String() có thể chuyển đổi số thành chuỗi và phương pháp số toString() cũng làm như vậy.
//Một số phương pháp khác tương tự để chuyển đổi thành chuối.
//toExponential(), toFixed(), toPrecision()

/*
                (*) & - AND - trả về 1 nếu cả hai bit đều là 1
                5 & 1 - 0101 & 0001 - 0001 - 1

                (*) | - OR - trả về 1 nếu một/hai trong hai bit là 1
                5 | 1 - 0101 | 0001 - 0101 - 5

                (*) ^ - XOR - trả về 1 nếu chỉ một trong hai bit là 1
                5 ^ 1 - 0101 ^ 0001 - 0100 - 1

                (*) ~ - NOT - phủ định bit
                ~ 5 - ~ 0101 - 1010 - 10

                (*) << - Zero fill left shift
                5 << 1 - 0101 << 1 - 1010 - 10

                (*) >> - Signed right shift
                5 >> 1 - 0101 >> 1 - 0010 - 2
                
                (*) >>> - Zero fill right shift
                5 >>> 1 - 0101 >>> 1 - 0010 - 2
                */

//JavaScript lưu trữ các số dưới dạng số dấu phẩy động 64 bit, nhưng tất cả các phép toán bit đều được thực hiện trên số nhị phân 32 bit.

//Chuyển đổi thập phân sang nhị phân
document.getElementById("demo104").innerHTML = dec2bin(-5);
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
//Chuyển đổi nhị phân sang thập phân
document.getElementById("demo105").innerHTML = bin2dec(101);
function bin2dec(bin) {
  return parseInt(bin, 2).toString(10);
}

//try() - xác định một khối mã để chạy (để thử).
//catch() - xác định một khối mã để xử lý bất kỳ lỗi nào.
//finally() - xác định một khối mã để chạy bất kể kết quả.
//throw() - xác định một lỗi tùy chỉnh.

try {
  adddlert("Welcome guest!");
} catch (err) {
  document.getElementById("demo106").innerHTML = err.message;
}

function myFunction107() {
  const mess = document.getElementById("p01");
  mess.innerHTML = "";
  let x = document.getElementById("demo107").value;
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too hight";
  } catch (err) {
    mess.innerHTML = "Error is " + err + ".";
  } finally {
    document.getElementById("demo107").value = "";
  }
}

/*
                thay vì:
                hello = function() { return "Hello World!";}
                thì dùng:
                hello = () => { return "Hello World!";}
                hoặc:
                hello = () => "Hello World!";
                Lưu ý: Điều này chỉ hoạt động nếu hàm chỉ có một câu lệnh.
                */

hello = (val) => "Hello " + val;
document.getElementById("demo108").innerHTML = hello("Universe!");

//Sử dụng từ khóa class để tạo một lớp học.
class Car {
  //Luôn thêm một constructor() phương thức.
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}
let myCar = new Car("Ford", 2014);
document.getElementById("demo109").innerHTML =
  "My car is " + myCar.age() + " year old.";

let t15 =
  '{"employees":[' +
  '{"firstName":"John","lastName":"Doe" },' +
  '{"firstName":"Anna","lastName":"Smith" },' +
  '{"firstName":"Peter","lastName":"Jones" }]}';
const obj = JSON.parse(t15);
document.getElementById("demo111").innerHTML =
  obj.employees[1].firstName + " " + obj.employees[1].lastName;

/*
                Trong JavaScript, hầu hết "mọi thứ" đều là một đối tượng:
                - Booleans, Numbers, Strings có thể là các đối tượng nếu được định nghĩa bằng từ khóa new.
                - Dates, Maths, Regular expressions (Biểu thức chính quy), Arrays, Functions, Objects luôn là các đối tượng.
                Tất cả các giá trị JS, ngoại trừ các giá trị nguyên thủy, đều là các đối tượng.
                */
//Tao mot doi tuong
const person2 = {
  firstName: "Vo",
  lastName: "Que Duyen",
  age: 27,
  eyeColor: "blue",
};

const person3 = {};
person3.firstName = "Dao";
person3.lastName = "My Loan";
person3.age = 23;
person3.eyeColor = "Yellow";
person3.gender = "Women";

const x3 = person2;
x.age = 24; // Will change both x.age and person.age
/*
               Thuộc tính là các giá trị được liên kết với một đối tượng JavaScript.
               Đối tượng JavaScript là một tập hợp các thuộc tính không có thứ tự.
               Các thuộc tính thường có thể được thay đổi, thêm và xóa, nhưng một số thuộc tính chỉ được đọc.
               Cú pháp để truy cập thuộc tính của một đối tượng là:
                objectName.property      // person.age
                objectName["property"]   // person["age"]
                objectName[expression]   // x = "age"; person[x]
                
                Dùng từ khóa delete để xóa thuộc tính.
               */

person2.cars = {
  car1: "Ford",
  car2: "BMW",
  car3: "Fiat",
};
/*
               Câu lệnh JS for/in lặp qua các thuộc tính của một đối tượng
               */
let t16 = "";
for (let x in person3) {
  t16 += person3[x] + " ";
}
document.getElementById("demo112").innerHTML = t16;
document.getElementById("demo113").innerHTML = person2.cars.car3;

person3.cars = [
  { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
  { name: "BMW", models: ["320", "X3", "X5"] },
  { name: "Fiat", models: ["500", "Panda"] },
];
for (let i in person3.cars) {
  x += "<h3>" + person3.cars[i].name + "</h3>";
  for (let j in person3.cars[i].models) {
    x += person3.cars[i].models[j] + "<br>";
  }
}
document.getElementById("demo114").innerHTML = x;

//Truy cập đối tượng
/*
              Hiển thị obj theo thuộc tính
              Hiển thị obj theo for/in
              Hiển thị obj bằng cách dùng Object.values()
              Hiển thị bằng cách dùng JSON.stringify()
              */
const display = Object.values(person);
document.getElementById("demo115").innerHTML = display;
const display2 = JSON.stringify(person);
document.getElementById("demo116").innerHTML = display2;

const person4 = {
  firstName: "Dao",
  lastName: "Anh",
  language: "en",
  sex: "",
  get lang() {
    return this.language.toUpperCase();
  },
  set gender(gd) {
    this.sex = gd;
  },
};
person4.gender = "Woman";
//Sự khác nhau giữa việc sử dung hàm JS và Getter là cách truy cập. Getter truy cập dưới
document.getElementById("demo117").innerHTML = person4.lang;
document.getElementById("demo118").innerHTML = person4.sex;



// const name1 = "Anh";
// const age1 = 2000;
// export { name1, age1 };

// //OR
// export const name2 = "Duyen";
// export const age2 = 1 + 10000;

// const mess1 = () => {
//   const name3 = "Hien";
//   const age3 = 2006;
//   return name3 + " is " + age3 + "year old.";
// };
// export default mess1;
