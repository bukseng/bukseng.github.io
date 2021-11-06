const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const main_color = generate_random_color();

function generate_random_color(){
	let color = []
	for(let i = 0; i < 3; i++){
		color.push(Math.floor(Math.random() * 254) + 1);
	}
	return color;
}


function load_background(){
	ctx.fillStyle = 'rgb(0,0,0)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
	draw_dots();
});


function draw_dots(){
	load_background()

	for(let i = 0; i < 50000; i++){
		let is_main = Math.floor(Math.random() * 2);
		let x = Math.random() * canvas.width;
		let y = Math.random() * canvas.height;
		let radius = Math.random() * 5
		let alpha = Math.random()
		
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI);
		if (is_main){
			ctx.fillStyle = 'rgba(' + main_color[0] + ',' + main_color[1] + ',' + main_color[2] + ',' + alpha + ')';
		}else{
			ctx.fillStyle = 'rgba(255, 255, 255,' + alpha + ')';
		}
		ctx.fill();		
	}
}

draw_dots();