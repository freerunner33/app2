
document.addEventListener('deviceready', function() {
	alert("Your mom")
	var output = $('#output')

	$.ajax({
		url: 'http://noahthomas.us/USD/menu.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 1000,
		success: function(data, status) {
			$.each(data, function(i, item) {
				var menuitem = '<h1>' + item.name + '</h1>'
				+ '<h3>' + item.category + '</h3>'
				+ '<p>Price1: ' + item.price1 + '<br>'
				+ 'Price2: ' + item.price2 + '<br>' 
				+ 'Price3: ' + item.price3 + '<br>'
				+ 'Price4: ' + item.price4 + '<br>'
				+ 'Price5: ' + item.price5 + '</p>'

				output.append(menuitem)
			})
		},
		error: function() {
			output.text('There was an error loading the data.')
		}
	})

	$('#output').html("<p>Hi this is a lovely paragraph testing if the app is even working</p>")
	$("h3").html("HELLO ALIENS")
}, false)

// document.addEventListener('deviceready', function() {
// 	alert("You look funny")
// 	var output = $('#output')

// 	$.ajax({
// 		url: 'http://noahthomas.us/pg/landmarks.php',
// 		dataType: 'jsonp',
// 		jsonp: 'jsoncallback',
// 		timeout: 5000,
// 		success: function(data, status) {
// 			$.each(data, function(i, item) {
// 				var landmark = '<h1>' + item.name + '</h1>'
// 				+ '<p>' + item.latitude + '<br>'
// 				+ item.longitude + '</p>'

// 				output.append(landmark)
// 			})
// 		},
// 		error: function() {
// 			output.text('There was an error loading the data.')
// 		}
// 	})

// 	$('#output').html("<p>Hi this is a lovely paragraph testing if the app is even working</p>")
// 	$("h3").html("HELLO ALIENS")
// }, false)



// $(document).ready(function() {
// 	alert("Document is ready")
// 	var output = $('div#output')

// 	$.ajax({
// 		url: 'http://noahthomas.us/pg/landmarks.php',
// 		dataType: 'jsonp',
// 		jsonp: 'jsoncallback',
// 		timeout: 0,
// 		success: function(data, status) {
// 			$.each(data, function(i, item) {
// 				var landmark = '<h1>' + item.name + '</h1>'
// 				+ '<p>' + item.latitude + '<br>'
// 				+ item.longitude + '</p>'

// 				output.append(landmark)
// 			})
// 		},
// 		error: function() {
// 			output.text('There was an error loading the data.')
// 		}
// 	})

// 	$('#output').html("<p>Hi this is a lovely paragraph testing if the app is even working</p>")
// 	$("h3").html("HELLO ALIENS")
// })