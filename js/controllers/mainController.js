// MAIN CONTROLLER
function mainController($scope) {

    $scope.create = (info) => {
        $scope.infos.push(info);
        $scope.info = {};

    };

    $scope.infos = [{
        nom: "",
        prenom: "",
        email: ""
    }];



}
