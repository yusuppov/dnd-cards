import { createSlice, nanoid } from '@reduxjs/toolkit';
import rawTasks from '../../data/data.json';
import dictionary from '../../data/dictionay.json';
import { TaskType, DictionaryType } from './types';

const tasks = rawTasks.map((task) => ({
  ...task,
  id: nanoid(),
}));

const initialState = {
  tasks: tasks as TaskType[],
  dictionary: dictionary as DictionaryType,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    updateTaskStatus: (state, action) => {
      const { taskName, newStatusId } = action.payload;
      const task = state.tasks.find((t) => t.taskName === taskName);
      console.log('payload:', taskName, newStatusId);
      console.log('found task:', task);
      if (task) {
        task.statusId = newStatusId;
      }
    },
    removeTask: (state, action) => {
      return { ...state, tasks: state.tasks.filter((_, index) => index !== action.payload) };
    },
    updateTaskName: (state, action) => {
      const { index, newTaskName } = action.payload;
      const task = state.tasks[index];
      if (task) {
        task.taskName = newTaskName;
      }
    },
    addNewTask: (state, action) => {
      const { taskTitle, asigId, statId } = action.payload;
      state.tasks.push({
        id: nanoid(),
        taskName: taskTitle,
        assigneeId: asigId,
        statusId: statId,
      });
    },
    addNewAuthor: (state, action) => {
      const { id, newAuthor } = action.payload;
      const task = state.tasks.find((item) => item.id === id);
      if (task?.assigneeId === newAuthor) return;
      if (task) {
        task.assigneeId = newAuthor;
      }
    },
  },
});
export const { updateTaskStatus, removeTask, updateTaskName, addNewTask, addNewAuthor } =
  tasksSlice.actions;
export default tasksSlice.reducer;
