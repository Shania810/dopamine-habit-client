import axios from 'axios'

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://dopamine-habit-server.cyclic.app/',
    })

    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token')
        if (token) {
          config.headers = {
            Authorization: `Bearer ${token}`,
          }
        }
        return config
      },
      (error) => {
        console.log(error)
      }
    )

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          localStorage.removeItem('token')
          window.location = '/'
        }
        throw error
      }
    )
  }

  signup = async (signupInfo) => {
    try {
      await this.api.post('/signup', signupInfo)
    } catch (error) {
      throw error.response.data.message
    }
  }

  login = async (loginInfo) => {
    try {
      const { data } = await this.api.post('/login', loginInfo)
      localStorage.setItem('token', data.token)
    } catch (error) {
      throw error.response.data.message
    }
  }

  getHabits = async () => {
    try {
      const { data } = await this.api.get('/habit')
      return data
    } catch (error) {
      throw error
    }
  }

  getChallenges = async () => {
    try {
      const { data } = await this.api.get('/challenge')
      return data
    } catch (error) {
      throw error
    }
  }

  getUser = async () => {
    try {
      const {data} = await this.api.get('/user')
      return data      
    } catch (error) {
      throw error
    }
  }

  addNewHabit = async (newHabit) => {
    try {
      const { data } = await this.api.post('/habit', newHabit)
      return data
    } catch (error) {
      throw error
    }
  }

  deleteHabit = async (id) => {
    try {
      await this.api.delete(`/habit/${id}`)
      this.getHabits()
    } catch (error) {
      throw error
    }
  }

  // getOneChallenge = async (id) => {
  //   try {
  //     const { data } = await this.api.get(`/challenge/${id}`)
  //     return data
  //   } catch (error) {
  //     throw error
  //   }
  // }

  // challengeToHabit = async (newHabit) => {
  //   try {
  //     await this.api.post('/habit', newHabit)
  //   } catch (error) {
  //     throw error
  //   }
  // }
}

export default new Api()
