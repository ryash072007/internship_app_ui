import { relative } from 'path'
import React from 'react'
import "./LoginPage.css"

const LoginPage = () => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>
                    Login
                </title>
            </head>
            <body className='body'>
                <div className='MainContainer'>
                    <div className='BorderContainer'>
                        <div className='HeadingContainer'>
                            <h1 className='LoginHeading'>LOGIN</h1>
                        </div>
                        <form action="#ADDLATER" method="post" className='Authentication'>
                            <div className='HeadingsContainer'>
                                <div className='Fields'>
                                    <span className='FieldHeading'>Username</span>
                                    <input type="text" className="UsernameInputField" id="" />
                                </div>
                                <div className='Fields'>
                                    <span className='FieldHeading'>Password</span>
                                    <input type="password" className="PasswordInputField" id="" />
                                </div>
                                <div className='FormButtons'>
                                    <button type="submit" className='FormButton'>Log in</button>
                                    <button className='FormButton'>Sign Up</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </body>
        </html>
    )
}

export default LoginPage