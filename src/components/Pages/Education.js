import React from 'react';
import '../../App.css'

export default function Education() {
    return (
        <div className="education">
            <p>Choose your Education Degree:</p>
            <div class="col-lg-3">

            <select>
                  <option value="0">ISE</option>
            </select>
            <select id="degreeCmbBox" onchange="degreeValChanged()">
                  <option value="None"></option>
                  <option value="Bachelors">Bachelors </option>
                  <option value="Master">Master </option>
            </select>
            <select id="studyProgCmbBox" onchange="studyProgValChanged()">
                  <option value="None"></option>
                </select>

            <hr class="border"/>
            </div>
            <div className="learningStyles">

            </div>
        </div>
    );
}