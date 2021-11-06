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

function draw_star(size){	
	let ax = Math.random() * canvas.width;
	let ay = Math.random() * canvas.height;	
	let star_color = generate_random_color();
		
	for(let i = 0; i < 45; i++){	
		for(let j = 0; j < 4; j++){
			let bx = Math.random() * size;
			let by = Math.random() * size;
			if (j % 2 == 0){
				if(j < 2){
					bx = ax + bx * -1;
					by = ay + by * 1;				
				}else{
					bx = ax + bx * 1;
					by = ay + by * 1;				
				}
			}else{
				if(j < 2){
					bx = ax + bx * -1;
					by = ay + by * -1;
				}else{
					bx = ax + bx * 1;
					by = ay + by * -1;				
				}
			}
			ctx.beginPath();
			ctx.moveTo(ax,ay);
			ctx.lineTo(bx,by);
			ctx.lineWidth = .017;
			ctx.strokeStyle = 'rgba(255,255,255,0.24)';
			ctx.stroke();
			if(size > max_size){
				ctx.beginPath();
				ctx.moveTo(ax,ay);
				ctx.lineTo(bx,by);
				ctx.lineWidth = .017;
				ctx.strokeStyle = 'rgba(' + star_color[0] + ',' + star_color[1] + ',' + star_color[2] + '.24)';
				ctx.stroke();				
			}
		}
	}		
}

function draw(){
	load_background();
	for(let i = 0; i < 500; i++){
		draw_star(Math.random() * max_size + 2);
	}
}

draw();