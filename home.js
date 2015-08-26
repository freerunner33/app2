
var categories = [
	{'Drinks', '12oz.', '16oz', '20oz.', '24oz.'},
	{'Food', 'Small', 'Medium', 'Large'}
]

var menu = [
	{name: 'Strawberry Smoothie', category: 'Drinks', price1: 2.59, price2: 3.29, price3: 3.99, price4: 4.69, price5: null},
	{name: 'Hot Chocolate', category: 'Drinks', price1: 1.99, price2: 2.49, price3: 2.99, price4: 3.49, price5: null},
	{name: 'Caramel Macchiatto', category: 'Drinks', price1: 2.29, price2: 2.79, price3: 3.29, price4: 3.79, price5: null},
	{name: 'Turkey Sandwich', category: 'Food', price1: 4.99, price2: 5.99, price3: 6.99, price4: null, price5: null},
	{name: 'Meatball Sub', category: 'Food', price1: 5.49, price2: 6.49, price3: 7.49, price4: null, price5: null}
]

document.addEventListener('deviceready', function() {
	alert("Your mom")
	var output = $('#output')
	var category = ''

	$.ajax({
		url: 'http://noahthomas.us/USD/menu_1.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 0,
		success: function(data, status) {

			$.each(data, function(i, item) { 	// assigns data[i] to item
				menu.push({
					name: item.name, 
					category: item.category, 
					price1: item.price1, 
					price2: item.price2, 
					price3: item.price3, 
					price4: item.price4, 
					price5: item.price5
				})
				
				var menuitem = ''
				if (category != item.category) {	// if new category then label it
					category = item.category
					menuitem += '<hr><h1>' + category + '</h1>'
				}
				menuitem += '<h3>' + item.name + '</h3><p>'
				menuitem += (item.price1) ? item.price1 + '<br>' : ''
				menuitem += (item.price2) ? item.price2 + '<br>' : ''
				menuitem += (item.price3) ? item.price3 + '<br>' : ''
				menuitem += (item.price4) ? item.price4 + '<br>' : ''
				menuitem += (item.price5) ? item.price5 : ''
				menuitem += '</p>'

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