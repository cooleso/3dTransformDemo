
document.addEventListener('DOMContentLoaded', run, false);

function run(){
	var cnt = document.querySelector('#container');
	var trans = document.querySelector('#trans');
	var cntHeight = cnt.clientHeight,
		cntWidth = cnt.clientWidth,
		dy = cnt.clientTop + cnt.offsetTop + cnt.style.getPropertyValue('margin-top');
		;

	console.warn(cntHeight, cntWidth, dy);

	// значение для css
	// все совпадает с координтами, только в css подставляем наоборот
	var transform = {x:0, y:0, yMax: 30, xMax:60};
//
	trans.style.setProperty('transform', 'perspective(0px) rotateY(24.960629921259844deg) rotateX(10.414480587618048deg)');

	cnt.addEventListener('mousemove', function(e){
		
		var x = e.x,
			y = e.y - dy;
		console.warn(x, y);	
		transform.x = e.x/cntWidth*transform.xMax - transform.xMax/2;// -30 - 30, 0 в центре
		transform.y = (cntHeight-e.y)/cntHeight*transform.yMax;	
		trans.style.setProperty('transform', 'perspective(0px) rotateY('+ transform.x +'deg) rotateX('+transform.y+'deg)');
			// x,y
	})

}