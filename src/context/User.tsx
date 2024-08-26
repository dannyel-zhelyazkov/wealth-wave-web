import React, { createContext, useEffect, useState } from 'react'

type UserContext = {
  user_id: string | null
}

export const UserContext = createContext<UserContext>({ user_id: '' })

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem('user_id') || ''
  })

  // Update local state when localStorage changes
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      console.log(event.key)
      if (event.key === 'user_id') {
        setValue(event.newValue as string)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return <UserContext.Provider value={{ user_id: value }}>{children}</UserContext.Provider>
}
