import React from "react";

const client =
  "242811332283-9oibhfo6t27g9c5kcn1i5a4imglfmm62.apps.googleusercontent.com";
class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "242811332283-9oibhfo6t27g9c5kcn1i5a4imglfmm62.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
