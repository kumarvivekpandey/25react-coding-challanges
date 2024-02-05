import { useEffect } from "react";
import { useState } from "react";
import Suggestions from "./suggestion";

export default function SearchAutocomplete() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [serchparam, setSearchParam] = useState('')
    const[showdropdown,SetShowDropDown]= useState('false')
    const[filterusers,setFilterUsers]= useState('')

    function handlechange(e){
        const query= (e.target.value.toLowerCase())
        setSearchParam(query)
        if(query.length>1){
            const filterData = users && users.length 
            ? users.filter((item) => item.toLowerCase().indexOf(query) > -1) 
                : [];

            setFilterUsers(filterData)
            SetShowDropDown(true)
           

        }
        else{
            SetShowDropDown(false)
        }

    }
    function handleClick(event){
        console.log(event.target.innerText)
        setSearchParam(event.target.innerText)
        SetShowDropDown(false)
     setFilterUsers([])
    }
    async function fetchuser() {
        try {
            setLoading(true)
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json();


            if (data && data.users && data.users.length) {
                setUsers(data.users.map((usersItem) => usersItem.firstName));
            }
            setLoading(false)
        }
        catch (err) {
            console.log(err)


        }
    }

    useEffect(() => {
        fetchuser()

    }, []);

    console.log(users, filterusers)

    return (
        <div className="container">
            <h1>Search Auto Complete</h1>
            <br />
           

            {
                loading && <div> loading</div>
            }
            
                {
                    users.map((item)=><div key={item}>
                  
                    </div>)
                }
                <input type="text"
                value={serchparam}
                 onChange={handlechange}
                placeholder="enter text" />

{showdropdown &&  <Suggestions data={filterusers} handleClick={handleClick} />
                
}
                
        </div>

    );
}