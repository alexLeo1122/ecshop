// import { async } from "@firebase/util";
import { useState, useContext } from "react";
import {  createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';
import { UserContext } from "../../contexts/user.context";




const defaultFormFields = {
    displayName: '',
    email: '',
    passWord: '',
    confirmPassWord: ''
}
const SignUpForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, passWord, confirmPassWord} = formFields;
    const {setCurrentUser} = useContext(UserContext);
    // console.log('render');
    const handleChange = ({target})  => {
        setFormFields({
            ...formFields,
            [target.name]: target.value
        });

    }
    const handleSubmit = async (e) => {
        e.preventDefault();   
        if(passWord !== confirmPassWord){
          alert('Password do not match');
          return;
        }

        try {
                const userInfo = await createAuthUserWithEmailAndPassword(
                  email,
                  passWord
                );
                const {user} = userInfo;    
                await createUserDocumentFromAuth(user,{displayName});
                setFormFields(defaultFormFields);
                setCurrentUser(user);



          } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
              alert('Cannot create user, email already in use');
            } else {
              console.log('user creation encountered an error', error);
            }
        }


    };
    return (
        <div className="sign-up-container">
            <h2>Don't have an acoount?</h2>
            <span>Sign up with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput label='Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName} />
                    <FormInput label="Email" type="email" required name='email' value={email} onChange={handleChange} />
                    <FormInput label='Password' type="password" required name='passWord' value={passWord} onChange={handleChange} />
                    <FormInput label='Confirm Password' type="password" required name='confirmPassWord' value={confirmPassWord} onChange={handleChange} />

                    <Button type='submit' >Sign Up</Button>       


                </form>
        </div>
    );
};


export default SignUpForm;