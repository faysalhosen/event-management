import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader ,setLoader] = useState(true)
  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email,password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password);
  }
  const logOut = () => {
    setLoader(true)
    return signOut(auth);
}
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoader(false)
    });
    return () => {
        unSubscribe();
    }
}, []);
  const authInformation = {
    user,
    createUser,
    signIn,
    loader,
    logOut
  };
  return (
    <AuthContext.Provider value={authInformation}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
