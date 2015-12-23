export function FgLineDirective() {
	'ngInject';

	let directive = {
		restrict: 'C',
		link: linkFunc
	};

	return directive;

	function linkFunc() {
		if (angular.element('.fg-line')[0]) {
			angular.element('body').on('focus', '.form-control', (e) => {
				angular.element(e.target).closest('.fg-line').addClass('fg-toggled');
			});

			angular.element('body').on('blur', '.form-control', (e) => {
				let p = angular.element(e.target).closest('.form-group');
				let i = p.find('.form-control').val();

				if (p.hasClass('fg-float')) {
					if (i.length === 0) {
						angular.element(e.target).closest('.fg-line').removeClass('fg-toggled');
					}
				} else {
					angular.element(e.target).closest('.fg-line').removeClass('fg-toggled');
				}
			})
		}
	}
}