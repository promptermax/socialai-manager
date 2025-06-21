import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { ToastProvider } from './contexts/ToastContext'
import LoginPage from './pages/LoginPage'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import AIGenerator from './pages/AIGenerator'
import Calendar from './pages/Calendar'
import AdminPanel from './pages/AdminPanel'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated (from localStorage or API)
    const token = localStorage.getItem('authToken')
    if (token) {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <Router>
            <div className="min-h-screen bg-background">
              <Routes>
                <Route 
                  path="/login" 
                  element={
                    !isAuthenticated ? (
                      <LoginPage onLogin={() => setIsAuthenticated(true)} />
                    ) : (
                      <Navigate to="/dashboard" replace />
                    )
                  } 
                />
                {isAuthenticated ? (
                  <Route 
                    path="/*" 
                    element={
                      <DashboardLayout onLogout={() => setIsAuthenticated(false)}>
                        <Routes>
                          <Route path="/dashboard" element={<Dashboard />} />
                          <Route path="/ai-generator" element={<AIGenerator />} />
                          <Route path="/calendar" element={<Calendar />} />
                          <Route path="/admin" element={<AdminPanel />} />
                          <Route path="/" element={<Navigate to="/dashboard" replace />} />
                        </Routes>
                      </DashboardLayout>
                    }
                  />
                ) : (
                  <Route path="/*" element={<Navigate to="/login" replace />} />
                )}
              </Routes>
            </div>
          </Router>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App

