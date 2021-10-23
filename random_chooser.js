
function choose(){
	let list = document.getElementById("list").value
	list = list.split(/\r?\n/)
	shuffle_and_pick(list)
}

function shuffle_and_pick(list){
	n = list.length
	iter_cnt = Math.floor((Math.random() * n));
	
	//shuffle
	for (let i = 0; i <= iter_cnt; i++){
		rand_1 = Math.floor((Math.random() * n));
		rand_2 = Math.floor((Math.random() * n));

		tmp = list[rand_1]
		list[rand_1] = list[rand_2]
		list[rand_2] = tmp
	}
	
	//pick
	chosen = 0
	for (let i = 0; i <= iter_cnt; i++){
		chosen = Math.floor((Math.random() * n));
	}
	
	window.alert(list[chosen])
}
