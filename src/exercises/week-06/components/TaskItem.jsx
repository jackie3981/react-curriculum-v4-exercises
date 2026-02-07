function TaskItem({ task }) {
  return (
    <>
      {task.title} {task.completed ? '✅' : '⏳'}
    </>
  );
}

export default TaskItem;