import { useState } from "react";

export default function SearchAutocomplete() {
  const [user, setUser] = useState("");
  return (
    <div className="search-autocomplete">
      <input
        type="text"
        name="searchcomplete"
        placeholder="enter text"
        value={user}
       onChange={(e) => setUser(e.target.value)}
      />
      <p> {user}</p>
    </div>
  );
}
