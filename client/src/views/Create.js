import { navigate } from '@reach/router';
import Axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { useState, useEffect } from 'react';

const Create = props => {

    const[authorForm, setAuthorForm] = useState({
        name: "",
    })

    const [errors, setErrors] = useState({})

    const handleForm = e => {
        setAuthorForm({
            ...authorForm,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/authors/create', authorForm)
            .then(res => {
                console.log(res);
                if(res.data.results){
                    navigate('/');
                } else {
                    setErrors(res.data);
                }
            })
    }

    return (
        <div>
            <h2>Add Author</h2>
            <AuthorForm 
                form={authorForm}
                handleForm={handleForm}
                handleSubmit={handleSubmit}
                errors={errors}
                submitValue="Add Author"
            />
        </div>
    );
}

export default Create;