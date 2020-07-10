import React from "react";
import "./form.css";
import Zoom from "react-reveal/Zoom";

function Form(props) {
  return (
    <Zoom>
      <form>
        <div className="form-group">

          <label className="search-label" htmlFor="search-input">
            <input
              onChange={props.handleInputChange}
              value={props.search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search a Book"
              id="search-input"
              required
            />
          </label>
          <button type="button" className="btn btn-outline-dark button-search" type="submit" onClick={props.handleFormSubmit}><i className="fa fa-search" aria-hidden="true"> Search</i></button>

        </div>
      </form>
    </Zoom>

  );
}

export default Form;
