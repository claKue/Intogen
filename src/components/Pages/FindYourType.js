import React, {Component} from 'react'
import "survey-react/survey.css";
import * as Survey from "survey-react";
import Footer from '../Footer'

class FindYourType extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
    this.onCompleteComponent = this.onCompleteComponent.bind(this)
  }

  onCompleteComponent = () => {
    this.setState({
      isCompleted: true
    })
  }

  render(){
    var json = {

      "pages": [
          {
              "name": "page1",
              "elements": [
                  {
                      "type": "rating",
                      "name": "nps_score",
                      "title": "I have strong beliefs about what is right and wrong, good and bad.",
                      "isRequired": true,
                      "rateMin": 0,
                      "rateMax": 1,
                      "minRateDescription": "(Disagree)",
                      "maxRateDescription": "(Agree)"
                  },
              ]
          }, {
            "name": "page2",
            "elements": [
                {
                    "type": "rating",
                    "name": "nps_score",
                    "title": "I often act without considering the possible consequences.",
                    "isRequired": true,
                    "rateMin": 0,
                    "rateMax": 1,
                    "minRateDescription": "(Disagree)",
                    "maxRateDescription": "(Agree)"
                }, 
            ]
        }, {
          "name": "page3",
          "elements": [
              {
                  "type": "rating",
                  "name": "nps_score",
                  "title": "I have a reputation for saying what i think, simply and directly.",
                  "isRequired": true,
                  "rateMin": 0,
                  "rateMax": 1,
                  "minRateDescription": "(Disagree)",
                  "maxRateDescription": "(Agree)"
              }, 
          ]
      }, {
        "name": "page4",
        "elements": [
            {
                "type": "rating",
                "name": "nps_score",
                "title": "I often find that actions based on feelings are as sound as those based on careful thought and analysis.",
                "isRequired": true,
                "rateMin": 0,
                "rateMax": 1,
                "minRateDescription": "(Disagree)",
                "maxRateDescription": "(Agree)"
            }, 
        ]
    }, {
      "name": "page5",
      "elements": [
          {
              "type": "rating",
              "name": "nps_score",
              "title": "I like the sort of work where I have time thorough preperation and implementation.",
              "isRequired": true,
              "rateMin": 0,
              "rateMax": 1,
              "minRateDescription": "(Disagree)",
              "maxRateDescription": "(Agree)"
          }, 
      ]
  }, 
      ],
      "showQuestionNumbers": "on"
  };

  var surveyRender = !this.state.isCompleted ? (
    <Survey.Survey
    json={json}
    showCompletedPage={false}
    onComplete={this.onCompleteComponent}
    />
  ) : null

  var onSurveyCompletion = this.state.isCompleted ? (
    <div style={{ fontSize: '3em', color: 'midnightblue'}}>David Kolb thanks you</div>
  ) : null;

  return (
    <div className="App">
      <div>
        <h1 style={{ fontSize: 20, color:'midnightblue' }}>
          Questions are based on David Kolb's research.
          This questionnaire is designed to find out your preferred learning styles(s) as an adult. Over the years,
          you have probably developed learning habits that help you benefit more from some experiences than from others.
          This questionnaire will probably take you about 5-7 minutes to complete. The accuracy of your results depends 
          on how honest you are. There are no right or wrong answers. For each statement, choose if you would rather agree or disagree 
          with it and click the corresponding box, then move on to the next statement. If you find yourself wondering which situation 
          to think of when answering a question, just think about how you are when you are working with people. 
          Go with your first gut reaction instead of over-thinking your response.
       </h1>
        {surveyRender}
        {onSurveyCompletion}
        <Footer/>
      </div>
    </div>
  );
}
}

export default FindYourType;