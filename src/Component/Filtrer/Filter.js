import React from "react";
import { Navbar, Form, FormControl } from "react-bootstrap";
import ReactStars from "react-stars";

function Filter({ searchmovies, setRate }) {
  return (
    <div>
      <div>
        <Navbar className="color-nav" variant="light">
          <Form inline>
            <FormControl
              type="text"
              onChange={(e) => searchmovies(e.target.value)}
              placeholder="Search Movie"
              className=" mr-sm-2"
            />
            <br />
            <ReactStars
              count={5}
              size={24}
              color2={"red"}
              half={false}
              onChange={(e) => setRate(e)}
            />
          </Form>
        </Navbar>
      </div>
    </div>
  );
}

export default Filter;
