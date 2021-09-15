import React from 'react'
import './signup.css';
import { auth, provider } from './Firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';
const SignUp = ({ setShow, show }) => {
    const [{ }, dispatch] = useStateValue();
    //sign up with google
    const signUp = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                //using useReducer hook to set the user after successfull sign up
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className="main__div">
            <div className="sidebar__main">
                <h1> Dash.</h1>
            </div>
            <div className="signup__main">
                <div className="signup__details">
                    <span className="signup__heading">Create an Account</span>
                    <span className="signup__heading1">Create an Account to use Dashboard</span>
                    <div className="signup__companies">
                        <span className="signup__companiesbtn" onClick={signUp}>Sign up with Google</span>
                        <span className="signup__companiesbtn">Sign up with Apple</span>
                    </div>
                    <div className="signup__form">
                        <p>
                            <span className="signup__label"> Name </span>
                            <input type="text" />
                        </p>
                        <p>
                            <span className="signup__label"> Email </span>
                            <input type="text" />
                        </p>
                        <p>
                            <span className="signup__label" > Password</span>
                            <input type="password" />
                        </p>
                        <p>
                            <span className="signup__label" > Confirm </span>
                            <input type="password" />
                        </p>
                        <span style={{ color: '#346BD4' }}>Forgot Password? </span>
                        <p>
                            <input type="submit" value="Sign in" />
                        </p>
                    </div>
                    <p>Dont have a account? <span style={{ color: '#346BD4', cursor: 'pointer' }} onClick={() => setShow(!show)}> Login here </span></p>
                </div>
            </div >
        </div>
    )
}

export default SignUp
