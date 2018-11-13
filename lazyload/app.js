angular.module('mainApp', ['ui.router', 'oc.lazyLoad'])
	.config(function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('product', {
				url: '/product',
				templateUrl: 'views/product.html',
				controller: 'ProductCtrl',
				resolve: {
					loadProduct: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load('./js/product.js');
					}]
				}
			})
			.state('about', {
				url: '/about',
				templateUrl: 'views/about.html',
				controller: 'aboutCtrl',
				resolve: {
					loadProduct: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load('./js/about.js');
					}]
				}
			})
			.state('other', {
				url: '/other',
				templateUrl: 'views/other/other.php',
				controller: 'otherCtrl',
				resolve: {
					loadProduct: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load(['./views/other/other.js', './views/other/other.css']);
					}]
				}
			})
			.state('test', {
				url: '/test?id&number',
				templateUrl: 'views/test/test.html',
				controller: 'testCtrl',
				resolve: {
					loadProduct: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load(['./views/test/test.js']);
					}]
				}
			})
			.state('test.tab1', {
				url: '/tab1',
				templateUrl: 'views/test/tab1.html',
				//      controller: 'testCtrl',
				//      resolve: {
				//        loadProduct: ['$ocLazyLoad', function($ocLazyLoad) {
				//          return $ocLazyLoad.load(['./views/test/test.js']);
				//        }]
				//      }
			})
			.state('test.tab2', {
				url: '/tab2',
				templateUrl: 'views/test/tab2.html',
			})
			.state('test.tab3', {
				url: '/tab3',
				templateUrl: 'views/test/tab3.html',
			})
			.state('home', {
				url: '/home',
				template: '<div>This is the home page</div>'
			});
	});
