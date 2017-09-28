import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class ContentSectionA extends React.Component {

	render() {
		return (
		    <div className="container">
                <div className="row">
                    <div className="col-lg-5 ml-auto">
                        <hr className="section-heading-spacer" />
                        <div className="clearfix"></div>
                        <h2 className="section-heading">Death to the Stock Photo:<br/>Special Thanks</h2>
                        <p className="lead">A special thanks to
                        <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a>
                        for providing the photographs that you see in this template. Visit their website to become a member.</p>
                    </div>
                    <div className="col-lg-5 mr-auto">
                        <img className="img-fluid" src="img/ipad.png" alt="" />
                    </div>
                </div>
            </div>
		);
	}
}

export default ContentSectionA;