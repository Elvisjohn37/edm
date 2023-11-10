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
        .get('http://localhost:8000/users?_sort=id&_order=desc&_expand=role')
        .then(success)
        .catch(error)
        .finally(completed)
}

const insertUser = ({ data, success, error, completed }) => {
    axios
        .post('http://localhost:8000/users?_expand=role', data)
        .then(success)
        .catch(error)
        .finally(completed)
}

const deleteUser = ({ data, success, error, completed }) => {
    axios
        .delete(`http://localhost:8000/users/${data.id}`)
        .then(success)
        .catch(error)
        .finally(completed)
}

const editUser = ({ data, success, error, completed }) => {
    axios
        .put(`http://localhost:8000/users/${data.id}`, data)
        .then(success)
        .catch(error)
        .finally(completed)
}

export { login, getUsers, deleteUser, insertUser, editUser }
