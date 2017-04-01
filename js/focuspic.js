/*焦点图*/
var oDiv=document.getElementById("pic_roll");
var aUl=oDiv.getElementsByTagName("ul");
var aImage=aUl[0].getElementsByTagName('li');
var aBtn=aUl[1].getElementsByTagName('li');
var timer=null;
var n=0;
for (var i = 0; i < aBtn.length; i++) {
    aBtn[i].index=i;
    aBtn[i].onclick=function(){
        set(this.index);
        n=this.index; // 解决自动切换时点击焦点，焦点不改变，依旧按原来序列递增的问题
    }
};
var timer=setInterval(fn,1000);
function fn(){
    set(n);
    n++;
    if(n==aBtn.length){
        n=0;
    }
}
function set(num){
    for (var i = 0; i < aBtn.length; i++) {
        aBtn[i].className="";
        aImage[i].className="";
    };
    aBtn[num].className="active2";
    aImage[num].className="active1";
}
oDiv.onmouseover=function(){
    clearInterval(timer)
}
oDiv.onmouseout=function(){
    timer=setInterval(fn,1000);
}


/*侧边栏*/
var aChannel=document.getElementsByClassName("channel");        
var aLi=document.getElementsByClassName("main_li"); 
for (var i = 0; i < aLi.length; i++) {
   aLi[i].index=i;
   aLi[i].onmouseover=function(){
                
      for (var j = 0; j < aChannel.length; j++) {
        aChannel[this.index].style.display="block";
      };
   }
     aLi[i].onmouseout=function(){
        for (var j = 0; j < aChannel.length; j++) {
             aChannel[this.index].style.display="none";
        };
     }            
};


/*tab选项卡*/
var oTab=document.getElementById("tab");
var aTabLi=oTab.getElementsByTagName("li");
var aTabBox=document.getElementsByClassName("page-bottom");

for( var i=0;i<aTabLi.length;i++){
	aTabLi[i].index=i;
	aTabLi[i].onmouseover=function(){
		for(var j=0;j<aTabBox.length;j++){
			aTabBox[j].style.display="none";
			aTabLi[j].className="";		
		};
			aTabBox[this.index].style.display="block";
			aTabLi[this.index].className="tab-active";
	}
}







