import { useDispatch } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../features/authentication/authSlice";
import authService from "../appWrite/authentication";
import { useForm } from "react-hook-form";
import { Input } from "./index";

export default function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const submitionHandler = async (data) => {
        setError("");
        try {
            const session = await authService.SignUp(data);

            if (session) {
                dispatch(login(session));
                navigate("/");
            }
        }
        catch (error) {
            console.error(`SignUp Error: ${error}`);
            setError("Sign up failed. Please try again.");
        }
    }

    return (
        <div>
            <div>
                {error && <p className="error">{error}</p>}
            </div>
        <form
        onSubmit={handleSubmit(submitionHandler)}
        >
            <Input
            label = "User Name"
            type = 'text'
            placeholder = "Enter your username"
            {...register("userName" , 
                {required: true})}
             />

             <Input
             label = "Email"
             type = 'email'
             placeholder = "Enter your email"
             {...register("email" , 
                 {required: true,
                    validate: {
                        matchPattern: (value) => /^(?=.{1,254}$)(?=.{1,64}@)(?![.])(?!.*\.\.)[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+(?<![.])@(?:(?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,63}$/.test(value) ||
                        "Invalid email format"
                    }
                 })}
             />
             <Input
             label = "Password"
             type = 'password'
             placeholder = "Enter your password"
             {...register("password" , 
                 {required: true,
                    validate: {
                        matchPattern: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value) ||
                        "Invalid password format"
                    }
                 })}
              />
        </form>
    </div>
    );
}