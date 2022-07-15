import React from 'react';
import { AuthContext } from './../Login/auth';

export default function useAuth() {
  return React.useContext(AuthContext)
};
