const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const max_size = 17;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
	draw();
});

function load_background(){
	ctx.fillStyle = 'rgb(0,0,0)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function generate_random_color(){
	let color = []
	for(let i = 0; i < 3; i++){
		color.push(Math.floor(Math.random() * 254) + 1);
	}
	return color;
}


function draw_star(ax, ay, radius){
	let color = generate_random_color();
	let alpha = Math.floor(Math.random() * 11) / 1000;
	let line_width = radius / 17;


	for(let i = 0; i <= 360; i++){
		let bx = radius * Math.cos(i) + ax;
		let by = radius * Math.sin(i) + ay;
		ctx.beginPath();
		ctx.moveTo(ax,ay);
		ctx.lineTo(bx, by);
		ctx.lineWidth = line_width;
		ctx.strokeStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + alpha + ')';
		ctx.stroke();		
	}
}

function draw(){
	load_background();
	
	for(let i = 0; i < 500; i++){
		let ax = Math.random() * canvas.width;
		let ay = Math.random() * canvas.height;
		let radius = Math.random() * 50;
		draw_star(ax, ay, radius);
	}
}

draw();