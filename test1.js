


function vect(x,y){
 this.x=x;
 this.y=y;
};



vect .prototype.taille=function(){
	var t=Math.sqrt(this.x*this.x+this.y*this.y);
	return(t);
}




vect .prototype.egale=function(v){
	
	return(this.x==v.x && this.y==v.y);
}


let   v1=new  vect(3,4);
let   v2=new  vect(3,4);
console.log(v1.taille());
console.log(v2.taille());
console.log(v1.egale(v2));


class   vect{



	constructor(x,y){


		this.x=x;
		this.y=y;
	}
	module(){


		return Math.sqrt(this.x*this.x+this.y*this.y);
	}
}