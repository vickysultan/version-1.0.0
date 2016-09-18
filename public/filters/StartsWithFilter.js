angular.module("my-app").filter("StartsWithFilter",function(){
	return function(list, inputField){
			var filteredList = [];
				inputField = inputField.toLowerCase();
					list.forEach(function(item){
						var itemToPush = item;
						item = item.toLowerCase();
						if(item.indexOf(inputField) === 0){
							filteredList.push(itemToPush);
							}
					});
			return filteredList;
	}
})