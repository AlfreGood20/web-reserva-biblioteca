import { useRef, useState } from "react";
import { postRegister } from "../api/formApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useRegister() {

    const navegar = useNavigate();
    const modalRef = useRef(null);
    
    const abrirModal = () => { modalRef.current?.showModal(); };
    const cerrarModal = () => { modalRef.current?.close(); };

    const registrar = (data) => {
        postRegister(data)
            .then(async response => {
                const body = await response.json();

                if (response.status === 201) {
                    navegar('/login');
                    toast.success("Registro exitoso.");
                    return;
                }

                cerrarModal();
                toast.error(body.menssaje);
            })
            .catch(error => {
                toast.error("Error al conectar con el servidor");
                console.log(error);
            })
    };

    return { registrar, modalRef, abrirModal};
}