import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTasks, requestTasks, deleteTask, updateTask } from "../store/tasks";
import FadeLoader from "react-spinners/FadeLoader";
import { Container, Row, Col } from "bootstrap-4-react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import TaskPage from "./TaskPage";
import { getParam } from "../store/param";

const VisibleTodoList = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const tasks = useSelector(getTasks);
  const { filter } = useSelector(getParam);

  let filteredTasks = tasks.items;

  const loadTasks = async () => {
    setIsLoading(true);
    await dispatch(requestTasks);
    setIsLoading(false);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleClick = (id) => {
    dispatch(deleteTask(id));
  };

  const handleClickCompleted = (id, completed) => {
    dispatch(updateTask(id, !completed));
  };

  if (filter === "All") filteredTasks = tasks.items;
  else
    filteredTasks = tasks.items.filter((item) =>
      filter === "Active" ? !item.completed : item.completed
    );

  if (!filteredTasks)
    return (
      <div className="data-loading container">
        <span>Данные загружаются</span>
        <FadeLoader loading={isLoading} />
      </div>
    );

  return (
    <div className="main__visible-tasks-list">
      <Switch>
        <Route exact path="/" component="App">
          <Container>
            {filteredTasks
              .map((task, index) => (
                <Row
                  key={index}
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  <Col
                    className="tasks-list__title"
                    onClick={() =>
                      handleClickCompleted(task.id, task.completed)
                    }
                  >
                    {task.title}
                  </Col>
                  <Col col="2">
                    <Link to={`/tasks/${task.id}`}>More details...</Link>
                  </Col>
                  <Col
                    col="2"
                    className="tasks-list__delete"
                    onClick={() => handleClick(task.id)}
                  >
                    Delete
                  </Col>
                </Row>
              ))
              .reverse()}
          </Container>
        </Route>
        <Route path="/tasks/:id">
          <TaskPage />
        </Route>
        <Redirect from="/" to="/" />
      </Switch>
    </div>
  );
};

export default VisibleTodoList;
