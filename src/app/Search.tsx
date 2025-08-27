import {useState} from 'react'
interface SearchBarProps {
  onSearch: (city: string) => void;
}
const Search: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState<string>('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
    }
  };
    return (
        <div className="flex items-center justify-between gap-10">
            <input type="text" placeholder="Type a city" className="border rounded-lg w-full p-2" value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}/>
            <button className="rounded-lg bg-amber-700 text-white text-lg px-8 py-2" onClick={handleSearch}>Submit</button>
        </div>
    )
}
export default Search;