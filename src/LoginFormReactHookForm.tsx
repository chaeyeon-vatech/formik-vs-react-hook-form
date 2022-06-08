import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React from "react";

const schema = yup
    .object()
    .shape({
        sample1: yup.string().required(),
        sample2: yup.string().required(),
        sample3: yup.string().required(),
        sample4: yup.string().required(),
        sample5: yup.string().required(),
        sample6: yup.string().required(),
    })
    .required();

export const LoginForm: React.FC = () => {

    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });

    const formComponent = (formID: string) => {
        return <>
            <label htmlFor={formID}>{formID}</label>
            <input type="string" {...register('pw')} placeholder="비밀번호를 입력하세요." style={{width: "90%"}}/></>
    }
    const list = Array.from({length: 500}, (v, i) => i);
    return (
        <form onSubmit={handleSubmit((d) => console.log("Success!", d))}>
            <header>
                <h2>React-hook-form</h2>
            </header>

            {list.map((item) => {
                return (
                    formComponent(item.toString())
                )
            })}
            <button type="submit">Submit</button>
        </form>
    );
};
