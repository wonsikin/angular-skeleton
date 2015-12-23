export function ToggleSubmenuDirective() {
	'ngInject';

	let directive = {
		restrict: 'A',
		link: linkFunc
	};

	return directive;

	function linkFunc(scope, element) {
		element.click(() => {
			let parent = element.parent();
			let brothers = parent.siblings();

			for (var br of Array.from(brothers)) {
				let item = angular.element(br);
				if (item.hasClass('toggled')) {
					item.removeClass('toggled');
					item.find('ul').stop(true, false).slideToggle(200);
				}
				item = null;
			}

			parent.toggleClass('toggled');
			parent.find('ul').stop(true, false).slideToggle(200);
			parent = null;
			brothers = null;
		});
	}
}
