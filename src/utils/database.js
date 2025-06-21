// Database Schema for SocialAI Manager
// This would typically be implemented with a real database like PostgreSQL or MongoDB
// For this demo, we'll use localStorage and mock data structures

export const DatabaseSchema = {
  // Users table
  users: {
    id: 'string', // UUID
    email: 'string',
    name: 'string',
    password: 'string', // hashed
    role: 'string', // 'admin', 'user', 'team_member'
    company: 'string',
    avatar: 'string', // URL
    createdAt: 'datetime',
    updatedAt: 'datetime',
    isActive: 'boolean',
    lastLogin: 'datetime'
  },

  // Teams table
  teams: {
    id: 'string',
    name: 'string',
    description: 'string',
    companyId: 'string',
    createdBy: 'string', // user ID
    createdAt: 'datetime',
    updatedAt: 'datetime'
  },

  // Team Members table
  teamMembers: {
    id: 'string',
    teamId: 'string',
    userId: 'string',
    role: 'string', // 'admin', 'member', 'viewer'
    joinedAt: 'datetime'
  },

  // Posts table
  posts: {
    id: 'string',
    title: 'string',
    content: 'text',
    type: 'string', // 'text', 'image', 'video', 'carousel'
    status: 'string', // 'draft', 'scheduled', 'published', 'failed'
    platforms: 'array', // ['instagram', 'facebook', 'twitter', 'linkedin', 'tiktok']
    scheduledAt: 'datetime',
    publishedAt: 'datetime',
    createdBy: 'string', // user ID
    teamId: 'string',
    aiGenerated: 'boolean',
    aiPrompt: 'text',
    mediaUrls: 'array', // URLs to images/videos
    hashtags: 'array',
    mentions: 'array',
    createdAt: 'datetime',
    updatedAt: 'datetime'
  },

  // Templates table
  templates: {
    id: 'string',
    name: 'string',
    description: 'string',
    content: 'text',
    type: 'string', // 'post', 'story', 'ad'
    category: 'string',
    platforms: 'array',
    createdBy: 'string',
    teamId: 'string',
    isPublic: 'boolean',
    usageCount: 'number',
    createdAt: 'datetime',
    updatedAt: 'datetime'
  },

  // Documents table (for AI context)
  documents: {
    id: 'string',
    name: 'string',
    type: 'string', // 'brand_guide', 'business_plan', 'market_research'
    content: 'text',
    fileUrl: 'string',
    uploadedBy: 'string',
    teamId: 'string',
    isProcessed: 'boolean',
    aiSummary: 'text',
    createdAt: 'datetime',
    updatedAt: 'datetime'
  },

  // Calendar Events table
  calendarEvents: {
    id: 'string',
    title: 'string',
    description: 'string',
    startDate: 'datetime',
    endDate: 'datetime',
    type: 'string', // 'post', 'campaign', 'meeting'
    postId: 'string', // optional, if linked to a post
    createdBy: 'string',
    teamId: 'string',
    createdAt: 'datetime',
    updatedAt: 'datetime'
  },

  // Activity Logs table
  activityLogs: {
    id: 'string',
    userId: 'string',
    action: 'string', // 'created_post', 'scheduled_post', 'generated_content'
    entityType: 'string', // 'post', 'template', 'user'
    entityId: 'string',
    details: 'json', // additional metadata
    ipAddress: 'string',
    userAgent: 'string',
    createdAt: 'datetime'
  },

  // Social Media Accounts table
  socialAccounts: {
    id: 'string',
    platform: 'string', // 'instagram', 'facebook', 'twitter', 'linkedin', 'tiktok'
    accountId: 'string', // platform-specific ID
    username: 'string',
    displayName: 'string',
    accessToken: 'string', // encrypted
    refreshToken: 'string', // encrypted
    tokenExpiresAt: 'datetime',
    isActive: 'boolean',
    connectedBy: 'string', // user ID
    teamId: 'string',
    createdAt: 'datetime',
    updatedAt: 'datetime'
  },

  // Analytics table
  analytics: {
    id: 'string',
    postId: 'string',
    platform: 'string',
    metrics: 'json', // likes, shares, comments, reach, impressions
    recordedAt: 'datetime',
    createdAt: 'datetime'
  },

  // Notifications table
  notifications: {
    id: 'string',
    userId: 'string',
    type: 'string', // 'post_published', 'post_failed', 'team_invite'
    title: 'string',
    message: 'string',
    isRead: 'boolean',
    actionUrl: 'string', // optional
    createdAt: 'datetime'
  }
}

// Mock data generators for development
export const generateMockData = () => {
  const mockUsers = [
    {
      id: '1',
      email: 'admin@demo.com',
      name: 'Admin User',
      role: 'admin',
      company: 'Demo Company',
      avatar: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true,
      lastLogin: new Date().toISOString()
    },
    {
      id: '2',
      email: 'user@demo.com',
      name: 'Regular User',
      role: 'user',
      company: 'Demo Company',
      avatar: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true,
      lastLogin: new Date().toISOString()
    }
  ]

  const mockPosts = [
    {
      id: '1',
      title: 'Welcome to SocialAI Manager',
      content: 'Excited to announce our new AI-powered social media management platform! 🚀',
      type: 'text',
      status: 'published',
      platforms: ['instagram', 'twitter', 'linkedin'],
      scheduledAt: null,
      publishedAt: new Date().toISOString(),
      createdBy: '1',
      teamId: '1',
      aiGenerated: false,
      aiPrompt: null,
      mediaUrls: [],
      hashtags: ['#SocialAI', '#AI', '#SocialMedia'],
      mentions: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: '2',
      title: 'AI Content Generation Demo',
      content: 'Check out how our AI can create engaging content for your brand! Perfect for busy marketers.',
      type: 'text',
      status: 'scheduled',
      platforms: ['facebook', 'instagram'],
      scheduledAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      publishedAt: null,
      createdBy: '1',
      teamId: '1',
      aiGenerated: true,
      aiPrompt: 'Create a post about AI content generation benefits',
      mediaUrls: [],
      hashtags: ['#AI', '#ContentCreation', '#Marketing'],
      mentions: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ]

  const mockTeams = [
    {
      id: '1',
      name: 'Marketing Team',
      description: 'Main marketing team for Demo Company',
      companyId: 'demo-company',
      createdBy: '1',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ]

  return {
    users: mockUsers,
    posts: mockPosts,
    teams: mockTeams,
    teamMembers: [
      { id: '1', teamId: '1', userId: '1', role: 'admin', joinedAt: new Date().toISOString() },
      { id: '2', teamId: '1', userId: '2', role: 'member', joinedAt: new Date().toISOString() }
    ],
    templates: [],
    documents: [],
    calendarEvents: [],
    activityLogs: [],
    socialAccounts: [],
    analytics: [],
    notifications: []
  }
}

