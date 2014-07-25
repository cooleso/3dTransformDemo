	// ждем, пока весь контент DOM загрузится
	document.addEventListener('DOMContentLoaded', run, false);

	function run(){
		var cnt = document.querySelector('#container');
		var trans = document.querySelector('#trans');
		var trans1 = document.querySelector('#trans1');
		var trans2 = document.querySelector('#trans2');
		
		var cntHeight = cnt.clientHeight,// высота и ширина DIV, по которому отслеживаем движение мыши
			cntWidth = cnt.clientWidth,
			// отступ над элементом
			dy = cnt.clientTop + cnt.offsetTop + cnt.style.getPropertyValue('margin-top');
			;
		
		var transform = {x:0, y:0, yMax: 40, xMax:60};
		// обработчик событий перемещения мыши по #container
		cnt.addEventListener('mousemove', setTransform);
		//для Chrome нужно добавить еще одно событие для #trans (он перекрывает #container и событие не срабатывает)
		trans.addEventListener('mousemove', setTransform);
		// обработчик события mousemove
		function setTransform(e){
			// позиция мыши относительно #container
			var x = e.clientX,
				y = e.clientY - dy;		
			// считаем значения для css 
			// для #trans1 и #trans2
			transform.x = -e.x/cntWidth*transform.xMax + transform.xMax/2;// -30 - 30, 0 в центре
			transform.y = (cntHeight-e.y)/cntHeight*transform.yMax;	
			transform2 = {x: (transform.x-5), y: transform.y/1.4};
			// устанавливаем значения css
			trans1.style.setProperty('transform', 'perspective(0px) rotateY('+ transform.x +'deg) rotateX('+transform.y+'deg)');
			trans2.style.setProperty('transform', 'perspective(0px) rotateY('+ transform2.x +'deg) rotateX('+transform2.y+'deg)');
		}

	}
