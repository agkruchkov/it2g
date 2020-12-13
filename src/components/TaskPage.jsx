import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTasks } from "../store/tasks";
import { Button } from "bootstrap-4-react";

const TaskPage = () => {
  const { id } = useParams();
  const tasks = useSelector(getTasks);

  const currentTask = tasks.items.find((task) => task.id === id);

  return (
    <section>
      <h1>{currentTask.title}</h1>
      <div>{currentTask.description}</div>
      <Link to="/">
        <Button secondary outline>
          Back
        </Button>
      </Link>
    </section>
  );
};

export default TaskPage;
