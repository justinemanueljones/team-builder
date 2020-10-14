import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
const initialFriendsList = [
  
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialFriendsList })
  },
  post(url, { username, email, role }) {
    const newFriend = { id: uuid(), username, email, role }
    return Promise.resolve({ status: 200, success: true, data: newFriend })
  }
}