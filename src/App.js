import React, { Component, useEffect } from "react"
import { isAndroid, isIOS } from 'react-device-detect';
import logo from "./logo.svg"
import "./App.css"

const LambdaDemo = () => {

  const appUrl = {
    dev: "com.suez.tsme://",
    staging: "...",
    prod: "com./myapp://reset-password?user=test&token=13245",
    fallbackIosURL: 'https://toutsurmoneau.fr',
    fallbackAndroidURL: 'https://toutsurmoneau.fr',
 }
 
 
 useEffect(() => {
 
    if (isAndroid || isIOS) {
        // Try to open the native app when the page is loaded
        window.location.replace(appUrl.dev);
        // Show popup confirmation
    }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
 
 // User confirms he want to open the app popup
 function handleAppRedirect() {
 
    // Try to open the when user click in the "confirm" in popup
    window.location.replace(appUrl.dev);
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
