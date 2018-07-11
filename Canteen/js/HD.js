function setDate(){
	var tr = document.getElementsByTagName("tr");

	var td = '<tr>';
	for(var i=(-5); i<=1; i++)
	{
		var date1 = getDay(i);
		var currentDay = date1.split("-")[2];
		td+='<td class="date-td" data-time='+date1+' onclick="selectDate(this)">'+currentDay+'</td>';
	}
	
	td += '</tr>';
	
	$("#date-table").append(td);
	
	document.getElementsByClassName("date-td")[5].style.borderBottom = "2px solid black";
	document.getElementById("currentTime").innerHTML = getDay(0);
}

function selectDate(obj)
{
	var date = document.getElementsByClassName("date-td");
	for(var i = 0; i < date.length; i++)
	{
		date[i].style.border = "none";
		
	}
	obj.style.borderBottom = "2px solid black";
	
	document.getElementById("currentTime").innerHTML = obj.getAttribute("data-time");
}

function getDay(day){  
       var today = new Date();  
         
       var targetday=today.getTime() + 1000*60*60*24*day;          
  
       today.setTime(targetday); //注意，这行是关键代码
         
       var tYear = today.getFullYear();  
       var tMonth = today.getMonth();  
       var tDate = today.getDate();  
       tMonth = doHandleMonth(tMonth + 1);  
       tDate = doHandleMonth(tDate);  
       return tYear+"-"+tMonth+"-"+tDate;  
} 

function doHandleMonth(month){  
       var m = month;  
       if(month.toString().length == 1){  
          m = "0" + month;  
       }  
       return m;  
}
