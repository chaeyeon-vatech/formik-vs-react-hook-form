import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";

const FormikComponent = () => (
    <div>
        <h1>Formik</h1>
        <Formik
            initialValues={{ test: [{ name: "Julia" }, { age: "28" }] }}
            onSubmit={values =>
                console.log(values)
            }
            render={({ values }) => (
                <Form>
                    <FieldArray
                        name="test"
                        render={arrayHelpers => (
                            <div>
                                {values.test.map((friend, index) => (
                                    <div key={index}>
                                        <Field name={`test[${index}].name`} />
                                        <Field name={` dtest.${index}.age`} />
                                        <button
                                            type="button"
                                            onClick={() => arrayHelpers.remove(index)}
                                        >
                                            -
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => arrayHelpers.push({ name: "", age: "" })}
                                >
                                    +
                                </button>
                            </div>
                        )}
                    />
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
            )}
        />
    </div>
);

export default FormikComponent;
