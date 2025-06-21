import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { useToast } from '../contexts/ToastContext'
import { 
  Calendar as CalendarIcon, 
  Plus, 
  ChevronLeft, 
  ChevronRight,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Edit,
  Trash2,
  Copy,
  Send,
  Eye,
  MoreHorizontal
} from 'lucide-react'

const Calendar = () => {
  const { toast } = useToast()
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [isScheduleDialogOpen, setIsScheduleDialogOpen] = useState(false)
  const [viewMode, setViewMode] = useState('month') // month, week, day

  // Schedule post form state
  const [postContent, setPostContent] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [scheduledDate, setScheduledDate] = useState('')
  const [scheduledTime, setScheduledTime] = useState('')
  const [selectedPlatforms, setSelectedPlatforms] = useState([])
  const [postType, setPostType] = useState('text')

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'bg-pink-500' },
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'bg-blue-600' },
    { id: 'twitter', name: 'Twitter', icon: Twitter, color: 'bg-sky-500' },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-700' },
    { id: 'youtube', name: 'YouTube', icon: Youtube, color: 'bg-red-600' }
  ]

  const [scheduledPosts] = useState([
    {
      id: 1,
      title: 'Product Launch Post',
      content: '🌟 Exciting news! Our new AI-powered social media management platform is here...',
      date: '2025-06-25',
      time: '10:00',
      platforms: ['instagram', 'facebook'],
      status: 'scheduled',
      type: 'text'
    },
    {
      id: 2,
      title: 'Behind the Scenes Content',
      content: 'Take a look behind the scenes at our development process...',
      date: '2025-06-26',
      time: '14:00',
      platforms: ['instagram', 'twitter'],
      status: 'draft',
      type: 'image'
    },
    {
      id: 3,
      title: 'Customer Testimonial',
      content: 'Hear what our customers are saying about SocialAI Manager...',
      date: '2025-06-28',
      time: '11:30',
      platforms: ['linkedin', 'twitter'],
      status: 'scheduled',
      type: 'video'
    },
    {
      id: 4,
      title: 'Weekly Tips',
      content: '💡 Social Media Tip of the Week: Consistency is key to building engagement...',
      date: '2025-06-30',
      time: '09:00',
      platforms: ['instagram', 'facebook', 'twitter'],
      status: 'scheduled',
      type: 'text'
    }
  ])

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }
    
    return days
  }

  const getPostsForDate = (day) => {
    if (!day) return []
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return scheduledPosts.filter(post => post.date === dateStr)
  }

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate)
    newDate.setMonth(currentDate.getMonth() + direction)
    setCurrentDate(newDate)
  }

  const handleSchedulePost = () => {
    if (!postTitle || !postContent || !scheduledDate || !scheduledTime || selectedPlatforms.length === 0) {
      toast.error('Please fill in all required fields')
      return
    }

    // Here you would typically send the data to your backend
    toast.success('Post scheduled successfully!')
    setIsScheduleDialogOpen(false)
    
    // Reset form
    setPostTitle('')
    setPostContent('')
    setScheduledDate('')
    setScheduledTime('')
    setSelectedPlatforms([])
    setPostType('text')
  }

  const handlePlatformToggle = (platformId) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    )
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'draft': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'published': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'failed': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Content Calendar</h1>
          <p className="text-muted-foreground">
            Plan and schedule your social media content
          </p>
        </div>
        
        <Dialog open={isScheduleDialogOpen} onOpenChange={setIsScheduleDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Schedule Post
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Schedule New Post</DialogTitle>
              <DialogDescription>
                Create and schedule content for your social media platforms
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="post-title">Post Title</Label>
                <Input
                  id="post-title"
                  placeholder="Enter a title for your post..."
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="post-content">Content</Label>
                <Textarea
                  id="post-content"
                  placeholder="Write your post content here..."
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="schedule-date">Date</Label>
                  <Input
                    id="schedule-date"
                    type="date"
                    value={scheduledDate}
                    onChange={(e) => setScheduledDate(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="schedule-time">Time</Label>
                  <Input
                    id="schedule-time"
                    type="time"
                    value={scheduledTime}
                    onChange={(e) => setScheduledTime(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Post Type</Label>
                <Select value={postType} onValueChange={setPostType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text">Text Post</SelectItem>
                    <SelectItem value="image">Image Post</SelectItem>
                    <SelectItem value="video">Video Post</SelectItem>
                    <SelectItem value="carousel">Carousel Post</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Platforms</Label>
                <div className="grid grid-cols-2 gap-2">
                  {platforms.map(platform => {
                    const Icon = platform.icon
                    return (
                      <div key={platform.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={platform.id}
                          checked={selectedPlatforms.includes(platform.id)}
                          onCheckedChange={() => handlePlatformToggle(platform.id)}
                        />
                        <label
                          htmlFor={platform.id}
                          className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          <Icon className="h-4 w-4" />
                          {platform.name}
                        </label>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button onClick={handleSchedulePost} className="flex-1">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Schedule Post
                </Button>
                <Button variant="outline" onClick={() => setIsScheduleDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigateMonth(-1)}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <h2 className="text-xl font-semibold">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h2>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigateMonth(1)}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === 'month' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('month')}
                  >
                    Month
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentDate(new Date())}
                  >
                    Today
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {dayNames.map(day => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {getDaysInMonth(currentDate).map((day, index) => {
                  const posts = getPostsForDate(day)
                  const isToday = day && 
                    new Date().getDate() === day && 
                    new Date().getMonth() === currentDate.getMonth() &&
                    new Date().getFullYear() === currentDate.getFullYear()
                  
                  return (
                    <div
                      key={index}
                      className={`min-h-[100px] p-2 border rounded-lg ${
                        day ? 'bg-background hover:bg-muted/50 cursor-pointer' : ''
                      } ${isToday ? 'ring-2 ring-primary' : ''}`}
                      onClick={() => day && setSelectedDate(day)}
                    >
                      {day && (
                        <>
                          <div className={`text-sm font-medium mb-1 ${isToday ? 'text-primary' : ''}`}>
                            {day}
                          </div>
                          <div className="space-y-1">
                            {posts.slice(0, 2).map(post => (
                              <div
                                key={post.id}
                                className="text-xs p-1 rounded bg-primary/10 text-primary truncate"
                                title={post.title}
                              >
                                {post.title}
                              </div>
                            ))}
                            {posts.length > 2 && (
                              <div className="text-xs text-muted-foreground">
                                +{posts.length - 2} more
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Posts Sidebar */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Posts</CardTitle>
              <CardDescription>Your scheduled content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {scheduledPosts
                .filter(post => new Date(post.date + 'T' + post.time) > new Date())
                .sort((a, b) => new Date(a.date + 'T' + a.time) - new Date(b.date + 'T' + b.time))
                .slice(0, 5)
                .map(post => (
                  <div key={post.id} className="p-3 border rounded-lg space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm">{post.title}</h4>
                      <Badge className={getStatusColor(post.status)} variant="secondary">
                        {post.status}
                      </Badge>
                    </div>
                    
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {post.content}
                    </p>
                    
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()} at {post.time}
                    </div>
                    
                    <div className="flex items-center gap-1">
                      {post.platforms.map(platformId => {
                        const platform = platforms.find(p => p.id === platformId)
                        if (!platform) return null
                        const Icon = platform.icon
                        return (
                          <div
                            key={platformId}
                            className={`p-1 rounded ${platform.color} text-white`}
                            title={platform.name}
                          >
                            <Icon className="h-3 w-3" />
                          </div>
                        )
                      })}
                    </div>
                    
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" className="h-6 px-2">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 px-2">
                        <Copy className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 px-2">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 px-2 text-destructive">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">This Week</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Scheduled</span>
                <span className="font-medium">12 posts</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Published</span>
                <span className="font-medium">8 posts</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Drafts</span>
                <span className="font-medium">3 posts</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Calendar

