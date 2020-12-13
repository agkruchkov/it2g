import React from "react";
import { Button, ButtonGroup, Radio } from "bootstrap-4-react";
import { useDispatch } from "react-redux";
import { filtered } from "../store/param";

const Filter = () => {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(filtered({ filter: event.target.textContent }));
  };

  return (
    <section className="main__filter">
      <span className="filter__show">Show:</span>
      <ButtonGroup toggle>
        <Button secondary active as="label" onClick={handleClick}>
          <Radio autoComplete="off" />
          All
        </Button>
        <Button secondary as="label" onClick={handleClick}>
          <Radio autoComplete="off" />
          Active
        </Button>
        <Button secondary as="label" onClick={handleClick}>
          <Radio autoComplete="off" />
          Completed
        </Button>
      </ButtonGroup>
    </section>
  );
};

export default Filter;
