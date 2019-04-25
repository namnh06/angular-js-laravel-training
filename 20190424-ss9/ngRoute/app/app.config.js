app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      // template: '<h1>Hello World</h1>'
      templateUrl: 'app/main/main.html',
    })
    .when('/a', {
      template: '<h1>A tempalte</h1>'
    })
    .when('/b', {
      template: '<h1>B tempalte</h1>'
    });
});