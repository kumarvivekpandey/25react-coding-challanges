import { useEffect, useState } from "react";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState("");

  async function fetchuser() {
    try {
      setLoading(true);
      await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUser(data);
      setLoading(false);
    } catch (e) {
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
        // onChange={(e) => setUser(e.target.value)}
      />
    </div>
  );
}
