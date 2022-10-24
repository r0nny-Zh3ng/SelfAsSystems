var dragObj, count=0;

function set_drag_drop(obj)
{
	if(count>0){
		// count margins and divs offset
		// body{ margin:10px; }
		// height:100px;
		obj.adx = 10; 
		obj.ady = 10 + (count*100)
	}else{
		obj.adx = 0;
		obj.ady = 0;
	}
	count++;
	
	obj.onmousedown = function(e)
	{
		var rect = obj.getBoundingClientRect();
		obj.dx = rect.left - e.clientX;
		obj.dy = rect.top - e.clientY;
		obj.isDown = true;
		dragObj = this;
	}

	obj.onmouseup = function(e)
	{
		obj.isDown = false;
	}

	document.onmousemove = function(e)
	{
		if(dragObj && dragObj.isDown)
		{
			dragObj.style.left = e.pageX -dragObj.adx+ dragObj.dx +"px";
			dragObj.style.top = e.pageY -dragObj.ady+ dragObj.dy + "px";
		}
	}
}

set_drag_drop(document.getElementById("obj1"));
set_drag_drop(document.getElementById("obj2"));
set_drag_drop(document.getElementById("obj3"));
