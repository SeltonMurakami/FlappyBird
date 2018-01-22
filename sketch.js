var bird;
var pipes = [];
var t = false;
function setup(){
	createCanvas(400,600);
	bird = new Bird();
}
function draw(){
	background(0);
	bird.show();
	if(frameCount % 100 == 0){
		pipes.push(new Pipe());	
	}
	if(t){
		bird.update();
		for(var i = pipes.length-1;i>=0;i--){
			pipes[i].show();
			pipes[i].update();
			if(pipes[i].x < 0){
				pipes.splice(i,1)	
			}
			if(pipes[i].hits(bird)){
				pipes[i].highlight = true
			}
		}
	}
}
function keyPressed(){
	if(key == ' ' ){
		bird.flap();
		t = true;
	}
}