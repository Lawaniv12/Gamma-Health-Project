//Login Script //
var loginForm= new Vue({
    el: "#pslogin",
    el: "#adminlogin",
    data: {
    email: "",
    password: "",
    },
    methods: {
        onSubmit: function() {
        // check if the email already exists
        var users = "";
        var newEmail = this.email;
        if (localStorage.getItem('users')) { // 'users' is an array of objects
        users = JSON.parse(localStorage.getItem('users'));
        };
        if (users) {
        if (users.some(function(user) {return user.email === newEmail})) {
        alert('Email already exists!');
        return;
        }
        users.push({'email': newEmail, 'password': this.password});
        localStorage.setItem('users', JSON.stringify(users));
        }
        else {
        users = [{'email': newEmail, 'password': this.password}];
        localStorage.setItem('users', JSON.stringify(users));
        }
        }
        }      
    })