export default function Search() {
    return (
        <div className="flex items-center justify-between gap-10">
            <input type="text" placeholder="Type a city" className="border rounded-lg w-full p-2"/>
            <button className="rounded-lg bg-amber-700 text-white text-lg px-8 py-2">Submit</button>
        </div>
    )
}