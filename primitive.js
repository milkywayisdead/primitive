function drawTable(tableName) {
	// рисуем таблицу
	height = 16;
	
	while (height != 0) {

		let row = document.createElement('tr');
		row.setAttribute('id', 'row' + height);
		width = 0;
		while (width < 16) {
			let cell = document.createElement('td');
			cell.setAttribute('id', tableName + '-x' + (width+1) + 'y' + height);
			
			if (tableName == 'field') {
				cell.classList.add('field-pixel');
				cell.classList.add('ignore');
			}

			else if (tableName == 'preview') {
				cell.classList.add('preview-pixel');
			}
			
			row.append(cell);
			width++;
		}
		get(tableName).append(row);
		height--;
	}
}

// вместо getElementByID
function get(e) {
	return document.getElementById(e);
}

drawTable('field');
drawTable('preview');

let spriteNum = 0;

let activeColor = '#c66300';

let colpicker = $("#mario-palette").spectrum({
	showPalette: true,
	color: activeColor,
	palette: ['#c66300', '#ff3118', '#ff945a'],
	change: function(color) {
		activeColor = color.toHexString();
	}
});


/*let marioStand = '[{"x":"6","y":"16","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"16","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"16","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"16","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"16","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"5","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"6","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"12","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"13","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"5","y":"14","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"14","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"14","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"14","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"9","y":"14","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"14","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"11","y":"14","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"4","y":"13","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"6","y":"13","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"8","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"9","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"13","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"11","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"12","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"13","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"4","y":"12","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"6","y":"12","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"12","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"9","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"11","y":"12","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"12","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"13","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"14","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"4","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"7","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"8","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"9","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"11","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"12","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"13","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"7","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"8","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"9","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"11","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"12","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"5","y":"9","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"9","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"9","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"9","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"9","y":"9","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"10","y":"9","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"4","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"8","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"9","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"10","y":"8","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"12","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"13","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"3","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"4","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"7","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"7","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"7","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"7","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"12","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"13","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"14","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"3","y":"6","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"4","y":"6","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"5","y":"6","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"6","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"6","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"8","y":"6","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"6","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"6","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"11","y":"6","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"12","y":"6","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"13","y":"6","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"14","y":"6","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"3","y":"5","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"4","y":"5","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"5","y":"5","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"6","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"12","y":"5","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"13","y":"5","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"14","y":"5","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"3","y":"4","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"4","y":"4","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"5","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"6","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"12","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"13","y":"4","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"14","y":"4","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"5","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"6","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"12","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"4","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"11","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"12","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"13","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"3","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"4","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"11","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"12","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"13","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"14","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"}]';
let marioFirstStep = '[{"x":"7","y":"16","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"16","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"16","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"16","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"16","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"6","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"12","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"13","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"14","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"6","y":"14","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"14","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"14","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"9","y":"14","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"14","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"11","y":"14","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"12","y":"14","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"5","y":"13","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"7","y":"13","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"9","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"11","y":"13","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"12","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"13","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"14","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"5","y":"12","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"7","y":"12","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"12","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"9","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"11","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"12","y":"12","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"13","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"14","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"15","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"5","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"8","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"9","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"11","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"12","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"13","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"14","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"8","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"9","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"11","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"12","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"13","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"4","y":"9","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"9","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"9","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"9","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"9","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"9","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"9","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"11","y":"9","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"2","y":"8","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"3","y":"8","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"4","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"8","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"8","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"8","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"12","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"13","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"14","y":"8","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"15","y":"8","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"16","y":"8","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"2","y":"7","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"3","y":"7","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"4","y":"7","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"6","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"7","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"7","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"7","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"7","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"12","y":"7","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"13","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"14","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"15","y":"7","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"16","y":"7","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"2","y":"6","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"3","y":"6","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"6","y":"6","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"6","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"6","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"6","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"6","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"6","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"12","y":"6","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"15","y":"6","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"6","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"12","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"13","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"14","y":"5","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"15","y":"5","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"4","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"5","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"6","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"12","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"13","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"14","y":"4","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"15","y":"4","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"3","y":"3","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"4","y":"3","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"6","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"12","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"13","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"14","y":"3","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"15","y":"3","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"3","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"4","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"4","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"}]';
let marioSecondStep = '[{"x":"6","y":"16","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"16","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"16","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"16","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"16","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"5","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"6","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"12","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"13","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"5","y":"14","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"14","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"14","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"14","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"9","y":"14","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"14","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"11","y":"14","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"4","y":"13","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"6","y":"13","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"8","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"9","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"13","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"11","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"12","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"13","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"4","y":"12","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"6","y":"12","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"12","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"9","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"11","y":"12","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"12","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"13","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"14","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"4","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"7","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"8","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"9","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"11","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"12","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"13","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"7","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"8","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"9","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"11","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"12","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"5","y":"9","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"9","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"9","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"9","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"9","y":"9","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"10","y":"9","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"4","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"8","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"8","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"11","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"4","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"7","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"7","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"7","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"7","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"7","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"12","y":"7","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"4","y":"6","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"6","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"6","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"6","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"6","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"6","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"6","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"6","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"12","y":"6","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"4","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"5","y":"5","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"5","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"5","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"8","y":"5","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"9","y":"5","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"12","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"5","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"6","y":"4","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"4","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"8","y":"4","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"9","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"6","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"3","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"10","y":"3","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"11","y":"3","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"9","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"10","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"11","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"12","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"9","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"}]';
let marioThirdStep = '[{"x":"7","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"15","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"6","y":"14","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"14","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"14","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"14","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"14","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"14","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"12","y":"14","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"13","y":"14","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"14","y":"14","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"6","y":"13","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"13","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"13","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"9","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"11","y":"13","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"12","y":"13","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"5","y":"12","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"7","y":"12","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"9","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"11","y":"12","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"12","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"13","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"14","y":"12","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"5","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"7","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"9","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"11","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"12","y":"11","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"13","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"14","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"15","y":"11","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"5","y":"10","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"10","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"8","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"9","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"10","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"11","y":"10","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"12","y":"10","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"13","y":"10","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"14","y":"10","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"9","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"8","y":"9","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"9","y":"9","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"10","y":"9","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"11","y":"9","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"12","y":"9","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"13","y":"9","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"6","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"9","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"10","y":"8","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"8","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"13","y":"8","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"5","y":"7","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"6","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"7","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"9","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"10","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"11","y":"7","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"12","y":"7","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"13","y":"7","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"14","y":"7","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"4","y":"6","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"5","y":"6","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"6","y":"6","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"6","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"6","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"9","y":"6","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"10","y":"6","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"11","y":"6","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"12","y":"6","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"13","y":"6","color":"rgb(255, 148, 90) none repeat scroll 0% 0%"},{"x":"4","y":"5","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"5","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"6","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"12","y":"5","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"4","y":"4","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"6","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"8","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"12","y":"4","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"3","y":"3","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"4","y":"3","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"5","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"6","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"7","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"9","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"10","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"11","y":"3","color":"rgb(255, 49, 24) none repeat scroll 0% 0%"},{"x":"3","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"9","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"10","y":"2","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"8","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"9","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"10","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"},{"x":"11","y":"1","color":"rgb(198, 99, 0) none repeat scroll 0% 0%"}]';
*/

$('.field-pixel').click(function() {
		this.classList.remove('ignore');
		this.style.background = activeColor;
});

$('.field-pixel').contextmenu(function(e) {
		e.preventDefault();
		this.style.background  = '';
		this.classList.add('ignore');
});




$('#set-color').click(function() {
	activeColor = $('#hex-color').val();
	$('#colpicker').spectrum('set', activeColor);
});

$('#generate').click(function() {
	$('#json-map').val(JSON.stringify(createMap()));
});

$('#generate-from').click(function() {
	fromMap();
});


function createMap() {
	let table = get('field');
	let jsonMap = [];
	for(let row of table.childNodes) {
		for(cell of row.childNodes) {
			if(!(cell.classList.contains('ignore'))) {
				let x = cell.id.split('y')[0].replace('field-x', '');
				let y = cell.id.split('y')[1];
				let color = cell.style.background;
				let jsonCell = {x: x, y: y, color: color};
				jsonMap.push(jsonCell);
			}
		}
	}
	return jsonMap;
}


function fromMap() {
	clearField('field');
	let map = JSON.parse($('#json-map').val());
	map.forEach(function(pixel, of, map) {
		$('#field-x' + pixel.x + 'y' + pixel.y).removeClass('ignore');
		$('#field-x' + pixel.x + 'y' + pixel.y).css('background', pixel.color);
	});
}



function makeSprite(spriteMap){
	let sprite = JSON.parse(spriteMap);
	let table = get();
	$('.preview-pixel').each(function() {
		this.style.background = '';
	});
	sprite.forEach(function(pixel, of, sprite) {
		$('#preview-x' + pixel.x + 'y' + pixel.y).removeClass('ignore');
		$('#preview-x' + pixel.x + 'y' + pixel.y).css('background', pixel.color);
	});
}


function clearField(fieldName) {
	for(let row of get(fieldName).childNodes) {
		for (let cell of row.childNodes) {
			cell.style = '';
			cell.classList.add('ignore');
		}
	}
}


function copySprite(sprite, field) {
	//let sprite = createMap();
	spritesFlow.push(sprite);
	sprite.forEach(function(pixel, of, sprite) {
		$('#' + field + '-x' + pixel.x + 'y' + pixel.y).css('background', pixel.color);
	});
}

let cycle;
let spritesFlow = [];
//let delayBetweenSprites = 100;


$('#action').click(function(){
	makeSprite(JSON.stringify(spritesFlow[0]));
	cycle = setInterval(function action(sprites, delay) {
		spritesFlow.forEach(function(sprite, of, flow) {
		setTimeout(makeSprite, of*delay, JSON.stringify(sprite));
	});
	}, $('#speed').val()*spritesFlow.length, spritesFlow, $('#speed').val());
});

$('#stop').click(function(){
	clearInterval(cycle);
});


$('#clear-field').click(function() {
	clearField('field');
});


function addSprite() {
	let sprite = document.createElement('table');
	sprite.classList.add('table-mini');
	sprite.setAttribute('id', 'sprite' + spriteNum);
	get('sprites').append(sprite);
	drawTable(sprite.id);	
}


$('#add-sprite').click(function() {
	spriteNum += 1;
	addSprite();
	copySprite(createMap(), 'sprite' + spriteNum);
});

$('#sprites-to-json').click(function() {
	$('#sprites-json-map').val(jsonifySprites());
});

$('#sprites-from-json').click(function() {
	spritifyJSON();
});


function jsonifySprites() {
	let jsonSprites = '';
	spritesFlow.forEach(function(sprite, of, flow) {
		
		jsonSprites += JSON.stringify(sprite);
		jsonSprites += ',';
	});


	jsonSprites = '[' + jsonSprites.slice(0, -1) + ']';
	return jsonSprites;
}


function spritifyJSON() {
	let map = JSON.parse($('#sprites-json-map').val());
	map.forEach(function(sprite, of, map) {
		spriteNum += 1;
		addSprite();
		copySprite(sprite, 'sprite' + spriteNum);
	});
}