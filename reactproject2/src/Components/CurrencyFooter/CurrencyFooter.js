import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./CurrencyFooter.css";

const CurrencyFooter = () => {
  return (
    <div class="bottom">
      <div class="bottom-nav">
        <div>
          <ul>
            <li>
              <h5>Back To Top</h5>
            </li>
            <li>
              <a href="#brock">Top</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <h5>Connect</h5>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=JYjdbw7XD3U&feature=youtu.be">
                YouTube
              </a>
            </li>
            <li>
              <a href="http://linkdin.com">LinkdIn</a>
            </li>
            <li>
              <a href="http://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="http://instagram.com">Instagram</a>
            </li>
            <li>
              <a href="http://github.com">GitHub</a>
            </li>
            <li>
              <a href="http://copen.io">Codepen</a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="hide">
            <li>
              <h5>Contact</h5>
            </li>
            <li>
              <a href="mailto:someone@yoursite.com?subject=Mail from Our Site">
                Email
              </a>
            </li>
            <li>
              <a href="http://linkdin.com">LinkdIn</a>
            </li>
            <li>
              <a href="http://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="http://instagram.com">Instagram</a>
            </li>
            <li>
              <a href="http://github.com">GitHub</a>
            </li>
            <li>
              <a href="http://copen.io">Codepen</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CurrencyFooter;
