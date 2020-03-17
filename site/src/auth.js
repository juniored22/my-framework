
const fakeAuth = {
    isAuthenticated: false,
    authenticate(obj) {
 
      return fetch("http://localhost:3100/auth", {
        method: "POST",
        // mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email:    obj.email,
          password: obj.password
        }),
        
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        return data
      });
    },
    signout() {
      this.isAuthenticated = false
    }
}

export default fakeAuth;