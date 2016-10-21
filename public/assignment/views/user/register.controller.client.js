(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;
        vm.register = register;

        function register(newUser) {
            vm.error = null;
            vm.error2 = null;
            vm.error3 = null;


            var user = UserService.findUsername(newUser.username);

            if (newUser.password != newUser.password2) {
                vm.error2 = "Passwords don't match!";
            }
            else if (user != null) {
                vm.error = "Username already exists!";
            }
            else {
                newUser._id = ((new Date()).getTime() % 1000).toString();
                UserService.addUser(newUser);
                $location.url("/user/" + newUser._id);
            }
        }
    }
})();