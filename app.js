// $(function(){
//  $('.toggle-nav').click(function(){
//    toggleNav(); 
//  });
//  $(document).keyup(function(e) {
//     if (e.keyCode == 27) {
//         if ($('#site-wrapper').hasClass('show-nav')) {
//             // Assuming you used the function I made from the demo
//             toggleNav();
//         }
//     } 
// });
// });

// function toggleNav() {
//     if ($('#site-wrapper').hasClass('show-nav')) {
//         // Do things on Nav Close
//         $('#site-wrapper').removeClass('show-nav');
//     } else {
//         // Do things on Nav Open
//         $('#site-wrapper').addClass('show-nav');
//     }

//     //$('#site-wrapper').toggleClass('show-nav');
// }

var app = angular.module('app', ['ngAnimate']); 

app.controller('MainCtrl', ['$scope', function($scope) {
  $scope.lib = $scope.show =false;
  $scope.toggleShow = function(){
  	$scope.show = !$scope.show
  };

  $scope.toggleLib = function(){
  	$scope.lib = !$scope.lib; 

  };
}]);