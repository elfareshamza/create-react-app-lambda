import React, { Component } from "react"
import { isAndroid, isIOS } from 'react-device-detect';
import logo from "./logo.svg"
import "./App.css"

const LambdaDemo = () => {

  const appUrl = {
    dev: "com.suez.tsme://",
    devAndroid: "intent://resplendent-boba-1e1c62.netlify.app#Intent;scheme=https;package=com.suez.tsme;end",
    staging: "...",
    prod: "com./myapp://reset-password?user=test&token=13245",
    fallbackIosURL: 'https://toutsurmoneau.fr',
    fallbackAndroidURL: 'https://toutsurmoneau.fr',
 }
 
 
//  useEffect(() => {
 
//     if (isAndroid || isIOS) {
//         // Try to open the native app when the page is loaded
//         window.location.replace(appUrl.dev);
//         // Show popup confirmation
//     }
//  // eslint-disable-next-line react-hooks/exhaustive-deps
//  }, []);
 
 // User confirms he want to open the app popup
 function handleAppRedirect() {
 
    // Try to open the when user click in the "confirm" in popup
    if (isAndroid) {
      window.location.replace(appUrl.devAndroid);
    } else if( isIOS) {
      window.location.replace(appUrl.dev);
    } else {
      try {
        window.location.replace(appUrl.dev);
      } catch(e) {
        console.log("not founddddd");
      };
    }
    
    if (isAndroid) {
        setTimeout(() => {
            // If the app is not installed,
            // then the user is redirect to the Play Store
            window.location.replace(appUrl.fallbackAndroidURL);
        }, 3000);
    } else if (isIOS) {
        setTimeout(() => {
            // If the app is not installed
            // then the user is reedirect to the App Store
            window.location.replace(appUrl.fallbackIosURL);
        }, 3000);
    }
 }



    return (
      <p>
       hey hello.

       <div onClick={() => handleAppRedirect()} >click to handle redirect</div>
      </p>
    )

};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
