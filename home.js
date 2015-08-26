
var categories = [
	"Food",
	"Drinks",
	"Desserts"
]

var menu = [
	{
		category: 'Food',
		size1: 'Small',
		size2: 'Medium',
		size3: 'Large',
		size4: null,
		size5: null,
		items: [
			{
				name: 'Turkey Sandwich',
				price1: 3.49,
				price2: 4.49,
				price3: 5.49,
				price4: null,
				price5: null
			},
			{
				name: 'Fettuccine Alfredo',
				price1: 6.99,
				price2: 7.99,
				price3: 8.99,
				price4: null,
				price5: null
			}
		]
	},
	{
		category: 'Drinks',
		size1: '12oz.',
		size2: '16oz.',
		size3: '20oz.',
		size4: '24oz.',
		size5: '32oz.',
		items: [
			{
				name: 'Strawberry Smoothie',
				price1: 1.99,
				price2: 2.49,
				price3: 2.99,
				price4: 3.49,
				price5: 3.99
			},
			{
				name: 'Super Coffee',
				price1: 2.29,
				price2: 2.79,
				price3: 3.29,
				price4: 3.79,
				price5: 4.29
			}
		]
	}
]

document.addEventListener('deviceready', function() {
	alert("Your mom")
	var output = $('#output')

	$.ajax({
		url: 'http://noahthomas.us/USD/menu.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 0,
		success: function(data, status) {

			$.each(data, function(i, item) {
				var menuitem = '<h1>' + item.name + '</h1>'
				+ '<h3>' + data[0] + item.category + '</h3>'
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