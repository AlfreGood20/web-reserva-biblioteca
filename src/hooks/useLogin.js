import { useState } from "react";
import { postLogin } from "../api/authApi";

export function useLogin() {

    const entrar =  async (data) => {

        const response = await postLogin(data);
        const body = await response.json();

        if(response.status != 200){
            throw new Error(body.menssaje);
        }

        return body;
    }

    return { entrar };
}