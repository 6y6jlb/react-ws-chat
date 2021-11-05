import * as React from "react";

let defaultValue: any;
export let MyContext: React.Context<any>;
MyContext = React.createContext (defaultValue);
