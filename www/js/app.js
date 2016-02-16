// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', "firebase"])

.controller('listController', function($scope, $firebaseArray) {
    var ref = new Firebase('https://todosourabh.firebaseio.com/messages');



    $scope.items = [];
    $scope.things = $firebaseArray(ref)
    var messages = $firebaseArray(ref);


    $scope.addItem = function() {

        var name = prompt("What do you need to buy?");
        if (name) {
            $scope.items.push({ 'name': name });
            console.log(messages);
            messages.$add({ item: name }).then(function(ref) {

            });
        }



    };


})

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})