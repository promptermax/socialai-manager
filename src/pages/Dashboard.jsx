import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  BarChart3, 
  Users, 
  Calendar, 
  TrendingUp, 
  Plus, 
  Eye,
  Heart,
  MessageCircle,
  Share,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

const Dashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    totalPosts: 0,
    scheduledPosts: 0,
    totalEngagement: 0,
    activeTeamMembers: 0
  })
  const [recentPosts, setRecentPosts] = useState([])
  const [analyticsData, setAnalyticsData] = useState([])

  useEffect(() => {
    // Simulate loading dashboard data
    setStats({
      totalPosts: 156,
      scheduledPosts: 23,
      totalEngagement: 12450,
      activeTeamMembers: 8
    })

    setRecentPosts([
      {
        id: 1,
        title: 'New Product Launch Announcement',
        status: 'published',
        platforms: ['instagram', 'facebook', 'twitter'],
        engagement: { likes: 245, comments: 32, shares: 18 },
        publishedAt: '2 hours ago'
      },
      {
        id: 2,
        title: 'Behind the Scenes Content',
        status: 'scheduled',
        platforms: ['instagram', 'tiktok'],
        scheduledFor: 'Tomorrow at 2:00 PM',
        publishedAt: null
      },
      {
        id: 3,
        title: 'Customer Success Story',
        status: 'draft',
        platforms: ['linkedin', 'facebook'],
        engagement: null,
        publishedAt: null
      }
    ])

    setAnalyticsData([
      { name: 'Mon', posts: 4, engagement: 1200 },
      { name: 'Tue', posts: 6, engagement: 1800 },
      { name: 'Wed', posts: 3, engagement: 900 },
      { name: 'Thu', posts: 8, engagement: 2400 },
      { name: 'Fri', posts: 5, engagement: 1500 },
      { name: 'Sat', posts: 7, engagement: 2100 },
      { name: 'Sun', posts: 4, engagement: 1300 }
    ])
  }, [])

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-green-500'
      case 'scheduled': return 'bg-blue-500'
      case 'draft': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'published': return <CheckCircle className="h-4 w-4" />
      case 'scheduled': return <Clock className="h-4 w-4" />
      case 'draft': return <AlertCircle className="h-4 w-4" />
      default: return <AlertCircle className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back, {user?.name?.split(' ')[0] || 'User'}!
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your social media today.
          </p>
        </div>
        <Button className="w-fit">
          <Plus className="h-4 w-4 mr-2" />
          Create Post
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalPosts}</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled Posts</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.scheduledPosts}</div>
            <p className="text-xs text-muted-foreground">
              Next post in 2 hours
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Engagement</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalEngagement.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +8% from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeTeamMembers}</div>
            <p className="text-xs text-muted-foreground">
              2 active now
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Posts Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Posts This Week</CardTitle>
            <CardDescription>
              Number of posts published each day
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="posts" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Engagement Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Engagement Trends</CardTitle>
            <CardDescription>
              Total engagement across all platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="engagement" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
          <CardDescription>
            Your latest social media activity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div key={post.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${getStatusColor(post.status)}`}>
                    {getStatusIcon(post.status)}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{post.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {post.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {post.platforms.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {post.engagement && (
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {post.engagement.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {post.engagement.comments}
                      </div>
                      <div className="flex items-center gap-1">
                        <Share className="h-4 w-4" />
                        {post.engagement.shares}
                      </div>
                    </div>
                  )}
                  
                  <div className="text-sm text-muted-foreground">
                    {post.publishedAt || post.scheduledFor}
                  </div>

                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Create New Post
            </CardTitle>
            <CardDescription>
              Start creating your next social media post
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Schedule Content
            </CardTitle>
            <CardDescription>
              Plan your content calendar for the week
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              View Analytics
            </CardTitle>
            <CardDescription>
              Analyze your social media performance
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard

