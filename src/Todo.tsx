import React, { useState } from "react";
import styled from "styled-components";
import { Store } from "./Store";
import { List, Card, Form, Button } from "semantic-ui-react";
import { CustomButton } from "./TodoStyled";

type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

// can extend an interface
interface ITodo2 extends ITodo {
  tags: string[];
}

function App(): JSX.Element {
  // it has to be a string
  const [value, setValue] = useState<string>("");
  // it has to be an array of the interface object
  const [todos, setTodos] = useState<ITodo[]>([]);

  // can use a type variable to shorten it
  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const completedTodos: ITodo[] = [...todos];
    completedTodos[index].complete = !completedTodos[index].complete;
    setTodos(completedTodos);
  };

  const deleteTodo = (index: number): void => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1 style={{ margin: 20 }}>Todo List</h1>
      {todos &&
        todos.map((todo: ITodo, index: number) => (
          <CustomCard key={index}>
            <List>
              <List.Item>
                <List.Icon name="users" />
                <List.Content
                  style={{
                    textDecoration: todo.complete ? "line-through" : null
                  }}
                >
                  {todo.text}
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="marker" />
                <List.Content></List.Content>
              </List.Item>
              <CustomButton onClick={() => completeTodo(index)}>
                {todo.complete ? "Complete" : "Incomplete"}
              </CustomButton>
              <CustomButton
                style={{ backgroundColor: "red" }}
                onClick={() => deleteTodo(index)}
              >
                Delete
              </CustomButton>
            </List>
          </CustomCard>
        ))}

      <CustomCard>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Input</label>
            <input
              placeholder="Type something..."
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </CustomCard>
    </>
  );
}

const CustomCard = styled(Card)`
  &&& {
    padding: 20px;
    margin: 20px;
    width: 50%;
  }
`;

export default App;
