import React from 'react';
import '../../App.css'
import {Dropdown} from 'react-bootstrap'

export default function Nationality() {
    return (
        <>
            <div className="nationality">
                <p>Choose a Nationality:</p>
                <div class="col-lg-3">
                    <select id = "countryCmbBox" class="form-control countrypicker" 
                        data-live-search="true" onchange="getNationalityAverages()" />
                    <hr class="border"/>
                </div>
                <div className="learningStyles">

                </div>
            </div>
        </>
    );
}