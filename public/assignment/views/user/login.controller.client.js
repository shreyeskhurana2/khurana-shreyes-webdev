(function(){
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService) {
        var vm = this;
        vm.login = login;

        function login(username, password) {
            var user = UserService.findUserByCredentials(username, password);

            if(user === null) {
                vm.error = "Username or Password is incorrect";
            } else {
                $location.url("/user/" + user._id);
            }
        }
    }
})();