import * as React from "react";
import { useForm, useFieldArray } from "react-hook-form";

type FormValues = {
    test: {
        name: string;
        age: number;
    }[];
};

let renderCount = 0;

export default function FormArray() {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({
        defaultValues: {
            test: [{ name: "test", age: 23 }]
        },
        mode: "onBlur"
    });
    const { fields, append, remove } = useFieldArray({
        name: "test",
        control
    });
    const onSubmit = (data: FormValues) => console.log(data);
    renderCount++;

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field, index) => {
                    return (
                        <div key={field.id}>
                            <section className={"section"} key={field.id}>
                                <input
                                    placeholder="name"
                                    {...register(`test.${index}.name` as const, {
                                        required: true
                                    })}
                                    className={errors?.test?.[index]?.name ? "error" : ""}
                                    defaultValue={field.name}
                                />
                                <input
                                    placeholder="value"
                                    type="number"
                                    {...register(`test.${index}.age` as const, {
                                        valueAsNumber: true,
                                        required: true
                                    })}
                                    className={errors?.test?.[index]?.age ? "error" : ""}
                                    defaultValue={field.age}
                                />
                                <button type="button" onClick={() => remove(index)}>
                                  -
                                </button>
                            </section>
                        </div>
                    );
                })}


                <button
                    type="button"
                    onClick={() =>
                        append({
                            name: "",
                            age: 0
                        })
                    }
                >
                    +
                </button>
                <input type="submit" />
            </form>
        </div>
    );
}
