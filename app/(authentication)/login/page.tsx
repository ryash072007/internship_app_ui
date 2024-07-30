"use client" // WHen using forms or usr interaction, use client
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod";
// import "./LoginPage.css"

const LoginFormData = z.object({
    Password: z.string().regex(RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"), "Invalid password"),
    Username: z.string().email("Invalid EMail"),
})

function onSubmit(data: any) {
    // Username -> email, password -> min 8 chars, 1 upper, 1 lower, 1 digit
    const ParseResult = LoginFormData.safeParse(data)
    if (!ParseResult.success) {
        console.log("Invalid Username / Password")
    }
    return console.log(data)
}

const LoginPage = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>
                    Login
                </title>
            </head>
            <body className='font-mono h-screen w-screen bg-black grid justify-center content-center'>
                <div className='w-min text-center justify-center align-center'>
                    <div className='border flex flex-col p-14'>
                        <div className='HeadingContainer'>
                            <h1 className='text-8xl text-white'>LOGIN</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} method="post" className='column-2'>
                            <div className='HeadingsContainer'>
                                <div className='p-2'>
                                    <span className='text-2xl text-white'>Username</span>
                                    <Input type="text" className="" id="" placeholder='Username' {...register("Username")}/>
                                </div>
                                <div className='p-2'>
                                    <span className='text-2xl text-white'>Password</span>
                                    <Input type="password" className="" id="" placeholder='Password' {...register("Password")}/>
                                </div>
                                <div className='p-2 flex flex-row justify-center'>
                                    <Button type="submit" className='text-xl p-4 m-2'>Log in</Button>
                                    <Button className='text-xl p-4 m-2'>Sign Up</Button>
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