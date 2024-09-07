import { useState } from "react";
import "../components/CreateToDo.css"

export function CreateToDo() {
    // optimal way is using react-query

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <>
            <h1>Create a new To-Do</h1>
            <form className="formInput">
                <label className="label" htmlFor="title">Title</label>
                <input onChange={(e) => {
                    const value = e.target.value;
                    setTitle(value);
                }} className="input" type="text" id="title" name="title" />
                <label className="label" htmlFor="description">Description</label>
                <input onChange={(e) => {
                    const value = e.target.value;
                    setDescription(value);
                }} className="descriptionInput" type="text" id="description" name="description" />
                <br/>
                <button onClick={(e) => {
                    e.preventDefault();
                    fetch("https://vercel.com/abhishek-tiwaris-projects-880cd6ab/to-do-app/9iwJBYto68VUSdMErPu8TdJdsidD/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                            completed: false
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })
                    .then(async (res) => {
                        const json = await res.json();
                        alert("Todo Added");
                    })
                }} type="submit">Create</button>
            </form>
        </>
    )
}