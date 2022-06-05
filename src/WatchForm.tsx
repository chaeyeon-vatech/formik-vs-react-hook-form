import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React from "react";
import useRenderCount from "@hooks/render-count";

const schema = yup
    .object()
    .shape({
        id: yup.string().required(),
        pw: yup.number().required(),
    })
    .required();

export const WatchForm: React.FC = () => {
    const count = useRenderCount()


    const {register, handleSubmit, watch, getValues, formState} = useForm({
        resolver: yupResolver(schema),
    });


    const watchID = watch(["id"])
    const watchPW = watch("pw")


    return (
        <form onSubmit={handleSubmit((d) => alert(`ID : ${d.id}, PW : ${d.pw}`))}>
            <header>
                <h2>React-hook-form</h2>
            </header>
            <label htmlFor="id">ID : {watchID}</label>
            <input {...register('id')} placeholder="아이디를 입력하세요."
                   style={{color: register('id') ? "red" : "unset"}}/>
            <label htmlFor="pw">Password</label>

            <input type="string" {...register('pw')} placeholder="비밀번호를 입력하세요."
                   style={{color: watchPW ? "red" : "unset"}}/>
            <button type="submit">Submit</button>
        </form>
    );
};
