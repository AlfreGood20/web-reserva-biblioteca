import { useRef, useState } from "react";
import { postRegister } from "../api/formApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useRegister() {

    const navegar = useNavigate();
    const modalRef = useRef(null);
    
    const abrirModal = () => { modalRef.current?.showModal(); };
    const cerrarModal = () => { modalRef.current?.close(); };

    const registrar = async (data) => {
        
        const response = await postRegister(data);
        const body = await response.json();

        if(!response.ok){
            throw new Error(body.menssaje);
        }
        
    };

    return { registrar, modalRef, abrirModal, cerrarModal};
}