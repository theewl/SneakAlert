$(function()
{
	//gets the output from HTML and puts it in data
	chrome.storage.sync.get(['theName','thePrice','theDate','theTime',
							 'theName2','thePrice2','theDate2','theTime2',
							 'theName3','thePrice3','theDate3','theTime3',
							 'theName4','thePrice4','theDate4','theTime4',
							 'theName5','thePrice5','theDate5','theTime5',
							 'theName6','thePrice6','theDate6','theTime6', 'm1','d1'], function(data)
	{
			//inputs data in output from HTML
			$('#theName').text(data.theName);
			$('#thePrice').text(data.thePrice);
			$('#theDate').text(data.theDate);
			$('#theTime').text(data.theTime);

			$('#theName2').text(data.theName2);
			$('#thePrice2').text(data.thePrice2);
			$('#theDate2').text(data.theDate2);
			$('#theTime2').text(data.theTime2);

			$('#theName3').text(data.theName3);
			$('#thePrice3').text(data.thePrice3);
			$('#theDate3').text(data.theDate3);
			$('#theTime3').text(data.theTime3);

			$('#theName4').text(data.theName4);
			$('#thePrice4').text(data.thePrice4);
			$('#theDate4').text(data.theDate4);
			$('#theTime4').text(data.theTime4);	

			$('#theName5').text(data.theName5);
			$('#thePrice5').text(data.thePrice5);
			$('#theDate5').text(data.theDate5);
			$('#theTime5').text(data.theTime5);

			$('#theName6').text(data.theName6);
			$('#thePrice6').text(data.thePrice6);
			$('#theDate6').text(data.theDate6);
			$('#theTime6').text(data.theTime6);		

			$('#m1').text(data.m1);
			$('#d1').text(data.d1);

			var m1 = +$("#m1").text();
			var d1 = +$("#d1").text();
			var time1 = $("#theTime").text();
			var t1 = parseInt(time1.slice(0,2));
			var t2 = parseInt(time1.slice(3,5));

			var m2 = +$("#m1").text();
			var d2 = +$("#d1").text();
			var time2 = $("#theTime").text();
			var t3 = parseInt(time1.slice(0,2));
			var t4 = parseInt(time1.slice(3,5));

			var m3 = +$("#m1").text();
			var d3 = +$("#d1").text();
			var time3 = $("#theTime").text();
			var t5 = parseInt(time1.slice(0,2));
			var t6 = parseInt(time1.slice(3,5));

			var m4 = +$("#m1").text();
			var d4 = +$("#d1").text();
			var time4 = $("#theTime").text();
			var t7 = parseInt(time1.slice(0,2));
			var t8 = parseInt(time1.slice(3,5));

			var m5 = +$("#m1").text();
			var d5 = +$("#d1").text();
			var time5 = $("#theTime").text();
			var t9 = parseInt(time1.slice(0,2));
			var t10 = parseInt(time1.slice(3,5));

			var m6 = +$("#m1").text();
			var d6 = +$("#d1").text();
			var time6 = $("#theTime").text();
			var t11 = parseInt(time1.slice(0,2));
			var t12 = parseInt(time1.slice(3,5));


		var dropDate = 
		{
		  month: m1,
		  date: d1,
		  hours: t1,
		  minutes: t2
		}
		console.log(dropDate);

		var dropDate2 = 
		{
		  month: m2,
		  date: d2,
		  hours: t3,
		  minutes: t4
		}

		var dropDate3 = 
		{
		  month: m3,
		  date: d3,
		  hours: t5,
		  minutes: t6
		}

		var dropDate4 = 
		{
		  month: m4,
		  date: d4,
		  hours: t7,
		  minutes: t8
		}

		var dropDate5 = 
		{
		  month: m5,
		  date: d5,
		  hours: t9,
		  minutes: t10
		}

		var dropDate6 = 
		{
		  month: m6,
		  date: d6,
		  hours: t11,
		  minutes: t12
		}

		
		function dropDateAlert() 
		{
		  var now = new Date();
		  var hours24 = now.getHours();
		  var hours = ((hours24 + 11) % 12) + 1;
		  return (now.getMonth() +1 == dropDate.month 
		  	      && now.getDate() == dropDate.date
		)};
		

		 function dropIn10()
		 {
		  var now = new Date();
		  var hours24 = now.getHours();
		  var hours = ((hours24 + 11) % 12) + 1;
		  var nowMins = now.getMinutes();
		  var nowMins10 = nowMins + 10;

		  if (nowMins10 == 60)
		  {
			nowMins10 = 0;
			hours++;
		  }
		  else if (nowMins10 == 61)
		  {
		  	nowMins10 = 1;
			hours++;
		  }
		  else if (nowMins10 == 62)
		  {
		  	nowMins10 = 2;
			hours++;
		  }
		  else if (nowMins10 == 63)
		  {
		  	nowMins10 = 3;
			hours++;
		  }
		  else if (nowMins10 == 64)
		  {
		  	nowMins10 = 4;
			hours++;
		  }
		  else if (nowMins10 == 65)
		  {
		  	nowMins10 = 5;
			hours++;
		  }
		  else if (nowMins10 == 66)
		  {
		  	nowMins10 = 6;
			hours++;
		  }
		  else if (nowMins10 == 67)
		  {
		  	nowMins10 = 7;
			hours++;
		  }
		  else if (nowMins10 == 68)
		  {
		  	nowMins10 = 8;
			hours++;
		  }
		  else if (nowMins10 == 69)
		  {
		  	nowMins10 = 9;
			hours++;
		  }

		  	return (now.getMonth() + 1 == dropDate.month 
		  	      	&& now.getDate() == dropDate.date
		  	      	&& hours == dropDate.hours
		  	      	&& nowMins10 == dropDate.minutes
		 )};

		if (dropDateAlert())
		{
			alert("Your sneaker is dropping today!");
		}

		if(dropIn10())
		{
		  	alert("Your sneaker drops in less than 10 minutes!");
		}
		})


		$('#submit').click(function()
		{
			chrome.storage.sync.get(['theName','thePrice','theDate','theTime','m1'], function(data)
			{

				var sName = '';
				var sPrice = '';
				var sDate = '';
				var sTime = '';
				var sMonth = '';
				var sDay = '';

				sName = $('#name').val();
				sPrice = $('#price').val();
				sDate = $('#month').val() + '/' + $('#day').val();
				sTime = $('#time').val();
				sMonth = $('#month').val();
				sDay = $('#day').val();
				
				chrome.storage.sync.set({'theName': sName, 'thePrice': sPrice, 'theDate': sDate, 'theTime': sTime, 'm1': sMonth, 'd1': sDay});

				$('#theName').text(sName); //updates theName in html
				$('#name').val('');
				$('#thePrice').text(sPrice); //updates theName in html
				$('#price').val('');
				$('#theDate').text(sDate); //updates theName in html
				$('#date').val('');	
				$('#theTime').text(sTime); //updates theName in html
				$('#time').val('');
				$('m1').text(sMonth);		
				$('d1').text(sDay);	

				//Change PM to not 24 hours

			});
			
		});
		$('#submit2').click(function()
		{
			chrome.storage.sync.get(['theName2','thePrice2','theDate2','theTime2'], function(data)
			{

				var sName = '';
				var sPrice = '';
				var sDate = '';
				var sTime = '';

				sName = $('#name').val();
				sPrice = $('#price').val();
				sDate = $('#month').val() + '/' + $('#day').val();
				sTime = $('#time').val();
				
				chrome.storage.sync.set({'theName2': sName, 'thePrice2': sPrice, 'theDate2': sDate, 'theTime2': sTime});

				$('#theName2').text(sName); //updates theName in html
				$('#name').val('');
				$('#thePrice2').text(sPrice); //updates theName in html
				$('#price').val('');
				$('#theDate2').text(sDate); //updates theName in html
				$('#date').val('');	
				$('#theTime2').text(sTime); //updates theName in html
				$('#time').val('');			

			});
			
		});
		$('#submit3').click(function()
		{
			chrome.storage.sync.get(['theName3','thePrice3','theDate3','theTime3'], function(data)
			{

				var sName = '';
				var sPrice = '';
				var sDate = '';
				var sTime = '';

				sName = $('#name').val();
				sPrice = $('#price').val();
				sDate = $('#month').val() + '/' + $('#day').val();
				sTime = $('#time').val();
				
				chrome.storage.sync.set({'theName3': sName, 'thePrice3': sPrice, 'theDate3': sDate, 'theTime3': sTime});

				$('#theName3').text(sName); //updates theName in html
				$('#name').val('');
				$('#thePrice3').text(sPrice); //updates theName in html
				$('#price').val('');
				$('#theDate3').text(sDate); //updates theName in html
				$('#date').val('');	
				$('#theTime3').text(sTime); //updates theName in html
				$('#time').val('');			

			});
			
		});
		$('#submit4').click(function()
		{
			chrome.storage.sync.get(['theName4','thePrice4','theDate4','theTime4'], function(data)
			{

				var sName = '';
				var sPrice = '';
				var sDate = '';
				var sTime = '';

				sName = $('#name').val();
				sPrice = $('#price').val();
				sDate = $('#month').val() + '/' + $('#day').val();
				sTime = $('#time').val();
				
				chrome.storage.sync.set({'theName4': sName, 'thePrice4': sPrice, 'theDate4': sDate, 'theTime4': sTime});

				$('#theName4').text(sName); //updates theName in html
				$('#name').val('');
				$('#thePrice4').text(sPrice); //updates theName in html
				$('#price').val('');
				$('#theDate4').text(sDate); //updates theName in html
				$('#date').val('');	
				$('#theTime4').text(sTime); //updates theName in html
				$('#time').val('');			

			});
			
		});
		$('#submit5').click(function()
		{
			chrome.storage.sync.get(['theName5','thePrice5','theDate5','theTime5'], function(data)
			{

				var sName = '';
				var sPrice = '';
				var sDate = '';
				var sTime = '';

				sName = $('#name').val();
				sPrice = $('#price').val();
				sDate = $('#month').val() + '/' + $('#day').val();
				sTime = $('#time').val();
				
				chrome.storage.sync.set({'theName5': sName, 'thePrice5': sPrice, 'theDate5': sDate, 'theTime5': sTime});

				$('#theName5').text(sName); //updates theName in html
				$('#name').val('');
				$('#thePrice5').text(sPrice); //updates theName in html
				$('#price').val('');
				$('#theDate5').text(sDate); //updates theName in html
				$('#date').val('');	
				$('#theTime5').text(sTime); //updates theName in html
				$('#time').val('');			

			});
			
		});
		$('#submit6').click(function()
		{
			chrome.storage.sync.get(['theName6','thePrice6','theDate6','theTime6'], function(data)
			{

				var sName = '';
				var sPrice = '';
				var sDate = '';
				var sTime = '';

				sName = $('#name').val();
				sPrice = $('#price').val();
				sDate = $('#month').val() + '/' + $('#day').val();
				sTime = $('#time').val();
				
				chrome.storage.sync.set({'theName6': sName, 'thePrice6': sPrice, 'theDate6': sDate, 'theTime6': sTime});

				$('#theName6').text(sName); //updates theName in html
				$('#name').val('');
				$('#thePrice6').text(sPrice); //updates theName in html
				$('#price').val('');
				$('#theDate6').text(sDate); //updates theName in html
				$('#date').val('');	
				$('#theTime6').text(sTime); //updates theName in html
				$('#time').val('');			

			});
			
		});		

		$('#clear').click(function()
		{

					//inputs data in output from HTML
					$('#theName').text('');
					$('#thePrice').text('');
					$('#theDate').text('');
					$('#theTime').text('');

					$('#theName2').text('');
					$('#thePrice2').text('');
					$('#theDate2').text('');
					$('#theTime2').text('');

					$('#theName3').text('');
					$('#thePrice3').text('');
					$('#theDate3').text('');
					$('#theTime3').text('');

					$('#theName4').text('');
					$('#thePrice4').text('');
					$('#theDate4').text('');
					$('#theTime4').text('');	

					$('#theName5').text('');
					$('#thePrice5').text('');
					$('#theDate5').text('');
					$('#theTime5').text('');

					$('#theName6').text('');
					$('#thePrice6').text('');
					$('#theDate6').text('');
					$('#theTime6').text('');	



					chrome.storage.sync.set({'theName': '','thePrice': '','theDate': '','theTime': '',
									 		 'theName2': '','thePrice2': '','theDate2': '','theTime2': '',
									 		 'theName3': '','thePrice3': '','theDate3': '','theTime3': '',
											 'theName4': '','thePrice4': '','theDate4': '','theTime4': '',
									 		 'theName5': '','thePrice5': '','theDate5': '','theTime5': '',
									 		 'theName6': '','thePrice6': '','theDate6': '','theTime6': ''});

		
				})

	});


		



		



