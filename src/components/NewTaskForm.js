import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [text, SetText] = useState("Pass the tests");
  const [category, setCategory] = useState("Code");

  function handleSubmit(e){
    e.preventDefault();
    onTaskFormSubmit({text, category});
    SetText("Pass the tests");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat}> {cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
