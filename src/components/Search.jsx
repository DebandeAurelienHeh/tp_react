import "../App.jsx"
import {useState} from "react";

function Search(props){

    const[searchText, setSearchText] = useState("");

    const handleChange = (event) => {
        setSearchText(event.target.value);
        props.callback(event);
    }
    return(
        <div>
            <label htmlFor="search">Search: </label>
            <input type="text" id="search" onChange={handleChange} placeholder={searchText}/>

        </div>
    )
}
export default Search;