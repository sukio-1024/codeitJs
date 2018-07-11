var arr1 = [[2, 1], [4, 3]];
var arr2 = [[3, 2, 1], [5, 4], [6]];
var arr3 = [[3], [4, 5], [6], [7], [8, 9, 10]];

function restoreArray(arr) {
    var returnArr = [];

    // 코드를 작성해주세요.
    for (var i = 0; i < arr.length; i++){
    	for (var j = 0; j < arr[i].length; j++){
    		returnArr.push(arr[i][j]);
    	}
    }
    var max = returnArr.length;
    var number;

    for(var k = 0; k < max; k++){
    	for(var a = k; a > 0; a--){
    		if (returnArr[a] < returnArr[a-1]){
    			number = returnArr[a-1];
    			returnArr[a-1] = returnArr[a];
    			returnArr[a] = number;
    		}
    	}
    }
  
    return returnArr;
}

console.log(restoreArray(arr1));
console.log(restoreArray(arr2));
console.log(restoreArray(arr3));
