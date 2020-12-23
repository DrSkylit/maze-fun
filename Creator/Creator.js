function Creator(containerName){
	this.row = 3;
	this.col = 3;
	this.startPoint;
	this.endPoint;
	this.maze;
	this.mazeContainer = $("." + containerName);

	this.createMaze = function(maze,startPoint,endPoint){
		this.maze = maze;
		this.startPoint = startPoint
		this.endPoint = endPoint
	}

	this.printMaze = function(){
		this.printHorizontalSide()
		this.printBreak();
		for (var i = 0; i < this.maze.length; i++) {
			this.printVerticalSide()
			for (var j = 0; j < this.maze[i].length; j++) {
				if(this.maze[i][j] == ' '){
					this.maze[i][j] = "&nbsp;"
				}
				var mazeSpace = $('<span>' +this.maze[i][j]+ '<span>')
				this.mazeContainer.append(mazeSpace);
			}
			this.printVerticalSide()
			this.printBreak();
		}
		this.printHorizontalSide()
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

	this.getMaze = function(){
		return this.maze
	}
}