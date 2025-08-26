import DateFormat from "./DateFormat";
import Search from "./Search";
export default function Home() {
  return (
    <div className="border rounded-lg p-5 mx-auto w-1/2 my-20">
      <Search />
      <DateFormat />
    </div>
  );
}
