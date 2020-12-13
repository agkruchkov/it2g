import React from "react";
import { Form, Button } from "bootstrap-4-react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasks";

const CreateForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTask({
        title: event.target[0].value,
        description: event.target[1].value,
      })
    );
    event.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <label htmlFor="addTaskTitle">Enter task</label>
        <Form.Input
          type="text"
          id="addTaskTitle"
          placeholder="Enter task title"
        />
        <Form.Text text="muted">
          You can move to the next field by pressing the key TAB
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Input
          type="text"
          id="addTaskDescription"
          placeholder="Enter task description"
        />
        <Form.Text text="muted">
          You can enter a task by pressing the key ENTER
        </Form.Text>
      </Form.Group>
      <Button primary outline>
        Submit
      </Button>
    </Form>
  );
};

export default CreateForm;
