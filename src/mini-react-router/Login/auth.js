const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    fakeAuthProvider.isAuthenticated = true
    setTimeout(callback, 100)
  },
  signout(callback) {
    fakeAuthProvider.isAuthenticated = false
    setTimeout(callback, 100)
  }

}