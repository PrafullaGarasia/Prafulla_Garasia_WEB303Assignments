/*
	WEB 303 Assignment 1 - jQuery
	{Prafulla Kalusinh Garasia}
*/

$(document).ready(function() 
{
    console.log("ready!");

     $("input").keyup(function()
	 {
    
		var textbox_Salary = $('#yearly-salary').val(); 
		
		var textbox_Salary = $('#percent').val(); 

		console.log("Sal==",textbox_Salary);

		var amount_cal = (textbox_Salary * textbox_Salary) / 100;
        
		console.log(amount_cal.toFixed(2));
  
		$("#amount_cal").val("Result :" + amount_cal.toFixed(2));
  
		$('#amount').html("$"+amount_cal.toFixed(2));

     console.log("cal_Value==",amount_cal.toFixed(2));

    });
});