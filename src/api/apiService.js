// API service utilities for SocialAI Manager
// This handles all API calls and data management

class APIService {
  constructor() {
    this.baseURL = '/api'
    this.token = localStorage.getItem('authToken')
  }

  // Helper method to make API calls
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { Authorization: `Bearer ${this.token}` })
      },
      ...options
    }

    if (config.body && typeof config.body === 'object') {
      config.body = JSON.stringify(config.body)
    }

    try {
      const response = await fetch(url, config)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  // Authentication methods
  async login(email, password) {
    return this.request('/auth/login', {
      method: 'POST',
      body: { email, password }
    })
  }

  async register(userData) {
    return this.request('/auth/register', {
      method: 'POST',
      body: userData
    })
  }

  async logout() {
    return this.request('/auth/logout', {
      method: 'POST'
    })
  }

  // User methods
  async getCurrentUser() {
    return this.request('/users/me')
  }

  async updateUser(userId, userData) {
    return this.request(`/users/${userId}`, {
      method: 'PUT',
      body: userData
    })
  }

  async getUsers() {
    return this.request('/users')
  }

  // Posts methods
  async getPosts(filters = {}) {
    const queryParams = new URLSearchParams(filters).toString()
    return this.request(`/posts${queryParams ? `?${queryParams}` : ''}`)
  }

  async getPost(postId) {
    return this.request(`/posts/${postId}`)
  }

  async createPost(postData) {
    return this.request('/posts', {
      method: 'POST',
      body: postData
    })
  }

  async updatePost(postId, postData) {
    return this.request(`/posts/${postId}`, {
      method: 'PUT',
      body: postData
    })
  }

  async deletePost(postId) {
    return this.request(`/posts/${postId}`, {
      method: 'DELETE'
    })
  }

  async schedulePost(postId, scheduledAt) {
    return this.request(`/posts/${postId}/schedule`, {
      method: 'POST',
      body: { scheduledAt }
    })
  }

  async publishPost(postId) {
    return this.request(`/posts/${postId}/publish`, {
      method: 'POST'
    })
  }

  // AI methods
  async generateContent(prompt, type = 'text', options = {}) {
    return this.request('/ai/generate', {
      method: 'POST',
      body: { prompt, type, options }
    })
  }

  async generateImage(prompt, options = {}) {
    return this.request('/ai/generate-image', {
      method: 'POST',
      body: { prompt, options }
    })
  }

  async enhanceContent(content, instructions) {
    return this.request('/ai/enhance', {
      method: 'POST',
      body: { content, instructions }
    })
  }

  // Templates methods
  async getTemplates() {
    return this.request('/templates')
  }

  async createTemplate(templateData) {
    return this.request('/templates', {
      method: 'POST',
      body: templateData
    })
  }

  async updateTemplate(templateId, templateData) {
    return this.request(`/templates/${templateId}`, {
      method: 'PUT',
      body: templateData
    })
  }

  async deleteTemplate(templateId) {
    return this.request(`/templates/${templateId}`, {
      method: 'DELETE'
    })
  }

  // Calendar methods
  async getCalendarEvents(startDate, endDate) {
    return this.request(`/calendar/events?start=${startDate}&end=${endDate}`)
  }

  async createCalendarEvent(eventData) {
    return this.request('/calendar/events', {
      method: 'POST',
      body: eventData
    })
  }

  async updateCalendarEvent(eventId, eventData) {
    return this.request(`/calendar/events/${eventId}`, {
      method: 'PUT',
      body: eventData
    })
  }

  async deleteCalendarEvent(eventId) {
    return this.request(`/calendar/events/${eventId}`, {
      method: 'DELETE'
    })
  }

  // Analytics methods
  async getAnalytics(filters = {}) {
    const queryParams = new URLSearchParams(filters).toString()
    return this.request(`/analytics${queryParams ? `?${queryParams}` : ''}`)
  }

  async getPostAnalytics(postId) {
    return this.request(`/analytics/posts/${postId}`)
  }

  async getDashboardStats() {
    return this.request('/analytics/dashboard')
  }

  // Social accounts methods
  async getSocialAccounts() {
    return this.request('/social-accounts')
  }

  async connectSocialAccount(platform, authData) {
    return this.request('/social-accounts/connect', {
      method: 'POST',
      body: { platform, authData }
    })
  }

  async disconnectSocialAccount(accountId) {
    return this.request(`/social-accounts/${accountId}/disconnect`, {
      method: 'POST'
    })
  }

  // Teams methods
  async getTeams() {
    return this.request('/teams')
  }

  async createTeam(teamData) {
    return this.request('/teams', {
      method: 'POST',
      body: teamData
    })
  }

  async updateTeam(teamId, teamData) {
    return this.request(`/teams/${teamId}`, {
      method: 'PUT',
      body: teamData
    })
  }

  async deleteTeam(teamId) {
    return this.request(`/teams/${teamId}`, {
      method: 'DELETE'
    })
  }

  async getTeamMembers(teamId) {
    return this.request(`/teams/${teamId}/members`)
  }

  async addTeamMember(teamId, userData) {
    return this.request(`/teams/${teamId}/members`, {
      method: 'POST',
      body: userData
    })
  }

  async removeTeamMember(teamId, userId) {
    return this.request(`/teams/${teamId}/members/${userId}`, {
      method: 'DELETE'
    })
  }

  // Documents methods
  async getDocuments() {
    return this.request('/documents')
  }

  async uploadDocument(formData) {
    return this.request('/documents/upload', {
      method: 'POST',
      body: formData,
      headers: {} // Let browser set content-type for FormData
    })
  }

  async deleteDocument(documentId) {
    return this.request(`/documents/${documentId}`, {
      method: 'DELETE'
    })
  }

  // Notifications methods
  async getNotifications() {
    return this.request('/notifications')
  }

  async markNotificationRead(notificationId) {
    return this.request(`/notifications/${notificationId}/read`, {
      method: 'POST'
    })
  }

  async markAllNotificationsRead() {
    return this.request('/notifications/read-all', {
      method: 'POST'
    })
  }
}

// Create a singleton instance
const apiService = new APIService()

export default apiService

// Export individual methods for convenience
export const {
  login,
  register,
  logout,
  getCurrentUser,
  updateUser,
  getUsers,
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  schedulePost,
  publishPost,
  generateContent,
  generateImage,
  enhanceContent,
  getTemplates,
  createTemplate,
  updateTemplate,
  deleteTemplate,
  getCalendarEvents,
  createCalendarEvent,
  updateCalendarEvent,
  deleteCalendarEvent,
  getAnalytics,
  getPostAnalytics,
  getDashboardStats,
  getSocialAccounts,
  connectSocialAccount,
  disconnectSocialAccount,
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam,
  getTeamMembers,
  addTeamMember,
  removeTeamMember,
  getDocuments,
  uploadDocument,
  deleteDocument,
  getNotifications,
  markNotificationRead,
  markAllNotificationsRead
} = apiService

