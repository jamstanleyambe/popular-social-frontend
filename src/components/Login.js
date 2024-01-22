import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { useStateValue } from '../StateProvider'
import { actionTypes } from '../Reducer'

const firebaseConfig = {
    apiKey: "AIzaSyB0Ep-dPj7zwIXOVA8RR2Wcv9pC1Dr9ulg",
    authDomain: "popular-social-frontend-524d5.firebaseapp.com",
    databaseURL: "https://popular-social-frontend-524d5-default-rtdb.firebaseio.com",
    projectId: "popular-social-frontend-524d5",
    storageBucket: "popular-social-frontend-524d5.appspot.com",
    messagingSenderId: "483054992341",
    appId: "1:483054992341:web:4739142c0738c476e39b5c"
};

const app = initializeApp(firebaseConfig);

const Login = () => {
    const [{}, dispatch] = useStateValue()


    const signIn = () => {
        const auth = getAuth(app);
        signInWithPopup(auth, new GoogleAuthProvider())
            .then(result => { console.log(result) 
                dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
            .catch(error => alert(error.message));
    };

    return (
        <LoginWrapper>
            <div className="login__logo">
                <img src="logo512.png" alt="login" />
                <h1>Popular Social</h1>
            </div>
            <Button type='submit' className="login__btn" onClick={signIn}>
                Sign In
            </Button>
        </LoginWrapper>
    );
};

const LoginWrapper = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    .login__logo {
        display: flex;
        flex-direction: column;
        img {
            object-fit: contain;
            height: 150px;
            max-width: 200px;
        }
    }
    .login__btn {
        width: 300px;
        background-color: #2e81f4;
        color: #eff2f5;
        font-weight: 800;
        &:hover {
            background-color: white;
            color: #2e81f4;
        }
    }
`;

export default Login;

