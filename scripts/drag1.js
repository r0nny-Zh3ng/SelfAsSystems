//credit: https://blog.csdn.net/weixin_44439442/article/details/87796205-->

    var oipc=document.getElementById('pic');
    var isDrag=false;//是否开始拖拽 false 不拖拽
    var disX,disY;//图片相对于图片的位置
    //鼠标按下时
    oipc.onmousedown=function(e){
        isDrag=true;
        this.style.cursor='move';
        e=e||window.event;//兼容性写法
        //鼠标位置
        var x=e.clientX; 
        var y=e.clientY;
        //鼠标相对于图片的位置
        disX=x-this.offsetLeft;
        disY=y-this.offsetTop;
    }

    //鼠标移动时
    document.onmousemove=function(e){
      if(!isDrag){
          return;
      }
      e=e||window.event;//兼容性写法
      //鼠标位置
      var x=e.clientX;
      var y=e.clientY;
      //修改图片位置
      oipc.style.left=x-disX+'px';
      oipc.style.top=y-disY+'px';
    }

    //鼠标抬起时
    document.onmouseup=function(){
        isDrag=false;
        oipc.style.cursor='default';
        
    }
