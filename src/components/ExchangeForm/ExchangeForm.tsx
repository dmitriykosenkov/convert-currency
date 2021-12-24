import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomSelect from "../Select/CustomSelect";
import s from "./ExchangeForm.module.css";


const ExchangeForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [submit, setSubmit] = useState(false)
  return (
    <form
    className={s.formBody}
      onSubmit={handleSubmit((data) => {
        console.log(data);
        setSubmit(prev => !prev)
      })}
    >
      <input type="text" {...register("neededValue")} />
      <CustomSelect
        title={"Валюта"}
        {...register("currency")}
        submit={submit}
        setValue={setValue}
        error={errors}
        name="currency"
        options={["aaaaa", "bbbbb", "ccccc"]}
        value={""}
      />
      <input type="submit" />
    </form>
  );
};

export default ExchangeForm;
