import React from 'react'
import './fields.css'
import Programming from './images/Programming.png';
import Culture from './images/culture.png';
import Design from './images/Design.png';
import Networking from './images/Networking.png';
import Sport from './images/Sport.png';
import NewTech from './images/NewTech.png';

const Fields = () =>{
    return (
    <div id="Fields" className="fields">
        <div className="title">WHAT WE DO !</div>
        <div className="subtitle">Briefly, EVERYTHING! </div>
        <div className="content flex">
            <div className="field"> 
                <img src={Programming} alt="Programming" />
                <p className="field-title">Programming</p>
            </div>
            <div className="field"> 
                <img src={Networking} alt="Networking" />
                <p className="field-title">Networking</p>
            </div>
            <div className="field"> 
                <img src={Design} alt="Design" />
                <p className="field-title">Design</p>
            </div>
            <div className="field"> 
                <img src={NewTech} alt="NewTech" />
                <p className="field-title">New Tech</p>
            </div>
            <div className="field"> 
                <img src={Sport} alt="Sport" />
                <p className="field-title">Sport</p>
            </div>
            <div className="field"> 
                <img src={Culture} alt="Culture" />
                <p className="field-title">Culture</p>
            </div>
            
        </div>
    </div>
    );
};
export default Fields;