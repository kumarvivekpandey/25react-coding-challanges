import { useEffect, useState } from "react";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState([]);

  async function fetchuser() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setUser(data);
      console.log(user);
      setLoading(false);
    } catch (e) {
      console.log(e)
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchuser(url);
  }, []);
  return (
    <div className="search-autocomplete">
      <input
        type="text"
        name="searchcomplete"
        placeholder="enter text"
        value={user}
      />
    </div>
  );
}
