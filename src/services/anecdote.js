import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    console.log(`response.data is ${response.data}`)
    return response.data
}

const createNew = async (content) => {
    const object = {content, votes: 0}
    const response = await axios.post(baseUrl, object)
    return response.data
}

const incrementVote = async (anecdote) => {
    const updatedAnec = { content: anecdote.content, votes: anecdote.votes + 1}
    console.log(`anecdote id is ${anecdote.id}`)
    const response = await axios.put(`${baseUrl}/${anecdote.id}`,updatedAnec)
    return response.data
}
export default { getAll, createNew, incrementVote }