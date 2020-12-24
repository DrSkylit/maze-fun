$(document).ready(function(){
	maze = [[' ', ' ', ' ',' ', 'x', 'x'],
			['x', 'x', ' ',' ', ' ', 'x'],
			['x', ' ', 'x','x', 'x', ' ']];
	startPoint = {x:0,y:0};
	endPoint = {x:2,y:5};

	var creator = new Creator(6,6,"maze");
	creator.createMaze(maze,startPoint,endPoint);
	creator.printMaze();
	button = $(".solve");

	button.click(function(){
		maze = creator.getMaze();
		start = creator.getStartPoint();
		end = creator.getEndPoint();
		var solver = new Solver(maze,start,end);
		solver.solve();
		maze = solver.getSolvedMaze()
		creator.printFinishedMaze("solved-maze",maze)
	})
});

