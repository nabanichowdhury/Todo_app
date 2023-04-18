import React, { useState } from "react";

const Home = () => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const AddTodo = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        date,
        title,
        todo,
      },
    ]);
  };
  return (
    <div className=" flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl">Enter your Todo</h1>
      <ul className="list-disc">
        {todos.map((eachTodo, index) => (
          <li key={index}>
            {eachTodo.date} {eachTodo.title} {eachTodo.todo}
          </li>
        ))}
      </ul>

      <form
        className="flex flex-col space-y-4 w-96 mx-auto mt-6"
        onSubmit={AddTodo}
      >
        <input
          className="outline-none py-2 px-4 shadow"
          type="date"
          placeholder="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <input
          className="outline-none py-2 px-4 shadow"
          type="text"
          placeholder="Type of work"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          className="outline-none py-2 px-4 shadow"
          placeholder="Enter your todo here"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />

        <button
          className="outline-none bg-slate-500 w-24 mx-auto rounded py-2  text-white"
          type="submit"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Home;
