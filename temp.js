complete: function() {

			var str = ''
			$.each(categories, function(i, cat) {
				str += '<div id="collapsible"><h3>' + cat.name + '</h3><div id="content"><table><tr>'
				str += '<th>Name</th>'
				str += (cat.size1) ? '<th>' + cat.size1 + '</th>' : ''
				str += (cat.size2) ? '<th>' + cat.size2 + '</th>' : ''
				str += (cat.size3) ? '<th>' + cat.size3 + '</th>' : ''
				str += (cat.size4) ? '<th>' + cat.size4 + '</th>' : ''
				str += (cat.size5) ? '<th>' + cat.size5 + '</th>' : ''
				str += '</tr>'

				$.each(menu, function(j, item) {
					if (item.category != cat.name)
						continue
					str += '<tr><td>' + item.name + '</td>'
					str += (item.price1) ? '<td>' + item.price1 + '</td>' : ''
					str += (item.price2) ? '<td>' + item.price2 + '</td>' : ''
					str += (item.price3) ? '<td>' + item.price3 + '</td>' : ''
					str += (item.price4) ? '<td>' + item.price4 + '</td>' : ''
					str += (item.price5) ? '<td>' + item.price5 + '</td>' : ''
					str += '</tr>'
				})
				str += '</table></div></div>'

				output.append(str)
			})
		}