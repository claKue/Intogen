import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import Footer from '../Footer'

Survey.StylesManager.applyTheme("modern");

class FindYourType extends Component {
    constructor() {
        super();
        }

render() {
  var json = {
          
    questions: [
         {
        type: "matrix",
        name: "Quality", 
        title: "Please indicate if you agree or disagree with the following statements",
        columns: [ 
          { value: 1, 
            text: "Agree" }, 
          { value: 2, 
            text: "Disagree" }],
        rows: [
          { value: "1", 
            text: "I have strong beliefs about what is rigth and wrong, good and bad." }, 
          { value: "2", 
            text: "I often act without considering the possible consequences." },
          { value: "3", 
            text: "I have a reputation for saying what I think, simply and directly." }, 
          { value: "4", 
            text: "I often find that actions based on feelings are as sound as those based on careful thought and analysis." },
          { value: "5", 
            text: "I like the sort of work where I have time for thorough preparation and implementation." },
          { value: "6", 
            text: "I regularly question people about their basic assumptions." }, 
          { value: "7", 
            text: "When I hear about a new idea or approach, I immediatley start working out how to apply it in practice." }, 
          { value: "8", 
            text: "I get on best with logical, analytical people and less well with spontaneous, `irrational` people." },
          { value: "9", 
            text: "I take care over how I interpret data and avoid jumping to conclusions." },
          { value: "10", 
            text: "I am attracted more to novel, unusual ideas than to practical ones." }
              ]
      }
    ]     
};
var survey = new Survey.Model(json);
 return (
          <Survey.Survey
           model={survey}
          />
        );
    }
}

export default FindYourType;