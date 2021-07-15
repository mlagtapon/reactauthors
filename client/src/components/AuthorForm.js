import { Link } from '@reach/router';

const AuthorForm = props => {
    const {form, handleForm, handleSubmit, submitValue, errors} = props;

    return(
        <>
        <Link to="/">Home </Link>
        <form className="mx-auto card p-3 bg-light col-4" onSubmit={handleSubmit} >
            <div className="form-group">
            <label className="col-sm-2 col-form-label">Name:</label>
            <input type="text"
                value={form.name}
                name="name"
                onChange={handleForm}
            />
            </div>
            <div className="form-group col-sm-10 offset-sm-2">
            <Link to="/" className="btn btn-primary">Cancel</Link>
            <input type="submit" className="btn btn-primary" value={submitValue} />
            <span>{errors.name ? errors.name.message : "" }</span>
            </div>
        </form>
        </>
    );    
}

export default AuthorForm;