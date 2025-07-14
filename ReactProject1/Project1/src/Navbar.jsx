export default function NavBar(props) {
    return (
        <>
            <div className="flex flex-row justify-evenly bg-amber-900 text-white w-3xl m-auto rounded-4xl">
                <button type="button" onClick={() => props.setColor('yellow')} className="hover:bg-amber-600 p-2">Yellow</button>
                <button type="button" onClick={() => props.setColor('red')} className="hover:bg-amber-600 p-2">Red</button>
                <button type="button" onClick={() => props.setColor('lime')}className="hover:bg-amber-600 p-2">Lime</button>
            </div>
        </>
    );
}