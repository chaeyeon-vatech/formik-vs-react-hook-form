import React from "react";
import {LoginFormik} from "./LoginFormFormik";
import {LoginForm} from "./LoginFormReactHookForm";
import {WatchForm} from "./WatchForm";
import {WatchFormik} from "./WatchFormik";


function App() {

    return (
        <main>
            <h1>Re-render 효율 & 빠른 Mount 속도</h1>
            <div style={{width: "100%", height: 300}}>
                {/*<div style="float:left; width: 80%">*/}
                <div style={{float: "left", width: "45%"}}>
                    <LoginForm/>
                </div>
                <div style={{float: "right", width: "45%"}}>
                    <LoginFormik/>
                </div>

            </div>

            {/*<div style={{height: 200}}/>*/}
            {/*<div style={{width: "100%", height: 300}}>*/}

            {/*    <h1>Uncontrolled / Watch</h1>*/}
            {/*    <div style={{float: "right", width: "45%"}}>*/}
            {/*        <WatchForm/>*/}
            {/*    </div>*/}
            {/*    <div style={{float: "left", width: "45%"}}>*/}
            {/*        <WatchFormik/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div style={{width:"100%"}}>*/}
            {/*    <WatchForm/>*/}
            {/*</div>*/}
        </main>
    );

}


export default App;
