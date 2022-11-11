// Khai báo biến
// Khai bao co 3 cach

const sum1 = "10";
var sum2 = 13;
let sum3 = 14;

const hieu1 = 50;
const hieu2 = 30;
const hieu3 = 40;
let test = true;

const tich1 = 5.242;
const tich2 = 3.65;
const tich3 = 4;

var array1 = [["tao thao"], ["luu bi", "dong trac"], ["ton quyen"]];
var array2 = ["tao thao", "luu bi", "dong trac", "ton quyen"];
var object = {
  user1: {
    name: "Nguyễn Văn B",
    class: "1B",
    birthday: "11/11/2000",
    address: "Hà Nội",
  },
  user2: {
    name: "Nguyễn Văn A",
    class: "1A",
    birthday: "11/11/2001",
    address: "TP HCM",
  },
  user3: {
    name: "Nguyễn Văn C",
    class: "1C",
    birthday: "11/11/2002",
    address: "Lâm Đồng",
  },
};
// function

// nornal function
// viet function khaibao im ra minh la function thuong
function khaibao() {
  alert("minh la function thuong");
}

//Arrow function
const khaibaobien = () => {
  alert("Arrow Function");
};
// tong

function sum(c, d) {
  // so sanh gia tri if
  if (test === false) {
    // so sanh a và b nếu thoả điều kiện xuất alert("a lon hon b") ngược laij xuất alert("b lon hon a");
    a > b ? alert("a lon hon b") : alert("b lon hon a");
  } else {
    //Number là 1 hàm convert phần tử to number
    // tinh tong
    const sum = Number(c) + d;
    console.log(sum);
  }
}

sum(sum1, sum2);
//hieu
function hieu(f, g) {
  if (test === false) {
    a > b ? alert("a lon hon b") : alert("b lon hon a");
  } else {
    const hieu = f - g;
    if (hieu < 0) {
      alert("gia tri phai lon hon 0");
    } else {
      console.log(hieu);
    }
    //
  }
}
hieu(hieu1, hieu2);

// tich
function tich(p, q) {
  if (test === false) {
    a > b ? alert("a lon hon b") : alert("b lon hon a");
  } else {
    const tich = p * q;
    //làm tròn đến số thập phân thứ 2
    const lamtron2so = tich.toFixed(2);
    console.log(lamtron2so);
  }
}
tich(tich1, tich2);

//
function handleArray() {
  // array 1
  console.log(array1[1][1]);
  // array 2
  console.log(array2[2]);
  //for 1 array và in ra toàn bộ giá trị trong mảng array2
  for (var i = 0; i < array2.length; i++) {
    console.log("array1 ne", array2[i]);
  }
  //for 2 array và in ra toàn bộ giá trị trong mảng array1

  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array1[i].length; j++) {
      console.log("array 2", array1[i][j]);
    }
  }

  // while 1 array và in ra toàn bộ giá trị trong mảng array2
  var i = 0;
  while (i < array2.length) {
    console.log("while ", array2[i]);
    i++;
  }
  // while 2 array và in ra toàn bộ giá trị trong mảng array1
  var i = 0;
  while (i < array1.length) {
    var j = 0;
    while (j < array1[i].length) {
      console.log("while 2 array", array1[i][j]);
      j++;
    }
    i++;
  }
  //map 1 array và in ra giá trị của mảng array2
  //x là paramiter giá trị của mảng array2
  var doubles = array2.map(function (x) {
    console.log("map 1 array", x);
    return `${x} abc`;
  });
  console.log(array2);
  // doublés là new array chứa giá trị tương đương của mảng array2
  console.log(doubles);

  //map 2 array và in ra giá trị k
  //k là phần tử mảng bên trong mảng y

  var doubles1 = array1.map(function (y) {
    y.map(function (k) {
      console.log("map 2 array", k);
    });
  });
}
handleArray();
