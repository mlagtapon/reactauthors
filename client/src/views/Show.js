import Axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from '@reach/router';


const Show = props => {
    const [author, setAuthor] = useState(null)

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/authors/${props.id}`)
            .then(res => {
                setAuthor(res.data.results)
                console.log(props)
            })
            .catch(err => console.log(err))
    }, [props])

    return (
        author ?
        <div>
            <div>
                <h1>Name: {author.name}</h1>
            </div>
            <Link to={`/edit/${props.id}`}>Edit </Link>
        </div> 
        
        :

        <div>
        <p> We're sorry, but we could not find the author you are looking for.</p>
        <p> Would you like to add this author to our database?` </p>
        <Link to="/new"> Add Author </Link>
        </div>

    );
}

export default Show;