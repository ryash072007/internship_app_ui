"use client" // WHen using forms or usr interaction, use client
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import {SignUpValidator} from '@/lib/validation/signup.validator'
import { UserService } from '@/service/user.service'

// username, email, phone number, password, confirm password
// TODO (06/08)
// use toast library to display the message
// fetch data and dissplay in table (api) all users (another page -> user list)


const SignupPage = () => {

    const userService = new UserService()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(SignUpValidator), mode: "onChange" })

    function onSubmit(data: any) {
        return userService.addUser(data).then((response) => {
            console.log(response?.message)
        })
    }

    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>
                    Register
                </title>
            </head>
            <body>
                <div className='font-mono h-screen w-screen bg-black grid justify-center content-center'>
                    <div className='w-min text-center justify-center align-center'>
                        <div className='border flex flex-col p-14'>
                            <div className='HeadingContainer'>
                                <h1 className='text-6xl text-white p-4'>REGISTER</h1>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} method="post" className='flex flex-col'>
                                <div className='w-max'>
                                    <div className='grid grid-cols-2 gap-y-3 p-3 justify-items-end'>

                                        <span className='text-2xl text-white p-1'>Username:</span>
                                        <Input type="text" className="p-1 w-max" id="" placeholder='Username' {...register("Username")} />
                                    </div>
                                    <span id='form-errors' className='text-red-600'>{errors.Username?.message?.toString()}</span>

                                    <div className='grid grid-cols-2 gap-y-3 p-3 justify-items-end'>

                                        <span className='text-2xl text-white p-1'>Email:</span>
                                        <Input type="text" className="p-1 w-max" id="" placeholder='Email' {...register("Email")} />
                                    </div>
                                    <span id='form-errors' className='text-red-600'>{errors.Email?.message?.toString()}</span>
                                    <div className='grid grid-cols-2 gap-y-3 p-3 justify-items-end'>

                                        <span className='text-2xl text-white p-1'>Phone No.:</span>
                                        <Input type="text" className="p-1 w-max" id="" placeholder='Phone' {...register("Phone")} />
                                    </div>
                                    <span id='form-errors' className='text-red-600'>{errors.Phone?.message?.toString()}</span>
                                    <div className='grid grid-cols-2 gap-y-3 p-3 justify-items-end'>

                                        <span className='text-2xl text-white p-1'>Password:</span>
                                        <Input type="password" className="p-1 w-max" id="" placeholder='Password' {...register("Password")} />
                                    </div>
                                    <span id='form-errors' className='text-red-600'>{errors.Password?.message?.toString()}</span>
                                    <div className='grid grid-cols-2 gap-y-3 p-3 justify-items-end'>

                                        <span className='text-2xl text-white p-1'>Confirm Password:</span>
                                        <Input type="password" className="p-1 w-max" id="" placeholder='Confirm Password' {...register("ConfirmPassword")} />
                                    </div>
                                    <span id='form-errors' className='text-red-600'>{errors.ConfirmPassword?.message?.toString()}</span>
                                    {/* <Button type="submit" className='text-xl p-4 m-2'>Log in</Button> */}
                                </div>
                                <Button type="submit" className='text-xl p-4 m-2'>Register</Button>
                            </form>
                        </div>
                    </div></div>
            </body>
        </html>
    )
}

export default SignupPage