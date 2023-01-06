import React, { useState, useEffect } from "react";

//Components
import Nav from "./Nav";
import Cards from "../UIComponents/Cards";
import TodoForm from "./TodoForm";
import SearchBar from "../UIComponents/SearchBar";

const Todo = (url) => {
  const [todo, setTodo] = useState([]);

  // const fetchTodos = () => {
  //   fetch("https://6386b780d9b24b1be3dce45b.mockapi.io/todoAPI/Todo")
  //     .then((response) => response.json())
  //     .then((data) => setTodo(data));
  // };

  const fetchTodos = async () => {
    const response = await fetch(
      `https://6386b780d9b24b1be3dce45b.mockapi.io/todoAPI/Todo?orderBy=createdAt&order=desc`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    setTodo(data);
  };

  useEffect(() => {
    fetchTodos();
  }, [url]);

  const handleDone = (data) => {
    fetch(
      `https://6386b780d9b24b1be3dce45b.mockapi.io/todoAPI/Todo/${data.id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          isDone: !data.isDone,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        fetchTodos();
      });
  };

  const deleteTodo = (data) => {
    fetch(
      `https://6386b780d9b24b1be3dce45b.mockapi.io/todoAPI/Todo/${data.id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        fetchTodos();
      });
  };

  return (
    <>
      <div className="h-full bg-slate-100 bg-auto dark:bg-slate-800 xl:h-screen">
        <div className="h-screen dark:bg-slate-800">
          <Nav />

          <div className="mt-5 px-5">
            <SearchBar />
          </div>

          <TodoForm onRefetch={fetchTodos} />

          <div className="z-0 mt-10 grid gap-10 px-14 pb-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {todo &&
              todo.map((data, i) => (
                <Cards
                  onDone={handleDone}
                  onDelete={deleteTodo}
                  data={data}
                  key={i}
                  isDone={data.isDone}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
