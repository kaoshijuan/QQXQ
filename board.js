//set main namespace
goog.provide('qqxq.Board');


//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.fill.Frame');
goog.require('lime.Label');
goog.require('lime.animation.Spawn');
goog.require('lime.animation.FadeTo');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.MoveTo');

var start_x = -231;
var start_y = 262;
var grid_width = 57;


qqxq.Board = function(layer){
	this.BoardSprite = new lime.Sprite().setSize(1024,768).setPosition(10,10).setFill('bg.png');
	layer.appendChild(this.BoardSprite);
}

qqxq.Board.prototype.getPositionByIndex = function(xIndex,yIndex) {

	var position = {
		x:0,
		y:0
		};
		
	if(xIndex < 0 || xIndex > 8 || yIndex <0 || yIndex>9)
	{
			return null;
	}
	
	var pos_x = start_x + (xIndex) * grid_width;
	var pos_y = start_y - (yIndex) * grid_width;
	
	if(yIndex>4)
	{
		pos_y = (9-yIndex) * grid_width - start_y;
	}	
	
	position.x=pos_x;
	position.y=pos_y;
	
	return position;
}

//used for touch or click	
qqxq.Board.prototype.getIndexByPosition = function (posX,posY){

	var theIndex = {
		x:0,
		y:0
	};
	
	var delta = posX - start_x;
	var xIndex = Math.round(delta/grid_width);
	var yIndex = -1;
	
	if(posY>0)
	{
		delta = start_y - posY;
		yIndex = Math.round(delta/grid_width);
	}else{
		delta = start_y + posY;
		yIndex = 9 - Math.round(delta/grid_width);
	}

	if(xIndex<0 || xIndex > 8 || yIndex < 0 || yIndex > 9)
	{
		return null;
	}
	theIndex.x = xIndex;
	theIndex.y = yIndex;
	
	return theIndex;
}




// entrypoint

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
//goog.exportSymbol('board.start', board.start);
