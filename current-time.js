
function date_time(){
	var t=new Date();
	var hours=t.getHours() ;
	var minutes=t.getMinutes() ;
	var min = minutes +"";
    while (min.length < 2) min = "0" + min;
	document.getElementById("demo2").innerHTML= " Time is : " + hours + ":" + min ;
	//document.write("Time is : " + hours + ":" + min );
	console.log("Time is : " + hours + ":" + min );

}