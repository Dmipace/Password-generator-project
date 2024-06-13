import { useState } from "react";

export function useForm(initialValue){
    const[values,setValues] = useState(initialValue)
    //vraciame array s values a function to change values
    return[
        values,
        (e) => {
            setValues({//values-predchadzajúce hodnoty
                ...values,
                //a new value pre to sa da name a 
                [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
             })
        }
    ]
 }

 //returnujem values ktroe su v const values
    //a spolu s funkcou s e(event)
    // z tejto funkcie chcem change values
    //a preto v setValues je že chceme predchadzajuce hodnoty(values) a nova hodnota ktora sa najprv skontroluje
    //ked chceme novu(zmeniť) value tak chceme key:value
//                [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
//preto sa tam kontroluje že ak je to chcekbox tak dostanem checkbox value ale ak nie tak len dostanem value

