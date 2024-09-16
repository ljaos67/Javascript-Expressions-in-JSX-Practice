//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
const YOURNAME = "Leonart Jaos";
const CURRENTYEAR = new Date().getFullYear();
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
ReactDom.render(
  <div>
    <p>Created by {YOURNAME} </p>
    <p>Copyright {CURRENTYEAR} </p>
  </div>,
  document.getElementById("root")
);
