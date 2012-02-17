//set main namespace
goog.provide('qqxq.GameLogic');


//get requirements


var CHESS_RED=0;		//红方
var CHESS_BLACK=1;	//黑方

var RED_K=0;			//红帅
var RED_S=1;			//仕
var RED_X=2;			//相
var RED_M=3;			//马
var RED_J=4;			//车
var RED_P=5;			//炮
var RED_B=6;			//兵

var BLACK_K=7;		//黑将
var BLACK_S=8;		//士
var BLACK_X=9;		//象
var BLACK_M=10;		//马
var BLACK_J=11;		//车
var BLACK_P=12;		//炮
var BLACK_B=13;		//卒

qqxq.GameLogic = function(side){
	
	
	this.myside=side;
	this.m_pointChessman = new Array();
	if(side==CHESS_BLACK){
	
		this.m_pointChessman[0] = {x:5,y:10,id:3,alive:true}; //帅
		this.m_pointChessman[1] = {x:4,y:10,id:4,alive:true};	//士
		this.m_pointChessman[2] = {x:6,y:10,id:4,alive:true};
		this.m_pointChessman[3] = {x:3,y:10,id:5,alive:true};	//相
		this.m_pointChessman[4] = {x:7,y:10,id:5,alive:true};
		this.m_pointChessman[5] = {x:2,y:10,id:1,alive:true};	//马
		this.m_pointChessman[6] = {x:8,y:10,id:1,alive:true};
		this.m_pointChessman[7] = {x:1,y:10,id:0,alive:true};	//车
		this.m_pointChessman[8] = {x:9,y:10,id:0,alive:true};
		this.m_pointChessman[9] = {x:2,y:8,id:2,alive:true};	//炮
		this.m_pointChessman[10] = {x:8,y:8,id:2,alive:true};
		this.m_pointChessman[11] = {x:1,y:7,id:6,alive:true};	//兵
		this.m_pointChessman[12] = {x:3,y:7,id:6,alive:true};
		this.m_pointChessman[13] = {x:5,y:7,id:6,alive:true};
		this.m_pointChessman[14] = {x:7,y:7,id:6,alive:true};
		this.m_pointChessman[15] = {x:9,y:7,id:6,alive:true};
		
		this.m_pointChessman[16] = {x:5,y:1,id:10,alive:true};	//将
		this.m_pointChessman[17] = {x:4,y:1,id:11,alive:true};	//士
		this.m_pointChessman[18] = {x:6,y:1,id:11,alive:true};
		this.m_pointChessman[19] = {x:3,y:1,id:12,alive:true};	//相
		this.m_pointChessman[20] = {x:7,y:1,id:12,alive:true};
		this.m_pointChessman[21] = {x:2,y:1,id:8,alive:true};	//马
		this.m_pointChessman[22] = {x:8,y:1,id:8,alive:true};
		this.m_pointChessman[23] = {x:1,y:1,id:7,alive:true};	//车
		this.m_pointChessman[24] = {x:9,y:1,id:7,alive:true};
		this.m_pointChessman[25] = {x:2,y:3,id:9,alive:true};	//炮
		this.m_pointChessman[26] = {x:8,y:3,id:9,alive:true};
		this.m_pointChessman[27] = {x:1,y:4,id:13,alive:true};	//卒
		this.m_pointChessman[28] = {x:3,y:4,id:13,alive:true};
		this.m_pointChessman[29] = {x:5,y:4,id:13,alive:true};
		this.m_pointChessman[30] = {x:7,y:4,id:13,alive:true};
		this.m_pointChessman[31] = {x:9,y:4,id:13,alive:true};
	}else{
		this.m_pointChessman[0] = {x:5,y:1,id:3,alive:true}; //帅
		this.m_pointChessman[1] = {x:4,y:1,id:4,alive:true};	//士
		this.m_pointChessman[2] = {x:6,y:1,id:4,alive:true};
		this.m_pointChessman[3] = {x:3,y:1,id:5,alive:true};	//相
		this.m_pointChessman[4] = {x:7,y:1,id:5,alive:true};
		this.m_pointChessman[5] = {x:2,y:1,id:1,alive:true};	//马
		this.m_pointChessman[6] = {x:8,y:1,id:1,alive:true};
		this.m_pointChessman[7] = {x:1,y:1,id:0,alive:true};	//车
		this.m_pointChessman[8] = {x:9,y:1,id:0,alive:true};
		this.m_pointChessman[9] = {x:2,y:3,id:2,alive:true};	//炮
		this.m_pointChessman[10] = {x:8,y:3,id:2,alive:true};
		this.m_pointChessman[11] = {x:1,y:4,id:6,alive:true};	//兵
		this.m_pointChessman[12] = {x:3,y:4,id:6,alive:true};
		this.m_pointChessman[13] = {x:5,y:4,id:6,alive:true};
		this.m_pointChessman[14] = {x:7,y:4,id:6,alive:true};
		this.m_pointChessman[15] = {x:9,y:4,id:6,alive:true};
		
		this.m_pointChessman[16] = {x:5,y:10,id:10,alive:true};	//将
		this.m_pointChessman[17] = {x:4,y:10,id:11,alive:true};	//士
		this.m_pointChessman[18] = {x:6,y:10,id:11,alive:true};
		this.m_pointChessman[19] = {x:3,y:10,id:12,alive:true};	//相
		this.m_pointChessman[20] = {x:7,y:10,id:12,alive:true};
		this.m_pointChessman[21] = {x:2,y:10,id:8,alive:true};	//马
		this.m_pointChessman[22] = {x:8,y:10,id:8,alive:true};
		this.m_pointChessman[23] = {x:1,y:10,id:7,alive:true};	//车
		this.m_pointChessman[24] = {x:9,y:10,id:7,alive:true};
		this.m_pointChessman[25] = {x:2,y:8,id:9,alive:true};	//炮
		this.m_pointChessman[26] = {x:8,y:8,id:9,alive:true};
		this.m_pointChessman[27] = {x:1,y:7,id:13,alive:true};	//卒
		this.m_pointChessman[28] = {x:3,y:7,id:13,alive:true};
		this.m_pointChessman[29] = {x:5,y:7,id:13,alive:true};
		this.m_pointChessman[30] = {x:7,y:7,id:13,alive:true};
		this.m_pointChessman[31] = {x:9,y:7,id:13,alive:true};		
	}
	this.m_bSelected = false;
	this.m_SelectedIndex = -1;
	this.m_turn = CHESS_RED;
	
	//call back
	this.OnRemoveChessCallback = null;
	this.OnSelectCallback = null;
	this.OnCancelSelectCallback = null;
	this.OnMoveToCallback = null;
}

qqxq.GameLogic.prototype.GetChessObj = function(iIndex){
	return this.m_pointChessman[iIndex];
}

qqxq.GameLogic.prototype.GetChessIndexByPos = function(x,y){
	for(i=0;i<32;++i)
	{
		if(this.m_pointChessman[i].x==x && this.m_pointChessman[i].y==y && this.m_pointChessman[i].alive==true)
		{
			return i;
		}
	}
	return null
}

qqxq.GameLogic.prototype.OnSelect = function(x,y){
	var chess_index = this.GetChessIndexByPos(x,y);
	if(chess_index != null)
	{
		if((this.m_turn == CHESS_RED && this.m_pointChessman[chess_index].id<7) || 
		(this.m_turn == CHESS_BLACK && this.m_pointChessman[chess_index].id>=7)) //己方
		{
			this.m_bSelected=true;
			this.OnSelectCallback(chess_index);
			this.m_SelectedIndex=chess_index;
		}
	}
}

qqxq.GameLogic.prototype.CheckMA = function(src_x,src_y,dst_x,dst_y)
{
	if(src_x==dst_x || src_y == dst_y)
		return false;
	
	var tmp_index = 0;
	
	var delta_x = dst_x - src_x;
	var delta_y = dst_y - src_y;
	if(delta_x>0)
		delta_x = delta_x-1;
	else
		delta_x = delta_x+1;
	if(delta_y>0)
		delta_y = delta_y-1;
	else
		delta_y = delta_y+1;
		
	
	tmp_index = this.GetChessIndexByPos(src_x+delta_x,src_y+delta_y);
	if(tmp_index != null)
		return false;
	
	var delta = Math.abs(src_y-dst_y) + Math.abs(src_x-dst_x);
	if(delta == 3)
		return true;
	else
		return false;
}

qqxq.GameLogic.prototype.CheckXIANG = function(src_x,src_y,dst_x,dst_y)
{
	//不能过河
	if(this.myside == CHESS_RED)
	{
		if(this.m_turn == CHESS_RED)
		{
			if(dst_y > 5)
			{
				return false;
			}
		}else{
			if(dst_y < 6)
			{
				return false;
			}
		}
	}else{
		if(this.m_turn == CHESS_BLACK)
		{
			if(dst_y > 5)
			{
					return false;
			}
		}else{
			if(dst_y < 6)
			{
				return false;
			}			
		}
	}
	
	
	var delta_x = dst_x - src_x;
	var delta_y = dst_y - src_y;
	if(Math.abs(delta_x) != 2 || Math.abs(delta_y)!=2 )
	{
		return false;
	}
	
	
	//塞象心
	var temp_index = this.GetChessIndexByPos(src_x+delta_x/2,src_y+delta_y/2);
	if(temp_index != null)
	{
		return false;
	}
	return true;
}


qqxq.GameLogic.prototype.CheckSHI = function(src_x,src_y,dst_x,dst_y)
{
	
	//不能出九宫格
	if(dst_x<4 || dst_x>6)
	{
		return false;
	}
	if(this.myside == CHESS_RED)
	{
		if(this.m_turn == CHESS_RED)
		{
			if(dst_y > 3)
			{
				return false;
			}
		}else{
			if(dst_y < 8)
			{
				return false;
			}
		}
	}else{
		if(this.m_turn == CHESS_BLACK)
		{
			if(dst_y > 3)
			{
					return false;
			}
		}else{
			if(dst_y < 8)
			{
				return false;
			}			
		}
	}
	
	//只能走斜线一格	
	var delta_x = dst_x - src_x;
	var delta_y = dst_y - src_y;
	if(Math.abs(delta_x) != 1 || Math.abs(delta_y)!=1 )
	{
		return false;
	}	
	
	return true;
}

qqxq.GameLogic.prototype.CheckSHUAI = function(src_x,src_y,dst_x,dst_y)
{
	
	//不能出九宫格
	if(dst_x<4 || dst_x>6)
	{
		return false;
	}
	if(this.myside == CHESS_RED)
	{
		if(this.m_turn == CHESS_RED)
		{
			if(dst_y > 3)
			{
				return false;
			}
		}else{
			if(dst_y < 8)
			{
				return false;
			}
		}
	}else{
		if(this.m_turn == CHESS_BLACK)
		{
			if(dst_y > 3)
			{
					return false;
			}
		}else{
			if(dst_y < 8)
			{
				return false;
			}			
		}
	}
	
	if(dst_x != src_x && dst_y != src_y)
	{
		return false;
	}
	
	var delta_x = dst_x - src_x;
	var delta_y = dst_y - src_y;
	if(Math.abs(delta_x) == 1 || Math.abs(delta_y)==1 )
	{
		return true;
	}else{
		return false;
	}
	
	
	return true;
}

qqxq.GameLogic.prototype.CheckPAO = function(src_x,src_y,dst_x,dst_y)
{
	
		
	var the_dst_chess_index = this.GetChessIndexByPos(dst_x,dst_y);
	if(the_dst_chess_index != null)
	{
		if((this.m_turn == CHESS_RED && this.m_pointChessman[the_dst_chess_index].id > 6)
		||(this.m_turn == CHESS_BLACK&& this.m_pointChessman[the_dst_chess_index].id < 7))
		{
			if(src_x != dst_x && src_y != dst_y)
			{
				return false;
			}
				
			if(src_x == dst_x && src_y == dst_y)
			{
				return false;
			}
			
			if(src_x == dst_x)
			{
				var delta = (dst_y-src_y)/Math.abs(dst_y-src_y);
				var i = 0;
				var count = 0;
				for(i=src_y + delta; i!=dst_y ; i=i+ delta)
				{
					var temp_chessIndex = this.GetChessIndexByPos(src_x,i);
					if(temp_chessIndex != null)
					{
						if(this.m_pointChessman[temp_chessIndex].alive==true)
						{
							count++;
						}
					}
				}//for
				if(count != 1)
				{
					return false;
				}
			}
			if(src_y == dst_y)
			{
				
				var delta = (dst_x-src_x)/Math.abs(dst_x-src_x);
				var i = 0;
				var count=0;
				for(i=src_x + delta; i!=dst_x ; i=i+ delta)
				{
					var temp_chessIndex = this.GetChessIndexByPos(i,src_y);
					if(temp_chessIndex != null)
					{
						if(this.m_pointChessman[temp_chessIndex].alive==true)
						{
							count++;
						}
					}
				}//for
				if(count != 1)
				{
					return false;
				}		
			}				
						
		}else{
			//不能打自己
			return false;
		}
	}else{
		
		return this.CheckCHE(src_x,src_y,dst_x,dst_y);	
	}
	return true;
	
}

qqxq.GameLogic.prototype.CheckBING = function(src_x,src_y,dst_x,dst_y)
{	
	
		var direction = 1;
		if(this.myside==CHESS_RED)
		{
			if(this.m_turn==CHESS_RED)
			{
				direction = 1;
			}else{
				direction = -1;
			}
		}else{
			if(this.m_turn==CHESS_RED)
			{
				direction = -1;
			}else{
				direction = 1;
			}
		}
		
		//不能回头
		if(dst_x == src_x)
		{
			if(dst_y - src_y == direction)
				return true;
			else
				return false;
		}
		
		if((direction==1 && src_y<6 )|| (direction==-1 && src_y>5))
		{
			//未过河
			if(dst_x != src_x){
				return false;
			}
		}else{
			if(Math.abs(dst_x-src_x)!= 1)
			{
				return false;
			}else{
				if(dst_y != src_y)
				{
					return false;
				}
			}
		}
		
		return true;
		
}

qqxq.GameLogic.prototype.CheckCHE = function(src_x,src_y,dst_x,dst_y)
{
//	t = src_x + " " + src_y + " " + dst_x + " " + dst_y ;
	
//	alert(t);
	if(src_x != dst_x && src_y != dst_y)
	{
		return false;
	}
	
	if(src_x == dst_x && src_y == dst_y)
	{
		return false;
	}
	
	if(src_x == dst_x)
	{
		var delta = (dst_y-src_y)/Math.abs(dst_y-src_y);
		var i = 0;
		for(i=src_y + delta; i!=dst_y ; i=i+ delta)
		{
//			alert(src_x + " " + i);
			var temp_chessIndex = this.GetChessIndexByPos(src_x,i);
			if(temp_chessIndex != null)
			{
				if(this.m_pointChessman[temp_chessIndex].alive==true)
				{
					return false;
				}
			}
		}
	}
	if(src_y == dst_y)
	{
		
		var delta = (dst_x-src_x)/Math.abs(dst_x-src_x);
		var i = 0;
		for(i=src_x + delta; i!=dst_x ; i=i+ delta)
		{
//			alert(i + " " + src_y);
			var temp_chessIndex = this.GetChessIndexByPos(i,src_y);
			if(temp_chessIndex != null)
			{
				if(this.m_pointChessman[temp_chessIndex].alive==true)
				{
					return false;
				}
			}
		}		
	}	
}

qqxq.GameLogic.prototype.CanGo = function(chess_index,x,y)
{
	//Get position of itself
	
	var the_x = this.m_pointChessman[chess_index].x;
	var the_y = this.m_pointChessman[chess_index].y;
	var the_id = this.m_pointChessman[chess_index].id;
	var the_alive = this.m_pointChessman[chess_index].alive;
	
	if(the_alive == false)
	{
		return false;
	}
	//var t = ""+the_x + " "+the_y + " " + the_id + " " + x + " " + y;
	//alert(t);
	var tmp_ret = true;
	switch(the_id)
	{
		case 0:
		case 7:
			tmp_ret = this.CheckCHE(the_x,the_y,x,y);
			break;
		case 1:
		case 8:
			tmp_ret = this.CheckMA(the_x,the_y,x,y);
			break;
		case 5:
		case 12:
			tmp_ret = this.CheckXIANG(the_x,the_y,x,y);
			break;
		case 4:
		case 11:
			tmp_ret = this.CheckSHI(the_x,the_y,x,y);
			break;
		case 3:
		case 10:
			tmp_ret = this.CheckSHUAI(the_x,the_y,x,y);
			break;
		case 2:
		case 9:
			tmp_ret = this.CheckPAO(the_x,the_y,x,y);
			break;
		case 6:
		case 13:
			tmp_ret = this.CheckBING(the_x,the_y,x,y);
			break;
	}
	
	if(tmp_ret == false)
		return false;
	
	
	var the_dst_chess_index = this.GetChessIndexByPos(x,y);
	if(the_dst_chess_index != null)
	{
		if(this.m_turn == CHESS_RED)
		{
			if(this.m_pointChessman[the_dst_chess_index].id < 7)
			{
				return false;
			}  
		}
		if(this.m_turn == CHESS_BLACK)
		{
			if(this.m_pointChessman[the_dst_chess_index].id >6)
			{
				return false;
			} 			
		}
	}
	
	return true;
	
}

qqxq.GameLogic.prototype.OnGo = function(x,y){
	
	if(this.CanGo(this.m_SelectedIndex,x,y) == false)
	{
		return false;
	}
	
	/*
	if((m_turn == CHESS_RED && this.m_pointChessman[chess_index].id>=7) || 
		(m_turn == CHESS_BLACK && this.m_pointChessman[chess_index].id<7)) //对方		
		{
			
		}
		*/
	var removed_index = -1;
	var chess_index = this.GetChessIndexByPos(x,y);
	if(chess_index != null)
	{
		this.m_pointChessman[chess_index].alive = false;
		removed_index = chess_index;
	}else{
		//...
	}
	
	this.m_pointChessman[this.m_SelectedIndex].x = x;
	this.m_pointChessman[this.m_SelectedIndex].y = y;
	
	this.OnMoveToCallback(this.m_SelectedIndex,x,y);
	this.m_bSelected = false;
	this.OnCancelSelectCallback(this.m_SelectedIndex);
	if(removed_index != -1)
	{
		this.OnRemoveChessCallback(removed_index);
	}
	
	if(this.m_turn == CHESS_RED)
		this.m_turn = CHESS_BLACK;
	else
		this.m_turn = CHESS_RED;
}

qqxq.GameLogic.prototype.OnClick = function(x,y){
	
	var index = this.GetChessIndexByPos(x,y);
	
	if(this.m_bSelected == false)
	{
		this.OnSelect(x,y);
	}else{
		
		
		var the_x = this.m_pointChessman[this.m_SelectedIndex].x;
		var the_y = this.m_pointChessman[this.m_SelectedIndex].y;
		var the_id = this.m_pointChessman[this.m_SelectedIndex].id;
		var the_alive = this.m_pointChessman[this.m_SelectedIndex].alive;
		if(the_x == x && the_y == y && the_alive ==true)
		{
			//目标点击是已选择对象，则取消选择自己
			this.OnCancelSelectCallback(this.m_SelectedIndex);
			this.m_bSelected = false;
		}else{
			if(index != null && 
					(//目标是自己一边
						(this.m_pointChessman[index].id <7 && this.m_turn==CHESS_RED)||
						(this.m_pinttChessman[index].id >6 && this.m_turn==CHESS_BLACK)
					)
				)
			{
				//重新换一个棋子选中
				this.OnCancelSelectCallback(this.m_SelectedIndex);
				this.OnSelect(x,y);
			}else{
				this.OnGo(x,y);
			}
		}
	}
}

// entrypoint

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
//goog.exportSymbol('board.start', board.start);
