
var categories = [
	//{name: 'Drinks', size1: '12oz.', size2: '16oz', size3: '20oz.', size4: '24oz.', size5: null}
]

var menu = [
	//{name: 'Strawberry Smoothie', category: 'Drinks', price1: 2.59, price2: 3.29, price3: 3.99, price4: 4.69, price5: null}
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
			
			output.append('<hr><h1>Menu Categories</h1>')

			// $.each(data[1], function(i, item) { 	// assigns data[1][i] to item
			// 	categories.push({
			// 		name: item.name,  
			// 		size1: item.size1, 
			// 		size2: item.size2, 
			// 		size3: item.size3, 
			// 		size4: item.size4, 
			// 		size5: item.size5
			// 	})

			// 	var menuitem += '<hr><h3>' + item.name + '</h3>'
			// 	menuitem += (item.size1) ? item.size1 + '<br>' : ''
			// 	menuitem += (item.size2) ? item.size2 + '<br>' : ''
			// 	menuitem += (item.size3) ? item.size3 + '<br>' : ''
			// 	menuitem += (item.size4) ? item.size4 + '<br>' : ''
			// 	menuitem += (item.size5) ? item.size5 : ''
			// 	menuitem += '</p>'

			// 	output.append(menuitem)
			// })

			output.append('<hr><h1>Menu Items</h1>')

			$.each(data[0], function(i, item) { 	// assigns data[0][i] to item
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
					menuitem += '<hr><h2>' + category + '</h2>'
				}
				menuitem += '<h4>' + item.name + '</h4><p>'
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

			$.each(menu, function(i, item) { 	// assigns menu[i] to item
				
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
		}
	})

	$("h3").html("HELLO ALIENS")
}, false)
