export class MainController {
	constructor($state) {
		'ngInject';

		var vm = this;

		vm.projectName = '偶可贝';
		vm.currentUser = 'Admin';
		vm.$state = $state;
		// By default Sidbars are hidden in boxed layout and in wide layout only the right sidebar is hidden.
		vm.sidebarToggle = {
			left: false,
			right: false
		};
	}

	// 展开当前路由对应的菜单
	sidebarStat(event) {
		if (!angular.element(event.target).parent().hasClass('active')) {
			this.sidebarToggle.left = false;
		}
	}
}
