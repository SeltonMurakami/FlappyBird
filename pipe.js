function Pipe(){
	this.begin = random(height-100);
	this.end = height - this.begin - 120;
	this.x = width;
	this.highlight = false;
	
	this.show = function(){
		if(this.highlight){
			fill('red');
		}else{
			fill(255)	
		}
		rect(this.x,0,20,this.begin);
		rect(this.x,height-this.end,20,this.end);
	}
	this.update = function(){
		this.x -= 2;
	}
	this.hits = function(b){
		return (b.y<this.begin+15 ||  b.y > height - this.end - 15)&&(b.x>this.x && b.x < this.x+20) 
	}
}