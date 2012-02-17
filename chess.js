//set main namespace
goog.provide('qqxq.Chess');


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


qqxq.Chess = function(id,posX,posY){
	
	//var theSide = side.toLocaleLowerCase();
	//if(theSide=="black")
	//{
	//	id = id + 7;
	//}
	
	if(id <0 || id >= 14)
	{
		id = 0;
	}
	
	this.ChessSprite = new lime.Sprite().setSize(42,44);
	var chessFill = new lime.fill.Frame('chess.png',42*id,0,42,44);
	this.ChessSprite.setFill(chessFill).setPosition(posX,posY);
	
}

qqxq.Chess.prototype.addToLayer = function(layer) {
	layer.appendChild(this.ChessSprite);
}

qqxq.Chess.prototype.RemoveFromLayer = function(layer){
	layer.removeChild(this.ChessSprite);
}

qqxq.Chess.prototype.OnSelect = function(){
	this.ChessSprite.runAction(new lime.animation.ScaleTo(1.2).setDuration(0.5));

}

qqxq.Chess.prototype.OnCancelSelect = function(){
	this.ChessSprite.runAction(new lime.animation.ScaleTo(1.0).setDuration(0.5));
}

qqxq.Chess.prototype.MoveTo = function(x,y){
	this.ChessSprite.runAction(new lime.animation.MoveTo(x,y).setDuration(0.5));
}
// entrypoint

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
//goog.exportSymbol('board.start', board.start);
