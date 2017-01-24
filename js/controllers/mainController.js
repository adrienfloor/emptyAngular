// MAIN CONTROLLER
function mainController($scope) {

  $scope.infos = [{
      nom: "",
      prenom: "",
      email: ""
  }];
  $scope.info = {};

    $scope.create = (info) => {
        $scope.infos.push(info);
        $scope.info = {};

    };
}
