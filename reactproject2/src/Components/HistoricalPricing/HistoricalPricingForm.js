import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";

const HistoricalPriceForm = (props) => {
  const mappedLabel = props.currencyKeys.map((element, index) => {
    return (
      <option key={index} value={element}>
        {element}
      </option>
    );
  });

  const yearArray = [
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];

  const dayArray = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];

  const monthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const mappedYearArray = yearArray.map((element, index) => {
    return (
      <option key={index} value={element}>
        {element}
      </option>
    );
  });
  const mappedDayArray = dayArray.map((element, index) => {
    return (
      <option key={index} value={element}>
        {element}
      </option>
    );
  });
  const mappedMonthArray = monthArray.map((element, index) => {
    return (
      <option key={index} value={element}>
        {element}
      </option>
    );
  });
  const handleChange1 = (event) => {
    props.handleChange1(event.target.value);
  };
  const handleChange2 = (event) => {
    let concat = event.target.value;
    if (event.target.value < 10) {
      console.log("yes");
      concat = "0" + event.target.value;
      props.handleChange2(concat);
      console.log(concat);
    } else {
      console.log("no");
      props.handleChange2(concat);
    }
  };
  const handleChange3 = (event) => {
    let concat = event.target.value;
    if (event.target.value < 10) {
      console.log("yes");
      concat = "0" + event.target.value;
      props.handleChange3(concat);
      console.log(concat);
    } else {
      console.log("no");
      props.handleChange3(concat);
    }
  };
  const handleChange4 = (event) => {
    console.log(event.target.value);
    props.handleChange4(event.target.value);
  };

  return (
    <>
      <h1 className="history">Insert Parameters (Data Against The Euro)</h1>
      <p>
        Note: returns all data points for up to 90 days. Above that, it starts
        sampling by week or month based on the breadth of the date range.
      </p>
      <p>PULLS DATA TO CURRENT DATE</p>
      <ReactBootStrap.Form onSubmit={props.handleSubmit}>
        <ReactBootStrap.Form.Row className="align-items-center">
          <ReactBootStrap.Col xs="auto" className="my-1">
            <ReactBootStrap.Form.Label
              className="mr-sm-2"
              for="inlineFormCustomSelect"
              srOnly
            >
              Preference
            </ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
              onChange={handleChange1}
            >
              <option selected>Currency...</option>
              {mappedLabel}
            </ReactBootStrap.Form.Control>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col xs="auto" className="my-1">
            <ReactBootStrap.Form.Label
              className="mr-sm-2"
              for="inlineFormCustomSelect"
              srOnly
            >
              Preference
            </ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
              onChange={handleChange2}
            >
              <option selected>Month...</option>
              {mappedMonthArray}
            </ReactBootStrap.Form.Control>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col xs="auto" className="my-1">
            <ReactBootStrap.Form.Label
              className="mr-sm-2"
              for="inlineFormCustomSelect"
              srOnly
            >
              Preference
            </ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
              onChange={handleChange3}
            >
              <option selected>Day...</option>
              {mappedDayArray}
            </ReactBootStrap.Form.Control>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col xs="auto" className="my-1">
            <ReactBootStrap.Form.Label
              className="mr-sm-2"
              for="inlineFormCustomSelect"
              srOnly
            >
              Preference
            </ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
              onChange={handleChange4}
            >
              <option selected>Year...</option>
              {mappedYearArray}
            </ReactBootStrap.Form.Control>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col xs="auto" className="my-1">
            <ReactBootStrap.Button type="submit">Submit</ReactBootStrap.Button>
          </ReactBootStrap.Col>
        </ReactBootStrap.Form.Row>
      </ReactBootStrap.Form>
    </>
  );
};

export default HistoricalPriceForm;
