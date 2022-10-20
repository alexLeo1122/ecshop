import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import { useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth  } from './utils/firebase/firebase.utils';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import CheckOut from './components/check-out/check-out.component';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';
const App = () => {
    console.log(">>>App run")
    const dispatch = useDispatch();
    useEffect(()=>{
    console.log("App/useEffect run")
    const unsubscribe = onAuthStateChangedListener((user)=>{
        if (user) {
            createUserDocumentFromAuth(user);
        }
        console.log("App/useEfect/currentUser")
        dispatch(setCurrentUser(user));   
        console.log("App/useEfect/finishedCurrenUser")             
    });
    return unsubscribe;
},[dispatch]);
  console.log(">>>App finished")

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
          <Route index element ={<Home/>} />
          <Route path='shop/*' element ={<Shop />} />
          <Route path='sign-in' element ={<Authentication />} />
          <Route path='checkout' element ={<CheckOut />} />
      </Route>

    </Routes>
  );
} 
export default App;