function filterTasks(tasks, filterValue) {
    if (filterValue === 'completed') {
        return tasks.filter(task => task.completed);
    }
    if (filterValue === 'pending') {
        return tasks.filter(task => !task.completed);
    }
    return tasks; // 'all' or any other value
}

export default filterTasks;