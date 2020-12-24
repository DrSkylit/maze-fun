function Solver(maze,startPoint,endPoint){
	this.maze = maze;
	this.finishedMaze = maze;
	this.startPoint = startPoint;
	this.endPoint = endPoint;
	this.won = false;
	this.moveList = []

	this.solve = function(){
		this.move(this.startPoint.x,this.startPoint.y)
	}

	this.move = function(nextColumn,nextRow,list){
		if(this.winCheck(nextColumn,nextRow)){
			this.moveList.push({x:nextColumn,y:nextRow})
			this.finishedMaze[nextColumn][nextRow] = '*';
			this.won = true
		}else if(this.checkBarrior(nextColumn,nextRow)){
			// adds cursor to maze so we know where we have been
			this.maze[nextColumn][nextRow] = '*';
			if(this.won == false){
				this.finishedMaze[nextColumn][nextRow] = '*';
				this.moveList.push({x:nextColumn,y:nextRow})
			}
			// try right 
			if(nextColumn < this.maze.length-1 && this.won == false){
				this.move(nextColumn+1,nextRow)
			}
			// try down
			if(nextRow < this.maze[nextColumn].length-1 && this.won == false){
				this.move(nextColumn,nextRow+1)
			}
			//try left
			if(nextColumn > 0 && this.won == false){
				this.move(nextColumn-1,nextRow)
			}
			//try up 
			if(nextRow > 0 && this.won == false){
				this.move(nextColumn,nextRow-1)
			}
		}
	}

	this.checkBarrior = function(column, row){
		if(this.maze[column][row] == '&nbsp;'){
			return true
		}
	}

	this.winCheck = function(column,row){
		if(column == endPoint.x && row == endPoint.y){
			return true;
		}
	}

	this.getSolvedMaze = function(){
		return this.finishedMaze
	}

	this.getSolvedMoveList = function(){
		return this.moveList
	}
}