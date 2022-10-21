/*
	WEB 303 Assignment 1 - jQuery
	{Prafulla Kalusinh Garasia}
*/

$(document).ready(function () {
	console.log("ready!");

	$("input").keyup(function () {

		let Salary = $('#yearly-salary').val();

		let Percent = $('#percent').val();

		console.log("EnterSalary==", Salary);
		console.log("EnterPercent==", Percent);

		let amount_cal = (Salary * Percent) / 100;

		console.log(amount_cal.toFixed(2));

		$("#amount_cal").val("Result :" + amount_cal.toFixed(2));

		$('#amount').html("$" + amount_cal.toFixed(2));

		console.log("cal_Value==", amount_cal.toFixed(2));

	});
});