import 'react-app-polyfill/ie11';
import * as React from 'react';
import {Formik, Field, Form} from 'formik';

interface Values {
    sample1: string,
    sample2: string,
    sample3: string,
    sample4: string,
    sample5: string,
    sample6: string
}


export const LoginFormik: React.FC = () => {


    const formComponent = (formID: string) => {
        return <>
            <label htmlFor="lastName">{formID}</label>
            <Field id={formID} name={formID} placeholder="비밀번호를 입력하세요." style={{width: "90%"}}/></>
    }
    const list = Array.from({length: 500}, (v, i) => i);

    return (
        <div>
            <Formik
                initialValues={{
                    sample1: '',
                    sample2: '',
                    sample3: '',
                    sample4: '',
                    sample5: '',
                    sample6: ''
                }}
                onSubmit={(
                    d: Values
                ) => {
                    console.log("Submit Success!", d)
                }}
            >
                <Form>
                    <header>
                        <h2>Formik</h2>
                    </header>
                    {list.map((item)=>{
                        return(
                        formComponent(item.toString())
                        )
                    })}

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

