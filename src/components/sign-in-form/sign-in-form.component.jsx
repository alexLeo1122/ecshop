import Button from '../button/button.component';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWEP
} from '../../utils/firebase/firebase.utils';
// import { getDoc } from "firebase/firestore";
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss'
import { useState,useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

const defaultFormFields = {  
  email: '',
  passWord: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email,passWord} = formFields;
  // const {currentUser,setCurrentUser}=useContext(UserContext);

  const signInWithGoogle = async () => {
   await signInWithGooglePopup();



    // const docSnap = await getDoc(userDocRef);
  };
  const handleChange = ({target})  => {
    setFormFields({
        ...formFields,
        [target.name]: target.value
    });

}
  const handleSubmit = async (e) => {  
    e.preventDefault();  
    try {
      const {user} = await signInWEP(email,passWord);
      // setCurrentUser(user);
      // console.log({user});  
      setFormFields(defaultFormFields);    
    } catch (error) {
        switch (error.code) {
          case 'auth/wrong-password':
            alert('Wrong Password');
            break;
          case 'auth/user-not-found':
            alert('User not found');
            break;
        
          default:
            break;
        }
      console.log(error);


    } 


  }

  return (    
    <div className='sign-up-container'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
          <FormInput label="email" type="email" required name='email' value={email} onChange={handleChange} />
          <FormInput label='password' type="password" required name='passWord' value={passWord} onChange={handleChange} />
          <div className='buttons-container'>
            <Button type="submit">Sign in</Button>      
            <Button type="button" onClick={signInWithGoogle} buttonType='google'>Google Sign In</Button>
          </div>
      </form>
    </div>
  
  );
};

export default SignInForm;