import { useId } from "react"

export default function InputField({
    label,
    amount,
    isAmountDisabled = false,
    isCurrencyDisabled = false,
    currencyOptions = [],
    onAmountChange,
    onCurrencyChange,
    currency = 'usd',
    className = ''
}) {
    const id = useId('');

    return (
        <div className={`flex flex-row w-full h-[40%] justify-between sm:p-[2%] max-sm:p-[5%] border-1 border-white ${className}`}>
            <div>
                <label htmlFor={id}>
                    <h4 className="font-serif font-bold">{label}</h4>
                </label>
                <input
                className="bg-white opacity-70 text-black p-[4%]"
                    type="number"
                    name="amount"
                    id={id}
                    disabled={isAmountDisabled}
                    placeholder="Amount"
                    value={isNaN(amount) || amount == 0 ? '' : amount}
                    onChange={(event) => {
                        onAmountChange && onAmountChange(isNaN(event.target.value) ? 0 : Number(event.target.value));
                    }}
                />
            </div>

            <div>
                <label htmlFor="currency">
                    <h4 className="font-serif font-bold">Select Currency</h4>
                </label>
                <select className="text-black bg-white opacity-60"
                    name="Currency"
                    id="currency"
                    value={currency}
                    disabled={isCurrencyDisabled}
                    onChange={(event) => {
                        onCurrencyChange && onCurrencyChange(event.target.value);
                    }}
                >
                    <option disabled hidden>{currency}</option>
                    {currencyOptions.map((currency) => (
                        <option value={currency} key={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}