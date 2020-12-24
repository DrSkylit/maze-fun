function Creator(col,row,containerName){
	this.col = col;
	this.row = row;
	this.startPoint;
	this.endPoint;
	this.maze;
	this.mazeContainer = $("." + containerName);

	this.createMaze = function(maze,startPoint,endPoint){
		this.maze = maze;
		this.startPoint = startPoint
		this.endPoint = endPoint
	}

	this.printMaze = function(maze){
		if(maze == undefined){
			maze = this.maze
		}
		this.printHorizontalSide()
		this.printBreak();
		for (var i = 0; i < maze.length; i++) {
			this.printVerticalSide()
			for (var j = 0; j < maze[i].length; j++) {
				if(maze[i][j] == ' '){
					maze[i][j] = "&nbsp;"
				}
				var mazeSpace = $('<span>' + maze[i][j]+ '<span>')
				this.mazeContainer.append(mazeSpace);
			}
			this.printVerticalSide()
			this.printBreak();
		}
		this.printHorizontalSide()
		this.printBreak();
	}

	this.printHorizontalSide = function(){
		var corner = $('<span>+<span>');
		this.mazeContainer.append(corner);
		for (var i = 0; i < this.row; i++) {
			var wall = $('<span>-<span>');
			this.mazeContainer.append(wall);
		}
		var corner = $('<span>+<span>');
		this.mazeContainer.append(corner);
	}
	this.printVerticalSide = function(){
		var wall = $('<span>' +'|'+ '<span>')
		this.mazeContainer.append(wall);
	}

	this.printBreak = function(){
		var newLine = $('<br>');
		this.mazeContainer.append(newLine)
	}

	this.printFinishedMaze = function(containerName,maze){
		this.mazeContainer = $("." + containerName);
		this.printMaze(maze)
	}

	this.getMaze = function(){
		return this.maze
	}

	this.getStartPoint = function(){
		return this.startPoint
	}

	this.getEndPoint = function(){
		return this.endPoint
	}
}