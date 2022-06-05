import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React from "react";

const schema = yup
    .object()
    .shape({
        id: yup.string().required(),
        pw: yup.number().required(),
    })
    .required();

export const LoginForm: React.FC = () => {

    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit((d) => alert(`ID : ${d.id}, PW : ${d.pw}`))}>
            <header>
                <h2>React-hook-form</h2>
            </header>
            <label htmlFor="id">ID</label>

            <input {...register('id')} placeholder="아이디를 입력하세요."/>
            <label htmlFor="id">Password</label>

            <input type="string" {...register('pw')} placeholder="비밀번호를 입력하세요."/>
            <button type="submit">Submit</button>
        </form>
    );
};
