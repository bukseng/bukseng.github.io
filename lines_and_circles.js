const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const main_color = generate_random_color();
const sub_color = generate_random_color();


function generate_random_color(){
	let color = []
	for(let i = 0; i < 3; i++){
		color.push(Math.floor(Math.random() * 254) + 1);
	}
	return color;
}

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
	draw_circles();
	draw_lines();
});



function draw_line(){
	let is_vertical = Math.floor(Math.random() * 2);
	let is_main = Math.floor(Math.random() * 2);
	
	let alpha = Math.random();
	let color = is_main ? main_color : sub_color;

	let ax = 0;
	let ay = 0;
	let bx = 0;
	let by = 0;
	
	if(is_vertical === 1){
		ax = Math.random() * canvas.width + 1;
		bx = ax;
		by = canvas.height;
	}else{
		ay = Math.random() * canvas.height + 1;
		by = ay;
		bx = canvas.width;
	}
	
	ctx.beginPath();
	ctx.moveTo(ax, ay);
	ctx.lineTo(bx, by);
	ctx.lineWidth = Math.floor(Math.random() * 50) + 1;
	ctx.strokeStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + alpha + ')';
	ctx.stroke();
}

function draw_lines(){
	for(let i = 0; i < 10; i++){
		draw_line();
	}
}

function draw_circle(){
	let is_main = Math.floor(Math.random() * 2);
	let alpha = Math.random();
	let color = is_main ? main_color : sub_color;	
	let x = Math.random() * canvas.width;
	let y = Math.random() * canvas.height;
	let radius = Math.floor(Math.random() * 50);
	
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.fillStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + alpha + ')';
	ctx.fill();
}

function draw_circles(){
	for(let i = 0; i < 10; i++){
		draw_circle();
	}
}

draw_circles();
draw_lines();
