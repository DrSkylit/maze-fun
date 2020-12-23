$(document).ready(function(){

	maze = [[' ', ' ', ' '],
			['x', 'x', ' '],
			['x', 'x', ' ']];
	startPoint = {x:0,y:0}
	endPoint = {x:3,y:3}


	var creator = new Creator("maze");
	creator.createMaze(maze,startPoint,endPoint);
	creator.printMaze();

});

