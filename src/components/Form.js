import React, { useState } from "react";
import "../css/Form.css";

const Form = ({ setLoggedIn }) => {
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const handleSubmit = () => {
        setLoggedIn(true);
    }
    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    {isLoggingIn ? <h3 className="Auth-form-title">Sign In</h3> : <h3 className="Auth-form-title">Sign Up</h3>}
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                        />
                    </div>
                    {!isLoggingIn && <div className="form-group mt-3">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Re-enter password"
                        />
                    </div>}
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    {isLoggingIn ?
                        <p className="forgot-password text-right mt-2">
                            Don't have an account? <a href="#" onClick={() => setIsLoggingIn(false)}>Sign In</a>
                        </p>
                        :
                        <>
                            <p className="forgot-password text-right mt-2">
                                Already have an account? <a href="#" onClick={() => setIsLoggingIn(true)}>Login</a>
                            </p>
                            <p className="forgot-password text-right mt-2">
                                Forgot <a href="#">Password?</a>
                            </p>
                        </>
                    }
                </div>
            </form>
        </div>
    );
}
export default Form;
