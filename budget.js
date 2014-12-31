(function(){
	var a = 'just for fun';

	//左侧真值则停止右边运算
	!a || (
		console.log(a)
	);

	//左侧真值则继续右边运算
	a && (
		console.log(a)
	);

	//update版本
	var a = 'just for fun';
	a && (
		(function(){
			console.log(2);
			return true
		})()
	)  && (
		console.info(3)
		)	
})()
