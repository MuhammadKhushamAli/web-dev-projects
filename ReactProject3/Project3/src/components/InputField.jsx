import { useId } from "react"

export default function InputField({
    label,
    amount,
    isAmountDisabled = false,
    isCurrencyDisabled = false,
    currencyOptions = [],
    onAmountChange,
    onCurrencyChange,
    currency = 'usd'
}) {
    const id = useId('');

    return (
        <div>
            <div>
                <label htmlFor={id}>
                    <h4>{label}</h4>
                </label>
                <input
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
                    <h4>Select Currency</h4>
                </label>
                <select className="text-white bg-black"
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