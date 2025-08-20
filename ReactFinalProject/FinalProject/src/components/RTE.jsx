import { Editor } from '@tinymce/tinymce-react';
import { Controller, useForm } from 'react-hook-form';


export default function RTE()
{
    const { control, handleSubmit } = useForm();
    const submitHandler = (data) => {
    }
    return(
        <Controller
        control={}
        />
    )
}