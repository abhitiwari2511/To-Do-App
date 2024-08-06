export function CreateToDo() {
    return (
        <>
            <h1>Create a new To-Do</h1>
            <form>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" />
                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description" />
                <button type="submit">Create</button>
            </form>
        </>
    )
}