import React, {useState } from "react";
import PropTypes from "prop-types";

const Search = ({showClear, clearUsers, searchUsers, setAlert})=>  {
  
  const[text, setText] = useState('')


  const onSubmit = (e) => {
    e.preventDefault();
    //check ako je polje teksta prazno šalje alert
    if (text === "") {
     setAlert("Molim upišite tekst za pretragu", "light");
    } else {
     searchUsers(text);
      setText('')
    }
  };

  //computed properties [e.target.name] https://javascript.info/object
  const onChange = (e) => setText( e.target.value);

  

// showClear kada je 'true' data pokazuje clear button, a true je kad je users.array.length > 0
    return (
      <div>
        <form onSubmit={onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Pronađi korisnike po imenu..."
            value={text}
            onChange={onChange}
          />
          <input
            type="submit"
            value="Pretraga"
            className="btn btn-dark btn-block"
          />
        </form>


        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Ukloni
          </button>
        )}
      </div>
    );
  
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
