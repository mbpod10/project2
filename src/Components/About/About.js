import React from "react";
import "./About.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-div">
      <div className="jumbo">
        <ReactBootStrap.Jumbotron className="jumbo">
          <h1>Real Time Currency Data</h1>
          <p>List currencies and their exchange rates</p>
          <Link to="/names">
            <p>
              <ReactBootStrap.Button variant="primary">
                Currency List
              </ReactBootStrap.Button>
            </p>
          </Link>
        </ReactBootStrap.Jumbotron>
      </div>
      <div className="jumbo">
        <ReactBootStrap.Jumbotron className="jumbo">
          <h1>Find Individual Exchange Rates</h1>
          <p>
            Pick a currency and find their exchange rates against 30 other major
            currencies
          </p>
          <Link to="/converter">
            <p>
              <ReactBootStrap.Button variant="primary">
                Pick Currency
              </ReactBootStrap.Button>
            </p>
          </Link>
        </ReactBootStrap.Jumbotron>
      </div>
      <div className="jumbo">
        <ReactBootStrap.Jumbotron className="jumbo">
          <h1>Euro Historical Exchange Rates</h1>
          <p>
            Find historical exchange rates against the euro from up to 20 years
            ago. Find the standard deviation and the average price as well!
          </p>
          <Link to="/historicalpricing">
            <p>
              <ReactBootStrap.Button variant="primary">
                Historical Rates
              </ReactBootStrap.Button>
            </p>
          </Link>
        </ReactBootStrap.Jumbotron>
      </div>
    </div>
  );
};

export default About;
