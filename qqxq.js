//set main namespace
goog.provide('qqxq');


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
goog.require('lime.Renderer');
goog.require('qqxq.Board');
goog.require('qqxq.Chess');

// entrypoint
qqxq.start = function(){

	var director = new lime.Director(document.body,1024,768),
	    scene = new lime.Scene(),

	target = new lime.Layer().setPosition(512,384);
	/*background = new lime.Sprite().setSize(1024,768).setPosition(10,10).setFill('bg.png');
	chess = new lime.Sprite().setSize(42,44);
	chessFill = new lime.fill.Frame('chess.png',42,0,42,44);
	chess.setFill(chessFill);
	SetPiece(chess,1,9);
	target.appendChild(background);
	target.appendChild(chess);
*/
	
		board = new qqxq.Board(target);
		game = new qqxq.GameLogic(CHESS_RED);
		

    //add target and title to the scene
    scene.appendChild(target);

		director.makeMobileWebAppCapable();
		//target.setRenderer(lime.Renderer.CANVAS);
    //add some interaction
    
    chess = new Array();
   	for(i=0;i<32;++i)
		{
			chess_obj = game.GetChessObj(i);
			var thePos = board.getPositionByIndex(chess_obj.x-1,chess_obj.y-1);
			chess[i] = new qqxq.Chess(chess_obj.id,thePos.x,thePos.y);
			chess[i].addToLayer(target);
		}
		
		//set call back animation
		game.OnRemoveChessCallback = function(removed_index){
			chess[removed_index].RemoveFromLayer(target);
		};
		
		game.OnSelectCallback = function(chess_index){
			chess[chess_index].OnSelect();
		};
		
		game.OnCancelSelectCallback = function(chess_index){
			chess[chess_index].OnCancelSelect();
		};
		
		game.OnMoveToCallback = function(chess_index,x,y){
			var str = x + " " + y;
			//alert(str);
			var thePos = board.getPositionByIndex(x-1,y-1); 
			chess[chess_index].MoveTo(thePos.x,thePos.y);
		};
		
		
    goog.events.listen(target,['mousedown','touchstart'],function(e){
			var theIndex = 
				board.getIndexByPosition(e.position.x,e.position.y);
			/*if(theIndex != null)
			{
				var thePos = board.getPositionByIndex(theIndex.x,theIndex.y);
				chess = new qqxq.Chess(0,thePos.x,thePos.y);
				chess.addToLayer(target);
			}
			chess_index = game.GetChessIndexByPos(theIndex.x,theIndex.y);
			if(chess_index != null)
			{
				
			}*/
			game.OnClick(theIndex.x+1,theIndex.y+1);
    });

	// set current scene active
	director.replaceScene(scene);

}


//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('qqxq.start', qqxq.start);
