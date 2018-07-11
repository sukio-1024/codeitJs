function range(start, end, step) {
    var arr = [];

    // 코드를 작성해주세요.
    while (true){
    	arr.push(start);
    	start += step;
    	if (step >= 0 && start >= end)
    		break;
    	if (step < 0 && start <= end)
    		break;
    }

    return arr;
}

// 테스트 코드
console.log(range(1, 10, 1));
console.log(range(-1, 10, 3));
console.log(range(10, -10, -4));