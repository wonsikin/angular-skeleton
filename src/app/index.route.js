export function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/views/dashboard/dashboard.html'
		})
		//------------------------------
		// FIGURE 人物信息管理
		//------------------------------
		.state('figure', {
			url: '/figure',
			templateUrl: 'app/views/common.html'
		})
		.state('figure.new', {
			url: '/new',
			templateUrl: 'app/views/figure/new/newFigure.html',
			controller: 'NewFigureController',
			controllerAs: 'nf'
		})
		.state('figure.new.basic', {
			url: '/basic',
			views: {
				"viewA": {
					templateUrl: 'app/views/figure/new/navigator.html'
				},
				"viewB": {
					templateUrl: 'app/views/figure/new/basic.html'
				}
			}
			// templateUrl: 'app/views/figure/new/basic.html'
			// controller: 'NewFigureBasicController',
			// controllerAs: 'nfb'
		})
		.state('figure.new.contact', {
			url: '/contact',
			views: {
				"viewA": {
					templateUrl: 'app/views/figure/new/navigator.html'
				},
				"viewB": {
					templateUrl: 'app/views/figure/new/contact.html'
				}
			}
		})
		.state('figure.list', {
			url: '/figures',
			templateUrl: 'app/views/figure/query/queryFigure.html',
			controller: 'QueryFigureController',
			controllerAs: 'qf'
		})
		//------------------------------
		// GROUP 社团信息管理
		//------------------------------
		.state('group', {
			url: '/group',
			templateUrl: 'app/views/common.html'
		})
		.state('group.new', {
			url: '/group/new',
			templateUrl: 'app/views/group/new/newGroup.html',
			controller: 'newGroupController',
			controllerAs: 'ng'
		})
		.state('group.list', {
			url: '/groups',
			templateUrl: 'app/views/group/query/queryGroup.html',
			controller: 'queryGroupController',
			controllerAs: 'qg'
		})
		//------------------------------
		// ACTIVITY 活动信息管理
		//------------------------------
		.state('activity', {
			url: '/activity',
			templateUrl: 'app/views/common.html'
		})
		.state('activity.new', {
			url: '/activity/new',
			templateUrl: 'app/views/activity/new/newActivity.html',
			controller: 'newActivityController',
			controllerAs: 'nf'
		})
		.state('activity.list', {
			url: '/activities',
			templateUrl: 'app/views/activity/query/queryActivity.html',
			controller: 'queryActivityController',
			controllerAs: 'qf'
		})
		//------------------------------
		// system 系统管理
		//------------------------------
		.state('system', {
			url: '/system',
			templateUrl: 'app/views/common.html'
		})
		.state('system.authority', {
			url: '/authority',
			templateUrl: 'app/views/system/authority/authority.html',
			controller: 'authoritySysController',
			controllerAs: 'asc'
		})
		.state('system.basic', {
			url: '/basic',
			templateUrl: 'app/views/system/basic/basic.html',
			controller: 'basicSysController',
			controllerAs: 'bsc'
		})
		.state('system.access', {
			url: '/access',
			templateUrl: 'app/views/system/access/access.html',
			controller: 'accessSysController',
			controllerAs: 'acc'
		})
		.state('system.modificationLog', {
			url: '/log/modification',
			templateUrl: 'app/views/system/modificationLog/modificationLog.html',
			controller: 'modificationLogController',
			controllerAs: 'mlc'
		})
		.state('system.userLog', {
			url: '/log/user',
			templateUrl: 'app/views/system/userLog/userLog.html',
			controller: 'userLogController',
			controllerAs: 'ulc'
		});


	$urlRouterProvider.otherwise('/');
}
