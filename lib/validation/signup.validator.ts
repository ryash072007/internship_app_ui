import { z } from "zod";

export const SignUpValidator = z.object({
    Password: z.string().min(8).regex(RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"), "Invalid Password"),
    Email: z.string().email("Invalid Email Format"),
    Phone: z.string().min(9).max(10).regex(RegExp("^0?5[0-9]{8}$"), "Invalid Phone Number"),
    Username: z.string().max(10).min(5, "Invalid Username"),
    ConfirmPassword: z.string()
}).required().refine((args) => args.Password === args.ConfirmPassword, { message: "Passwords do not match", path: ["ConfirmPassword"] })

