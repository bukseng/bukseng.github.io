const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const vacants = new Set();
const all_particles = [];

canvas.addEventListener('click', function(event){
	fire(event.x, event.y);
});

function load_background(){
	ctx.fillStyle = 'rgb(0,0,0)';
	ctx.fillRect(0, 0, canvas.width, canvas.height); 
}

function generate_random_color(){
	const color = [];
	for (let i = 0; i < 3; i++){
		color.push(Math.floor(Math.random() * 254) + 1);
	}
	color.push(.7);
	return color;
}

class Particle{
	constructor(x, y, radius, color, angle){
		this.radius = radius;
		this.x = x;
		this.y = y;
		this.color = color;
		this.angle = angle;
		this.limit = 0;
	}
	
	update(){
		this.x = this.radius * Math.cos(this.angle) + this.x;
		this.y = this.radius * Math.sin(this.angle) + this.y;
		this.limit += 1;
		return this.limit < 150;
	}
	
	draw(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		ctx.fillStyle = 'rgba(' + this.color.join(',') + ')';
		ctx.fill();
	}
}

function animate_particles(){
	for(let i = 0; i < all_particles.length; i++){
		for(let j = 0; j < all_particles[i].length; j++){
			if(all_particles[i][j].update()){
				all_particles[i][j].draw();
			}else{
				all_particles[i] = [];
				vacants.add(i);
				break;
			}
		}
	}
}

function init_particles(ax, ay){
	let color = generate_random_color();
	const particles = [];
	
	for (let angle = 0; angle < 360; angle++){
		let radius = Math.random() * 3;
		let bx = radius * Math.cos(angle) + ax;
		let by = radius * Math.sin(angle) + ay;
		particles.push(new Particle(bx, by, radius, color, angle));
	}
	
	let idx = -1;
	
	if (vacants.size > 0){
		const [first] = vacants;
		all_particles[first] = particles;
		vacants.delete(first);
		idx = first;
	}else{
		all_particles.push(particles);
		idx = all_particles.length - 1;
	}
	
	for(let i = 0; i < all_particles[idx].length; i++){
		all_particles[idx][i].draw();
	}
	
	play_sound();
}

function play_sound(){
	new Audio('fireworks.mp3').play();
}

load_background();

function fire(x, y){
	init_particles(x,y);
}

function animate(){
	load_background();
	animate_particles();
	requestAnimationFrame(animate);
}
animate();

