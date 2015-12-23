export class QueryFigureService {
	constructor($http, toastr) {
		'ngInject';

		this.toastr = toastr;
		this.$http = $http;
		this.serchApi = '/ajax/search/person';
	}

	/**
	 * 查询，默认为 {}
	 */
	search(params = {}) {
		return this.$http({
				method: 'GET',
				url: '/ajax/search/person',
				params: params
			})
			.then((response) => {
				let data = response.data;
				// TEST 这里为了测试，返回虚拟的数据
				return this.mockData();

				if (data.status === 200 && data.data !== null) {
					return data.data;
				}

				if (data.data === null) {
					this.toastr.info('没有数据');
					return;
				}

				this.toastr.error(data.message);
			})
			.catch((err) => {
				this.toastr.error('XHR Failed for searchPerson.' + err.data);
			});
	}

	mockData() {
		var response = {
			page: 1,
			size: 20,
			count: 10,
			total: 100,
			data: [{
				personId: '000',
				personDepartment: '俱乐部1',
				content: 'blablabla'
			}, {
				personId: '0002',
				personDepartment: '俱乐部2',
				content: 'blablabla'
			}, {
				personId: '0003',
				personDepartment: '俱乐部3',
				content: 'blablabla'
			}, {
				personId: '0004',
				personDepartment: '俱乐部4',
				content: 'blablabla'
			}, {
				personId: '0005',
				personDepartment: '俱乐部5',
				content: 'blablabla'
			}, {
				personId: '0006',
				personDepartment: '俱乐部6',
				content: 'blablabla'
			}, {
				personId: '0007',
				personDepartment: '俱乐部7',
				content: 'blablabla'
			}, {
				personId: '0008',
				personDepartment: '俱乐部8',
				content: 'blablabla'
			}, {
				personId: '0009',
				personDepartment: '俱乐部9',
				content: 'blablabla'
			}, {
				personId: '00010',
				personDepartment: '俱乐部10',
				content: 'blablabla'
			}]
		};
		return response;
	}
}
