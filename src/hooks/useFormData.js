import React, { useEffect, useState } from 'react'
import { getMunicipios, postRegister } from '../api/formApi'

export function useFormData() {

    const [municipios, setMunicipios] = useState([]);

    useEffect(() => {
        getMunicipios()
            .then(dato => setMunicipios(dato))
            .catch(error => console.log(error))
    },[]);

    return { municipios }
}