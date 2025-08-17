function Select({
    label,
    options,
    className = "",
    ...props
}, ref)
{
    const id = useId();
    return(
        <div>
        {
            label && <label htmlFor={id}>{label}</label>
        }
        <select
        id={id}
        ref={ref}
        {...props}
        className={className}>
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
        </div>
    )
}

export default forwardRef(Select);