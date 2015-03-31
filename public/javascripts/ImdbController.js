/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
if (!AppControllers) {
    var AppControllers = {};
}
AppControllers.ImdbOnlineController = function ($scope, $http) {
    $http.get('list').success(function (data) {
        $scope.data = data.data;
    });
};
