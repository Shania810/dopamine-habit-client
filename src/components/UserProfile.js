import React, { useEffect, useState } from 'react'
import { PageHeader1 } from '../pages/style.js'
import Api from '../utils/api.utils.js'
import { ImageProfile } from './commons.js'
import EntryCard from './EntryCard/EntryCard.js'

export const UserProfile = () => {
  const [user, setUser] = useState({})
  const getUser = async () => {
    try {
      const data = await Api.getUser()
      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div>
      <PageHeader1 to="/user"> update your profile </PageHeader1>
      <EntryCard>
        <div>
          <ImageProfile src={user.imageURL} alt={user.imageURL} />
          <p>
            <b>Hi, {user.username}</b>
          </p>
        </div>
      </EntryCard>
    </div>
  )
}
