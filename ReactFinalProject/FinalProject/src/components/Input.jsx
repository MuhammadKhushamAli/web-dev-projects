import { forwardRef, useId } from "react";

const Input = forwardRef(({
    label,
    type = "text",
    className = "",
    ...props }, ref) => {
    const id = useId();
    return (
        <div>
            {label &&
                <label
                    htmlFor={id}
                >{label}
                </label>
            }
            <input type={type}
                id={id}
                ref={ref}
                className={className}
                {...props}
            />
        </div>
    )
})

export default Input;