(function(){
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService($http) {
        var api = {
            login: login,
            checkLogin: checkLogin,
            checkAdmin: checkAdmin,
            logout: logout,
            findUsername : findUsername,
            findUserByCredentials : findUserByCredentials,
            createUser : createUser,
            findUserById : findUserById,
            findCurrentUser : findCurrentUser,
            updateUser : updateUser,
            unregisterUser : unregisterUser
        };
        return api;

        function checkLogin() {
            return $http.post("/api/checkLogin");
        }

        function checkAdmin() {
            return $http.post("/api/checkAdmin");
        }

        function login(username, password) {
            var user = {
                username: username,
                password: password
            };

            return $http.post("/api/login", user);
        }

        function logout() {
            return $http.post("/api/logout");
        }

        function findCurrentUser() {
            var url = "/api/user";
            return $http.get(url);
        }

        function findUsername(username) {
            var url = '/api/user?username=' + username;
            return $http.get(url);
        }

        function findUserByCredentials(username, password) {
            var url = '/api/user?username=' + username + '&password=' + password;
            return $http.get(url);
        }

        function createUser(newUser) {
            var url = '/api/user/';
            return $http.post(url, newUser);
        }

        function findUserById(uid) {
            var url = '/api/user/' + uid;
            return $http.get(url);
        }

        function updateUser(user, uid) {
            var url = '/api/user/' + uid;
            $http.put(url, user);
        }

        function unregisterUser(uid) {
            var url = '/api/user/' + uid;
            return $http.delete(url);
        }
    }
})();