import React from "react";
import {LoginFormik} from "./LoginFormFormik";
import {LoginForm} from "./LoginFormReactHookForm";
import Formik from "./Formik";
import FormArray from "./FormArray";

function App() {
    return (
        <main>
            <h1>Re-render 효율 & 빠른 Mount 속도</h1>
            <div style={{width: "100%", height: 300}}>
                <div style={{float: "left", width: "45%"}}>
                    {/*<FormArray/>*/}
                    <LoginForm/>
                </div>
                <div style={{float: "right", width: "45%"}}>
                    <LoginFormik/>
                    {/*<Formik/>*/}
                </div>
            </div>
        </main>
    );

}

export default App;
