import axios from "axios";

export const getTasksData = () => axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.data)