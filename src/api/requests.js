import axios from 'axios'

const login = ({ data, success, error, completed }) => {
    axios
        .get('http://localhost:8000/users', data)
        .then(success)
        .catch(error)
        .finally(completed)
}

const getUsers = ({ success, error, completed }) => {
    axios
        .get('http://localhost:8000/users?_expand=role')
        .then(success)
        .catch(error)
        .finally(completed)
}

const deleteTodo = ({ data, success, error, completed }) => {
    axios
        .delete(`http://localhost:8000/users/${data.id}`)
        .then(success)
        .catch(error)
        .finally(completed)
}

export { login, getUsers, deleteTodo }
