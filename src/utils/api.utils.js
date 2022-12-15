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
      const { data } = await this.api.get('/user')
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
  addCompletedDay = async (habitId, days_completed) => {
    try {
      await this.api.put(`/habit/${habitId}`, days_completed)
    } catch (error) {
      throw error
    }
  }
  postAnalysis = async (habitId) => {
    try {
     const { data } = await this.api.post('/analysis', habitId)
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

  getAnalysis = async () => {
    try {
      const { data } = await this.api.get('/analysis')
      return data
    } catch (error) {
      throw error
    }
  }

  putUsername = async (username) => {
    try {
      await this.api.put('/user/edit-username', username)
    } catch (error) {
      throw error
    }
  }

  putPassword = async (password) => {
    try {
      await this.api.put('/user/edit-password', password)
    } catch (error) {
      throw error
    }
  }

  uploadImage = async (file) => {
    const formData = new FormData()
    formData.append('image', file)
    try {
      const { data }= await this.api.put('/user/upload-image', formData)
      return data
    } catch (error) {
      throw error
    }
  }
  putAnalysisHabits = async (analysis,habits) => {
    try {
      const { data } = await this.api.put(`/analysis/habits/${analysis._id}`, habits)
      return data
    } catch (error) {
      throw error
    }
  }
  putAnalysis = async (analysis,update)=>{
    try {
      await this.api.put(`/analysis/${analysis[analysis.length - 1]._id}`,update)
    } catch (error) {
      console.log(error)
    }
  }
}

export default new Api()
