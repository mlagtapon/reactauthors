import { useState, useEffect } from 'react';
import AuthorForm from '../components/AuthorForm';
import Axios from 'axios';
import { navigate, Link } from '@reach/router';

const Edit = props => {
    const [authorForm, setAuthorForm] = useState({
        name:""
    })

    const[errors,setErrors] = useState({
        name:"",
    })

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/authors/${props.id}`)
            .then(res => setAuthorForm(res.data.results))
            .catch(err => console.log(err))
    }, [props])

    const handleForm = e => {
        setAuthorForm({
            ...authorForm,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdate = e => {
        e.preventDefault();
        // if (authorForm.name.length < 3) return;

        Axios.put(`http://localhost:8000/api/authors/update/${props.id}`, authorForm)
            // .catch(err => console.log(err))
            .then(res => {
                console.log(res);
                if(res.data.results){
                    navigate(`/edit/${props.id}`);
                } else {
                    setErrors(res.data);
                }
            })
    }

    return (
        <div>
            <h4>Edit this author:</h4>
            <AuthorForm
                form={authorForm}
                errors={errors}
                handleForm={handleForm}
                submitValue="Edit"
                handleSubmit={handleUpdate}
            />
        </div>
    )
}

export default Edit;