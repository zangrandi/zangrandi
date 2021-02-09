import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
      var name = this.props.data.name;
      var state = this.props.data.address.state;
      var email = this.props.data.email;
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <div className="row">
              <div className="col-md-4 col-md-offset-4" style={{ color: "#999" }}>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {state}
                  </span>
                  <br />
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              </div>
            </div>

           <ul className="copyright">
              <li>&copy; Copyright 2017 Tim Baker</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
