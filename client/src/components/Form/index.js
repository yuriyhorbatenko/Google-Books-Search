import React from "react";


function Form(props) {
  return (


    <form>
      <div className="form-group">
        <label htmlFor="search"><h2>Search for and save Books of Interest</h2></label>

        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search a Book"
          id="search"
        />

        <button onClick={props.handleFormSubmit} className="button-search">
          Search
        </button>

      </div>
    </form>


  );
}

export default Form;
