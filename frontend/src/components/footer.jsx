/* footer component */
import React, { Component } from 'react';
import '../styles/footer.css';

export default class footer extends Component {
    render() {
        return (
            <div className="footer-parent">
                <div className="footer">
                    <p>Email us: <a href="mailto:bobjustic6@gmail.com">mail@caRental.com</a></p>
                    <p>Call us: (03) 1234 5678</p>
                    <p>Visit us: CaRental, 124 La Trobe St, Melbourne VIC 3000</p>
                </div>
            </div>
        )
    }
}
