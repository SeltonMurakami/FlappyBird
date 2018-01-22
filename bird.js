function Bird(){
	this.x = 50
	this.y = height/2
	this.v = 0
	this.g = 0.6
	this.lift = 15
	this.show = function(){
		fill(255);
		ellipse(this.x, this.y, 15, 15)
	}
	this.update = function(){
		this.y += this.v
		this.v += this.g
		if(this.y > height){
			this.y = height
			this.v = 0
		}
		if(this.y < 0){
			this.y = 0
			this.v = 0
		}
		this.v = 0.9*this.v
	}
	this.flap = function(){
		this.v -= this.lift
	}
}