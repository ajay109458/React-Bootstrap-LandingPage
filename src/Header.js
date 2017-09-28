import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';

function SocialIcon(props) {
    return (
        <li className="list-inline-item">
            <a href="#" className="btn btn-secondary btn-lg">
            <i className="fa fa-fw" className={props.socialClassName}></i>
            <span className="network-name">{props.socialNetworkName}</span>
            </a>
        </li>
    );
}

class Footer extends React.Component {

	render() {

        var socialAccouts = [{
            name: "Twitter",
            cName: "fa fa-twitter fa-fw"
        },
        {
            name: "Github",
            cName: "fa fa-github fa-fw"
        },
        {
            name: "LinkedIn",
            cName: "fa fa-linkedin fa-fw"
        }];

        var socialAccountElements = [];
        for(var i=0; i < socialAccouts.length; i++ ) {
            socialAccountElements.push(<SocialIcon socialNetworkName={socialAccouts[i].name} socialClassName={socialAccouts[i].cName}/>);
        }

		return (
		    <header className="intro-header">
                <Grid>
                    <div className="intro-message">
                        <h1>Landing Page</h1>
                        <h3>A Template by bootstrap</h3>
                        <hr className="intro-driver" />
                        <ul className="list-inline-item intro-social-buttons">
                            {socialAccountElements}
                        </ul>
                    </div>
                </Grid>
            </header>
		);
	}
}

export default Footer;