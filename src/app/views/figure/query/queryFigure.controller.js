export class QueryFigureController {
	constructor(queryFigureService, ngTableParams) {
		'ngInject';

		// this.list = [{
		// 	personId: '0001',
		// 	personDepartment: '俱乐部1',
		// 	content: 'blablabla'
		// }, {
		// 	personId: '0002',
		// 	personDepartment: '俱乐部2',
		// 	content: 'blablabla'
		// }, {
		// 	personId: '0003',
		// 	personDepartment: '俱乐部3',
		// 	content: 'blablabla'
		// }, {
		// 	personId: '0004',
		// 	personDepartment: '俱乐部4',
		// 	content: 'blablabla'
		// }, {
		// 	personId: '0005',
		// 	personDepartment: '俱乐部5',
		// 	content: 'blablabla'
		// }, {
		// 	personId: '0006',
		// 	personDepartment: '俱乐部6',
		// 	content: 'blablabla'
		// }, {
		// 	personId: '0007',
		// 	personDepartment: '俱乐部7',
		// 	content: 'blablabla'
		// }, {
		// 	personId: '0008',
		// 	personDepartment: '俱乐部8',
		// 	content: 'blablabla'
		// }, {
		// 	personId: '0009',
		// 	personDepartment: '俱乐部9',
		// 	content: 'blablabla'
		// }, {
		// 	personId: '00010',
		// 	personDepartment: '俱乐部10',
		// 	content: 'blablabla'
		// }, {
		// 	personId: '00011',
		// 	personDepartment: '俱乐部11',
		// 	content: 'blablabla'
		// }, {
		// 	personId: '00012',
		// 	personDepartment: '俱乐部12',
		// 	content: 'blablabla'
		// }, {
		// 	personId: '00013',
		// 	personDepartment: '俱乐部13',
		// 	content: 'blablabla'
		// }];
		//
		// vm : viewModel
		let vm = this;
		vm.cond = {};

		vm.sfService = queryFigureService;
		vm.ngTableParams = ngTableParams;

		vm.activate();
		vm.tableBasic = new ngTableParams({
			page: 2, // show first page
			count: 20 // count per page
		}, {
			total: 0, // length of data
			getData: ($defer, params) => {
				this.sfService.search(this.cond)
					.then((data) => {
						if (!data) {
							return;
						}
						let total = data.total;
						params.total(total);

						if (total === 0) {
							$defer.resolve([])
							return;
						}

						$defer.resolve(data.data);
					});
			}
		})
	}

	activate() {
		// this.sendQueryRequest();
	}

	sendQueryRequest() {
		this.tableBasic.page(1);
		this.tableBasic.reload();
	}
}
