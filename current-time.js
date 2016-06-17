
function date_time(){
	var t=new Date();
	var hours=t.getHours() ;
	var minutes=t.getMinutes() ;
	var min = minutes +"";
    while (min.length < 2) min = "0" + min;
	document.write("Time is : " + hours + ":" + min );
}