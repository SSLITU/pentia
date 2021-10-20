import React from 'react';
import { useForm } from "react-hook-form";
import './form.css';

type UserName = string;
type Email = string;
type Phone = string;
type PostalCode = string;
type City = string;

type User = {
    name: UserName;
    email: Email;
    phone: Phone;
    code?: PostalCode;
    city?: City;
}

interface UserObject {
    [key: string]: User;
}

export const Form: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<User>();
    
    const emailReg = /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/;
    const phoneReg = /\d{8}/;

    const onSubmit = (data: User) => {
        console.log(data);
        alert("Thank for your interest in Pentia! We will get back to you as soon as possible");
        // Send To Server Or Cloud

        const form = document.getElementById("form");
        if (form) (form as HTMLFormElement).reset();
        
    }

    return (
        <div className="grid-container">
            <form className="form" id="form" onSubmit={handleSubmit(onSubmit)}>

                <input className="form-input" type="text" placeholder="* Name" {...register("name", { required: "* Please type your name" })} />

                <input className="form-input" type="text" placeholder="* Email" {...register("email", { required: true, pattern: emailReg })} />

                <input className="form-input" type="tel" placeholder="* Mobil" {...register("phone", { required: true, pattern: phoneReg })} />

                <input className="form-input" type="text" placeholder="Postnr" {...register("code")} />

                <input className="form-input" type="text" placeholder="By" {...register("city")} />

                {errors.name && <p className="errorMessage">{errors.name.message}</p>}
                {errors.phone && <p className="errorMessage"> * Please type a valid phone number </p>}
                {errors.email && <p className="errorMessage"> * Please type a valid email </p>}

                <input className="form-cta" type="submit" />
            </form>
        </div>
    )
}