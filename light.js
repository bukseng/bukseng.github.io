const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
	draw();
});

function load_background(){
	ctx.fillStyle = 'rgb(0,0,0)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw_lines(){	
	for(let i = 0; i < 1000; i++){
		let x = Math.random() * canvas.width;
		let y = Math.random() * canvas.height;	
		for(let j = 0; j < 1000; j++){
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(x,y);
			ctx.lineWidth = 1;
			ctx.strokeStyle = 'rgba(255,255,255,.017)';
			ctx.stroke();
			x += 3;
			y += 3;
		}		
	}
}

function draw(){
	load_background();
	draw_lines();
}

draw();