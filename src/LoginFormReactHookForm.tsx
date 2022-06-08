import {useForm, useFieldArray} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React from "react";
import useRenderCount from "@hooks/render-count";

const schema = yup
    .object()
    .shape({})
    .required();

export const LoginForm: React.FC = () => {

    const count = useRenderCount();

    const {register, watch, control, handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });

    const fields = useFieldArray({
        name: "test",
        control
    });

    const watchEight = watch([`test`[8]])

    const formComponent = (formID: number) => {
        const idToNum = formID.toString()

        return <>
            <label htmlFor={idToNum}>{formID + 1}{formID === 7 && watchEight}</label>

            <input type="string" {...register(`test[${formID}]`)} placeholder="비밀번호를 입력하세요." style={{width: "90%"}}/></>
    }
    const list = Array.from({length: 500}, (v, i) => i);
    return (
        <form onSubmit={handleSubmit((d) => console.log("Success!", d))}>
            <header>
                <h2>React-hook-form</h2>
                <h4>Render Count :{count}</h4>
            </header>

            {list.map((item) => {
                return (
                    formComponent(item)
                )
            })}
            <button type="submit">Submit</button>
        </form>
    );
};
