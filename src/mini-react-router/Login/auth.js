import React from 'react';
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

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  )
};
