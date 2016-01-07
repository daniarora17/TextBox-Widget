app.directive('textBox', function(textBoxWidgetService){
	return{
		restrict: 'E',
		scope: {},
		require: 'ngModel',
		templateUrl: 'view/template/template-load.html',
		link: function ($scope, $element, $attr, ngModelCtrl) {

			var getTag = angular.element(document.querySelectorAll('.clickClass')[0]),
			    optionTag = angular.element(document.querySelectorAll('.wysiwyg-toolbar-icon')[0]),
			    textBox = angular.element($element[0].querySelector('.textbox-editor'));

			wysiwygeditor = wysiwyg({
			    element: $element[0].querySelector('.textbox-editor'),
			    hijackContextmenu: true
			});
			
			ngModelCtrl.$render = function() {				
				
				textBox.html(ngModelCtrl.$viewValue || '');
			};

			//Event Binding goes here
			getTag.on('click', function(e){
				
				if (e.target.className.indexOf('wysiwyg-toolbar-icon') > -1) {

					textBoxWidgetService.callClick(e.target.name);
					
				}
				e.preventDefault();
			});

			optionTag.on('change', function(e){

				if (e.target.className === 'text-dropdown') {

					textBoxWidgetService.callClick(e.target.name, textBoxWidgetService.fontSelect(e.target.value));

				};
			});

			textBox.on('keyup change blur', function(){
				ngModelCtrl.$setViewValue(textBox.html());
			});
		    	
		}
	};
});