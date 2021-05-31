import React from 'react';
import '../../App.css'
import LearningCards from '../LearningCards'


export default function Education() {
    return (
        <>
            <hr class="border2" data-content="Education"/>
            <div className="page-container">
                <div className="education">
                    <div className="leftSide">
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

                        <p> <b>PLACEHOLDER FOR THE DIAGRAMS </b> <br/>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
                            penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
                            Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
                            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
                            venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
                            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean 
                            vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat 
                            vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, 
                            feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque 
                            rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur 
                            ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, 
                            tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing 
                            sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit 
                            id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut 
                            libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros 
                            faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales 
                            sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus 
                            nunc, 
                        </p>
                    </div>


                    <div className="rightSide">
                        <div className="sidebar">
                            <h3>Kolb's Learning Styles</h3>
                            <hr class="border1"/>
                            <div className="cards">
                                <LearningCards/>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>

        </>
    );
}