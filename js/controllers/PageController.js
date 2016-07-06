angular.module('boilerplateApp.controllers')
.controller('PageController', PageCtrl);

//PageCtrl.$inject = ['$scope'];

function PageCtrl(/*$scope*/) {
  console.log("Page Controller reporting for duty.");

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })    
}