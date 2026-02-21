export default function Page() {
    return (
        <div className="w-full">
            <form className="w-full" action="">
                <label htmlFor="nameInput">
                    <input className="w-full py-2.5 px-3 rounded-lg border" type="text" name="name" id="nameInput" placeholder="Oliver Hayes" />
                </label>
                <label htmlFor="emailInput">
                    <input className="w-full py-2.5 px-3 rounded-lg border" type="text" name="email" id="emailInput" placeholder="name@example.com" />
                </label>

                <button type="submit" className="w-full p-2.5 rounded-lg border cursor-pointer bg-[#1E90FF]">Sign Up</button>
            </form>
        </div>
    )
}