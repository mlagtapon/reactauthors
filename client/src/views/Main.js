import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

const Main = props => {

    const [author, setAuthor] = useState([]);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthor(res.data.results))
            .catch(err => console.log(err));
    }, [deleted])

    const deleteAuthor = (author_id) => {
        Axios.delete(`http://localhost:8000/api/authors/delete/${author_id}`)
            .then(res => {
                if(res.data.results){
                    console.log("It deleted!")
                    setDeleted(!deleted);
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/new">Add an Author</Link>
            <p>We have quotes by:</p>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Author:</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        author.map((item, index) => <tr key={index}>
                            <td>
                                <Link to={`/author/${item._id}`}>{item.name}</Link>
                            </td>
                            <td>
                                <Link to={`/edit/${item._id}`}>Edit </Link>
                                <button onClick={() => deleteAuthor(item._id)}>Delete</button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main;