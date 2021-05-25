import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../../App.css'

// import Footer from '../Footer'
// import {Dropdown} from 'react-bootstrap'



export default function Nationality() {
    return (
        <>
            <hr class="border2" data-content="Nationality"/>
            <div className="page-container">
                <div className="nationality">
                    <div className="leftSide">
                        <p>Choose a Nationality:</p>
                        <div class="col-lg-3">
                            <select id = "countryCmbBox" class="form-control countrypicker" 
                                data-live-search="true" onchange="getNationalityAverages()" />
                            <hr class="border"/>
                        </div>
                        <p> DAS IST EIN PLACEHOLDER FÜR DIE DIAGRAMME 
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
                                <Card className="card" style={{backgroundColor:'rgb(250,250,250)'}}>
                                    <CardContent>
                                        <Typography>
                                            ACTIVITS
                                        </Typography>
                                        <Typography>
                                            <small>(Concrete experiencer/Active experimenter)</small>
                                        </Typography>
                                    </CardContent>
                                </Card>

                                <Card className="card" style={{backgroundColor:'rgb(250,250,250)'}}>
                                    <CardContent>
                                        <Typography>
                                            THEORISTS
                                        </Typography>
                                        <Typography>
                                            <small>(Abstract conceptualiser/Reflective observer)</small>
                                        </Typography>
                                    </CardContent>
                                </Card>

                                <Card className="card" style={{backgroundColor:'rgb(250,250,250)'}}>
                                    <CardContent>
                                        <Typography>
                                            REFLECTORS
                                        </Typography>
                                        <Typography>
                                            <small>(Concrete experiencer/Reflective observer)</small>
                                        </Typography>
                                    </CardContent>
                                </Card>

                                <Card className="card" style={{backgroundColor:'rgb(250,250,250)'}}>
                                    <CardContent>
                                        <Typography>
                                            PRAGMATISTS
                                        </Typography>
                                        <Typography>
                                            <small>(Abstract conceptualization/Active experimenter)</small>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>

                

                </div>

               
            </div>

        </>
    );
}