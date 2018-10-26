// var app = angular.module('testApp', []);
//
// app.controller('carsCtrl', function($scope) {
//     $scope.cars = [
// 		{"marque":"Renault", "couleur":"verte"},
// 		{"marque":"Citroen", "couleur":"grise"},
// 		{"marque":"Opel", "couleur":"or"},
// 		{"marque":"Ferrari", "couleur":"rouge"},
// 		{"marque":"Peugeot", "couleur":"bleu"},
// 		{"marque":"Nissan", "couleur":"verte"}
//   ];
// });
// JSON: JavaScript Object Notation.
// JSON est un format de stockage et de transport de données.
// JSON est souvent utilisé lorsque des données sont envoyées d'un serveur à une page Web.

var app = angular.module('test', []);

app.controller('carsCtrl', function($scope, $http){
  $http.get('voiture.json').then(function(respons){
  $scope.cars = respons.data;
});

});
