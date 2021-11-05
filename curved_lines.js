const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const COLOR_COUNT = 7;
const colors = generate_random_colors();
console.log(colors);

function generate_random_colors(){
	let colors = [];
	for(let i = 0; i < COLOR_COUNT; i++){
		let color = [];
		for(let j = 0; j < 3; j++){
			color.push(Math.floor(Math.random() * 254) + 1);
		}
		colors.push(color);
	}
	return colors;
}

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
	draw();
});


function load_background(){
	ctx.fillStyle = 'rgb(0,0,0)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw_curved_lines(){
	let ax = Math.random() * canvas.width;
	let ay = Math.random() * canvas.height;
	let bx = Math.random() * canvas.width;
	let by = Math.random() * canvas.height;
	let cx = Math.random() * canvas.width;
	let cy = Math.random() * canvas.height;

	
	ctx.beginPath();
	ctx.lineWidth = 7;
	for(let i = 0; i < COLOR_COUNT; i++){
		ctx.moveTo(ax, ay);
		ctx.bezierCurveTo(ax, ay, bx, by, cx, cy);
		ctx.strokeStyle = 'rgb(' + colors[i][0] + ',' + colors[i][1] + ',' + colors[i][2] + ')';
		ctx.stroke();
		ctx.lineWidth -= 1;
		ax += 3;
		ay += 3;
		bx += 3;
		by += 3;
		cx += 3;
		cy += 3;
	}	
	
}


function draw(){
	load_background();
	for(let i = 0; i < 100; i++){
		draw_curved_lines();
	}
}

draw();
