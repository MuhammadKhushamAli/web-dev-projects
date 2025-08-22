import { useState } from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/authentication/authSlice";
import authService from "../appWrite/authentication";
import {Input} from "./index";

export default function Login() {
    const [error, setError] = useState('');
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = async (data) => {
        try {
            setError('');
            const session = await authService.Login(data);
            if (session) {
                const userData = await authService.getCurrentSession();
                if (userData) {
                    dispatch(login(userData));
                    navigate("/");
                }
                else
                {
                    setError('Failed to retrieve user data.');
                }
            }
            else
            {
                setError('Login failed. Please check your credentials.');
            }
        }
        catch (error) {
            setError(`Login Error: ${error.message}`);
        }
    }
    return (
        <div>
            <div>
                {error && <p className="error">{error}</p>}
            </div>

            <form onSubmit={handleSubmit(submitHandler)}>
                <Input
                    label='Email'
                    type='email'
                    placeholder='Enter your email'
                    {...register('email', {
                        required: true,
                        validate: {
                            matchPattern: (value) => /^(?=.{1,254}$)(?=.{1,64}@)(?![.])(?!.*\.\.)[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+(?<![.])@(?:(?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,63}$/.test(value) ||
                                "Invalid email format"
                        }
                    })}
                />

                <Input
                    label='Password'
                    type='password'
                    placeholder='Enter your password'
                    {...register('password', {
                        required: true,
                        validate: {
                            matchPattern: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value) ||
                                "Invalid password format"
                        }
                    })}
                />
            </form>
        </div>

    )
}