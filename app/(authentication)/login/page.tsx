"use client" // WHen using forms or usr interaction, use client
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useForm, SubmitHandler } from "react-hook-form"
// import "./LoginPage.css"



const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit: SubmitHandler<any> = (data:any) => console.log(data)
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>
                    Login
                </title>
            </head>
            <body className='font-mono h-screen w-screen'>
                <div className='w-min text-center justify-center align-center'>
                    <div className='border flex flex-col p-14'>
                        <div className='HeadingContainer'>
                            <h1 className='text-8xl'>LOGIN</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} method="post" className='column-2'>
                            <div className='HeadingsContainer'>
                                <div className='p-2'>
                                    <span className='text-2xl'>Username</span>
                                    <Input type="text" className="" id="" placeholder='Username' {...register("Username")}/>
                                </div>
                                <div className='p-2'>
                                    <span className='text-2xl'>Password</span>
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