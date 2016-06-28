//angularjs source file
var app = angular.module('app', []);
app.controller('mycontroller', function() {
    
	var vm = this;
	
	vm.subTotal = function(){
		return vm.mealPrice;
	};
    
});