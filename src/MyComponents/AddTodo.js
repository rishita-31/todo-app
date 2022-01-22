import React, {useState} from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");//usestate and tab. fir values change krlo
    const [desc, setDesc] = useState("");

    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank.");
        }else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
                </form>
        </div>
    )
}
