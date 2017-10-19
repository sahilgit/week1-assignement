(function (){
  'use strict';

  angular.module('DishesCheckApp',[])
  .controller('DishesAppController',DishesAppController);

  DishesAppController.$inject=['$scope'];

  function DishesAppController($scope){


       $scope.message = "";


  $scope.check=function (){
    var items=$scope.lunchMenu;


    if(items === undefined){ $scope.message="Please enter data first";$scope.classDes="text-danger"}


    else{
    items=items.split(',');

    var ItemsCount = getItemsCount(items);

    if (ItemsCount == 0) {
          $scope.message = "Please enter data first";$scope.classDes="text-danger";
      } else if (ItemsCount <= 3) {
              $scope.message = "Enjoy!";$scope.classDes="text-success";
        } else {
              $scope.message = "Too much!";$scope.classDes="text-danger";
              }

  }


};



};

function getItemsCount(Items) {
          var ItemsCount = 0;
          for (var j = 0; j < Items.length; j++) {
              if (Items[j].trim() !== "") {
                  ItemsCount += 1;
              }
          }
          return ItemsCount;
      }
})();
