import 'react-app-polyfill/ie11';
import * as React from 'react';
import {Formik, Field, Form, FormikHelpers} from 'formik';

interface Values {
    id: string;
    pw: string;
}

export const LoginFormik: React.FC = () => {

    return (
        <div>
            <Formik
                initialValues={{
                    id: '',
                    pw: ''
                }}
                onSubmit={(
                    d: Values
                ) => {
                    alert(`ID : ${d.id}, PW : ${d.pw}`)
                }}
            >
                <Form>
                    <header>
                        <h2>Formik</h2>
                    </header>
                    <label htmlFor="firstName">ID</label>
                    <Field id="id" name="id" placeholder="아이디를 입력하세요."/>

                    <label htmlFor="lastName">Password</label>
                    <Field id="pw" name="pw" placeholder="비밀번호를 입력하세요."/>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

