var arr1 = [[2, 1], [4, 3]];
var arr2 = [[3, 2, 1], [5, 4], [6]];
var arr3 = [[3], [4, 5], [6], [7], [8, 9, 10]];

function restoreArray(arr) {
    var returnArr = [];
    // 코드를 작성해주세요.
    var temp;

    for (var i = 0; i < arr.length; i++){
    	for (var j = 0; j < arr[i].length; j++){
    		returnArr.push(arr[i][arr[i].length-j-1]);
    	}
    }

    return returnArr;
}

console.log(restoreArray(arr1));
console.log(restoreArray(arr2));
console.log(restoreArray(arr3));
