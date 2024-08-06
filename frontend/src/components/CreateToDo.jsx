import "../components/CreateToDo.css"

export function CreateToDo() {
    return (
        <>
            <h1>Create a new To-Do</h1>
            <form className="formInput">
                <label className="label" htmlFor="title">Title</label>
                <input className="input" type="text" id="title" name="title" />
                <label className="label" htmlFor="description">Description</label>
                <input className="descriptionInput" type="text" id="description" name="description" />
                <br/>
                <button type="submit">Create</button>
            </form>
        </>
    )
}