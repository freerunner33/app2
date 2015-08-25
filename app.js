document.addEventListener('deviceready', function() {
	alert("Document is ready")
	var output = $('#output')

	$.ajax({
		url: 'http://noahthomas.us/pg/landmarks.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status) {
			$.each(data, function(i, item) {
				var landmark = '<h1>' + item.name + '</h1>'
				+ '<p>' + item.latitude + '<br>'
				+ item.longitude + '</p>'

				output.append(landmark)
			})
		},
		error: function() {
			output.text('There was an error loading the data.')
		}
	})

	$('#output').html("<p>Hi this is a lovely paragraph testing if the app is even working</p>")
	$("h3").html("HELLO ALIENS")
}, false)



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