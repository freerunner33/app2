
var categories = [
	//{name: 'Drinks', size1: '12oz.', size2: '16oz', size3: '20oz.', size4: '24oz.', size5: null}
]

var menu = [
	//{name: 'Strawberry Smoothie', category: 'Drinks', price1: 2.59, price2: 3.29, price3: 3.99, price4: 4.69, price5: null}
]

document.addEventListener('deviceready', function() {
	alert("Hacking...")
	var output = $('#output')
	var category = ''

	$.ajax({
		url: 'http://noahthomas.us/USD/menu_1.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 0,
		success: function(data, status) {
			$.each(data[1], function(i, item) { 	// assigns data[1][i] to item
				categories.push({
					name: item.name,  
					size1: item.size1, 
					size2: item.size2, 
					size3: item.size3, 
					size4: item.size4, 
					size5: item.size5
				})
			})

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
			})
		},
		error: function() {
			output.text('There was an error loading the data. Please connect your device to an ' + 
				'internet connection for up-to-date dining information.')
		},
		complete: function() {
			output.append('<hr><h1>Menu Categories</h1>')

			// $.each(categories, function(i, cat) {
			// 	var categoryitem = '<hr><h2>' + cat.name + '</h2><p>'
			// 		categoryitem += (cat.size1) ? cat.size1 + '<br>' : ''
			// 		categoryitem += (cat.size2) ? cat.size2 + '<br>' : ''
			// 		categoryitem += (cat.size3) ? cat.size3 + '<br>' : ''
			// 		categoryitem += (cat.size4) ? cat.size4 + '<br>' : ''
			// 		categoryitem += (cat.size5) ? cat.size5 : ''
			// 		categoryitem += '</p>'

			// 		output.append(categoryitem)
			// })
			
			// output.append('<hr><h1>Menu Items</h1>')

			// $.each(menu, function(i, item) { 	// assigns menu[i] to item
				
			// 	var menuitem = ''
			// 	if (category != item.category) {	// if new category then label it
			// 		category = item.category
			// 		menuitem += '<hr><h1>' + category + '</h1>'
			// 	}
			// 	menuitem += '<h3>' + item.name + '</h3><p>'
			// 	menuitem += (item.price1) ? item.price1 + '<br>' : ''
			// 	menuitem += (item.price2) ? item.price2 + '<br>' : ''
			// 	menuitem += (item.price3) ? item.price3 + '<br>' : ''
			// 	menuitem += (item.price4) ? item.price4 + '<br>' : ''
			// 	menuitem += (item.price5) ? item.price5 : ''
			// 	menuitem += '</p>'

			// 	output.append(menuitem)
			// })
			str = '<h4>FAIL</h4>'
			$.each(categories, function(i, cat) {
				// var str = '<div id="collapsible"><h3>' + cat.name + '</h3><div id="content"><table><tr>'
				// str += '<th>Name</th>'
				// str += (cat.size1) ? '<th>' + cat.size1 + '</th>' : ''
				// str += (cat.size2) ? '<th>' + cat.size2 + '</th>' : ''
				// str += (cat.size3) ? '<th>' + cat.size3 + '</th>' : ''
				// str += (cat.size4) ? '<th>' + cat.size4 + '</th>' : ''
				// str += (cat.size5) ? '<th>' + cat.size5 + '</th>' : ''
				// str += '</tr>'

				// $.each(menu, function(j, item) {
				// 	if (item.category != cat.name)
				// 		continue
				// 	str += '<tr><td>' + item.name + '</td>'
				// 	str += (item.price1) ? '<td>' + item.price1 + '</td>' : ''
				// 	str += (item.price2) ? '<td>' + item.price2 + '</td>' : ''
				// 	str += (item.price3) ? '<td>' + item.price3 + '</td>' : ''
				// 	str += (item.price4) ? '<td>' + item.price4 + '</td>' : ''
				// 	str += (item.price5) ? '<td>' + item.price5 + '</td>' : ''
				// 	str += '</tr>'
				// })
				// str += '</table></div></div>'

				output.append(str)
			})

		}
	})
}, false)
