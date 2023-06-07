import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const Toggle = () => {

    const [isActive, setIsActive] = useState(true)

    return (
        <div>
            {isActive? (
                <div>
                    <Login />
                    <br />
                    Don't have an accont? <button onClick={() => setIsActive(false)}>sign up</button>
                </div>
            ):
            (
                <div>
                    <SignUp />
                    <br />
                    Already have an accont? <button onClick={() => setIsActive(true)}>Log in</button>
                </div>
            )}
        </div>
    );
}

export default Toggle;

