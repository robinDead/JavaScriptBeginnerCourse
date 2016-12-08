// 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов, 
// а возвращать будет массив значений одного из полей (отсортированных в порядке возрастания):


var usersData = [
	{ 'user' : 'Bob', 'password' : 'MyNameIsAlex' },
	{ 'user' : 'Alex', 'password' : 'MyNAmeIsBob' }
];


function getFieldValues(array, X) {
	var a = [];
    for (var i = 0; i < array.length; i++) {a[i] = array[i][X];}
    return a.sort();
}

console.log(getFieldValues(usersData, 'user'));











// // 2) Написать функцию, фильтрующую массив с использованием предиката:

var numbers = [2, 8, 100];

function isEven(x) {
return (x % 2 == 0) ? x : false;
}
console.log(numbers.filter(isEven));








// 3) Даны 2 строки со словами (без знаков препинания), 
// вывести те слова (по одному разу), которые встречаются в обоих строках

var firstLongString = 'Load up on guns and bring your friends it\'s fun to lose and to pretend Galkin';
var secondLongString = 'She\'s over bored and self assured oh no I know a dirty word Galkin';
function findSimilarWords(str1, str2) {
    var array1 = str1.split(' ');
    var array2 = str2.split(' ');
    var b = [];
    var point = 0;
    for (var i = 0; i < array1.length; i++) {
    	for (var j = 0; j < array2.length; j++) {

            if (array1[i] == array2[j]) {
            	
            	for (var x = 0; x < b.length; x++) {

            		if (b[x] == array2[j]) {
            			point = 1;
            		}
            	}
              	
              	if (point == 0) {
            		b[i] = array1[i];
            	}
    		}
    	}
    	point = 0;
    }
    	return b;
    
}
console.log(findSimilarWords(firstLongString, secondLongString)); 








// // 4) Дан IP-адрес (строка) и маска подсети (десятичное число). Написать функцию, которая будет валидировать
// // IP-адрес (4 октета, <= 255), а затем выводить сетевой и широковещательный адреса:

// var IpAddress = '10.223.98.2';
// var subnetMask = 28;
// console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask)); // Broadcast - 10.223.98.15, Network - 10.223.98.0











// // 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
// // P. S. 1 == '1' (строковое и числовое представление number'ов считать идентичными)

var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];
function makeItClean(array) {
    var d = [];
    var id = 0;
    for (var i = 0; i < array.length; i++) {
    	for (var j = 0; j < array.length; j++) {
    	    d[id++] = totalMessArray[i][j];
    	}
    }

    var idd = 0;
    var b = [];
    point = 0;
    for (var i = 0; i < d.length; i++) {
        for (var x = 0; x < b.length; x++) {
            if (String(b[x]) == String(d[i])) {
            	point = 1;
            }
        }
              	
        if (point == 0) {
            b[idd++] = d[i];
        }
    	point = 0;
    }
    return b;
    
}
console.log(makeItClean(totalMessArray)); // --> ['a', 'aa', 1, undefined, true];