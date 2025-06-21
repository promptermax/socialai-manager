import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing authentication
    const token = localStorage.getItem('authToken')
    const userData = localStorage.getItem('userData')
    
    if (token && userData) {
      setUser(JSON.parse(userData))
    }
    setIsLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      // Simulate API call
      const mockUser = {
        id: 1,
        email: email,
        name: 'John Doe',
        role: 'admin',
        company: 'Demo Company'
      }
      
      const mockToken = 'mock-jwt-token-' + Date.now()
      
      localStorage.setItem('authToken', mockToken)
      localStorage.setItem('userData', JSON.stringify(mockUser))
      setUser(mockUser)
      
      return { success: true, user: mockUser }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('userData')
    setUser(null)
  }

  const register = async (userData) => {
    try {
      // Simulate API call
      const newUser = {
        id: Date.now(),
        ...userData,
        role: 'user'
      }
      
      const mockToken = 'mock-jwt-token-' + Date.now()
      
      localStorage.setItem('authToken', mockToken)
      localStorage.setItem('userData', JSON.stringify(newUser))
      setUser(newUser)
      
      return { success: true, user: newUser }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const value = {
    user,
    login,
    logout,
    register,
    isLoading,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

