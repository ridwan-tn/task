import React from "react";
import Fan from "./component/fanSignup/fan";
import { BrowserRouter, Switch, Link,Route } from 'react-router-dom';
import Talent from "./component/talentSignup/talent";
export default function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Fan/>
        
      </BrowserRouter>
     
    </div>
  );
}
