"use client"

import { UserService } from "@/service/user.service"
import { table } from "console"
import { useState, useEffect } from 'react'
import React from 'react'
import { effect } from "zod"

const UserList = () => {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const userService = new UserService()

    const users = async () => {
        const data = await userService.listUsers().then((response) => response?.message)
        console.log(data)
        return (
            <table>
                <tr className="bg-red-400">
                    <th className="p-3">Username</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Phone</th>
                </tr>
                {data.map((element: any) => 
                    <tr className="bg-yellow-400">
                        <td className="p-2">
                            {element.Username}
                        </td>
                        <td className="p-2">
                            {element.Email}
                        </td>
                        <td className="p-2">
                            {element.Phone}
                        </td>
                    </tr>
                )}
            </table>
        )
    }


    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>User List</title>
            </head>
            <body>
                {users()}
            </body>
        </html>
    )
}

export default UserList