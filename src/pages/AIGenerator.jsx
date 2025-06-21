import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '../contexts/ToastContext'
import { 
  Sparkles, 
  Wand2, 
  Image, 
  FileText, 
  Video, 
  Copy, 
  Download, 
  RefreshCw,
  Loader2,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Send
} from 'lucide-react'

const AIGenerator = () => {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState('text')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState('')
  const [generatedImage, setGeneratedImage] = useState('')

  // Text generation state
  const [textPrompt, setTextPrompt] = useState('')
  const [contentType, setContentType] = useState('social-post')
  const [platform, setPlatform] = useState('instagram')
  const [tone, setTone] = useState('professional')

  // Image generation state
  const [imagePrompt, setImagePrompt] = useState('')
  const [imageStyle, setImageStyle] = useState('photorealistic')
  const [aspectRatio, setAspectRatio] = useState('square')

  // Video generation state
  const [videoPrompt, setVideoPrompt] = useState('')
  const [videoDuration, setVideoDuration] = useState('short')

  const contentTypes = [
    { value: 'social-post', label: 'Social Media Post' },
    { value: 'caption', label: 'Caption' },
    { value: 'hashtags', label: 'Hashtags' },
    { value: 'blog-post', label: 'Blog Post' },
    { value: 'email', label: 'Email Campaign' },
    { value: 'ad-copy', label: 'Ad Copy' }
  ]

  const platforms = [
    { value: 'instagram', label: 'Instagram', icon: Instagram },
    { value: 'facebook', label: 'Facebook', icon: Facebook },
    { value: 'twitter', label: 'Twitter', icon: Twitter },
    { value: 'linkedin', label: 'LinkedIn', icon: Linkedin }
  ]

  const tones = [
    { value: 'professional', label: 'Professional' },
    { value: 'casual', label: 'Casual' },
    { value: 'friendly', label: 'Friendly' },
    { value: 'humorous', label: 'Humorous' },
    { value: 'inspiring', label: 'Inspiring' },
    { value: 'urgent', label: 'Urgent' }
  ]

  const imageStyles = [
    { value: 'photorealistic', label: 'Photorealistic' },
    { value: 'illustration', label: 'Illustration' },
    { value: 'cartoon', label: 'Cartoon' },
    { value: 'abstract', label: 'Abstract' },
    { value: 'minimalist', label: 'Minimalist' },
    { value: 'vintage', label: 'Vintage' }
  ]

  const generateTextContent = async () => {
    if (!textPrompt.trim()) {
      toast.error('Please enter a prompt for text generation')
      return
    }

    setIsGenerating(true)
    
    try {
      // Simulate AI text generation
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const mockContent = generateMockContent(textPrompt, contentType, platform, tone)
      setGeneratedContent(mockContent)
      toast.success('Content generated successfully!')
    } catch (error) {
      toast.error('Failed to generate content. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const generateImageContent = async () => {
    if (!imagePrompt.trim()) {
      toast.error('Please enter a prompt for image generation')
      return
    }

    setIsGenerating(true)
    
    try {
      // Simulate AI image generation
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Mock generated image URL
      setGeneratedImage('https://picsum.photos/512/512?random=' + Date.now())
      toast.success('Image generated successfully!')
    } catch (error) {
      toast.error('Failed to generate image. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const generateVideoContent = async () => {
    if (!videoPrompt.trim()) {
      toast.error('Please enter a prompt for video generation')
      return
    }

    setIsGenerating(true)
    
    try {
      // Simulate AI video generation
      await new Promise(resolve => setTimeout(resolve, 5000))
      
      toast.success('Video generation started! You will be notified when ready.')
    } catch (error) {
      toast.error('Failed to generate video. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const generateMockContent = (prompt, type, platform, tone) => {
    const contents = {
      'social-post': {
        instagram: `🌟 Exciting news! ${prompt} 

Ready to transform your social media game? Our AI-powered platform makes content creation effortless and engaging.

✨ Key benefits:
• Save 10+ hours per week
• Increase engagement by 300%
• Never run out of content ideas
• Professional results every time

Join thousands of creators who've already made the switch! 

#SocialAI #ContentCreation #AI #SocialMediaMarketing #DigitalMarketing`,
        
        facebook: `We're thrilled to share something amazing with you! ${prompt}

At SocialAI Manager, we believe that great content shouldn't be hard to create. That's why we've built an AI-powered platform that helps you:

🎯 Generate engaging posts in seconds
📈 Boost your social media performance
⏰ Save valuable time for what matters most
🎨 Create professional content without design skills

Ready to see the difference AI can make for your brand? Try it free today!

What type of content would you like to create first? Let us know in the comments! 👇`,
        
        twitter: `🚀 ${prompt}

AI is changing the game for content creators:
• 10x faster content creation
• Better engagement rates
• Consistent brand voice
• More time for strategy

The future of social media is here. Are you ready?

#AI #SocialMedia #ContentStrategy`,
        
        linkedin: `Professional insight: ${prompt}

In today's digital landscape, content creation has become both more important and more challenging than ever. Here's how AI is revolutionizing the way we approach social media:

🔍 Data-Driven Insights: AI analyzes what resonates with your audience
⚡ Efficiency: Generate weeks of content in minutes
🎯 Personalization: Tailor messages for different platforms and audiences
📊 Performance: Track and optimize based on real-time analytics

The companies that embrace AI-powered content creation today will be the leaders of tomorrow.

What's your experience with AI in content creation? I'd love to hear your thoughts in the comments.

#ArtificialIntelligence #ContentMarketing #DigitalTransformation #SocialMediaStrategy`
      },
      'caption': `Perfect caption for your post: "${prompt}" ✨

This captures the essence of your message while maintaining a ${tone} tone that resonates with your ${platform} audience. 

#Trending #Viral #${platform.charAt(0).toUpperCase() + platform.slice(1)}`,
      
      'hashtags': `#${prompt.replace(/\s+/g, '')} #SocialMedia #ContentCreation #AI #DigitalMarketing #Trending #Viral #Engagement #SocialMediaTips #ContentStrategy #OnlineMarketing #BrandBuilding #SocialMediaManager #ContentCreator #InfluencerMarketing`,
      
      'blog-post': `# ${prompt}

## Introduction

In today's fast-paced digital world, ${prompt.toLowerCase()} has become more important than ever. This comprehensive guide will walk you through everything you need to know.

## Key Points

### 1. Understanding the Basics
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

### 2. Best Practices
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### 3. Advanced Strategies
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

## Conclusion

${prompt} is a powerful tool that can transform your approach to digital marketing. By implementing these strategies, you'll see significant improvements in your results.

*Ready to get started? Contact us today to learn more!*`,
      
      'email': `Subject: ${prompt} - Don't Miss Out!

Hi [Name],

Hope you're having a great day! I wanted to reach out because ${prompt.toLowerCase()} is something I think you'd be really interested in.

Here's what makes this special:
• Immediate impact on your results
• Easy to implement
• Proven track record
• Exclusive opportunity

I'd love to chat more about how this could benefit you specifically. Are you free for a quick 15-minute call this week?

Best regards,
[Your Name]

P.S. This opportunity won't be available much longer, so let's connect soon!`,
      
      'ad-copy': `🎯 ${prompt}

Transform Your Results in Just 30 Days!

✅ Proven system used by 10,000+ businesses
✅ Step-by-step implementation guide
✅ 24/7 support included
✅ 30-day money-back guarantee

Limited Time Offer: Save 50% Today Only!

[Get Started Now] - Button

*Join the thousands who've already transformed their business with our solution.*`
    }

    return contents[type]?.[platform] || contents[type] || `Generated content for: ${prompt}\n\nThis is a ${tone} ${type} optimized for ${platform}. The content has been crafted to engage your audience and drive meaningful interactions.`
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    toast.success('Content copied to clipboard!')
  }

  const downloadContent = (content, filename) => {
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
    toast.success('Content downloaded!')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">AI Content Generator</h1>
        <p className="text-muted-foreground">
          Create engaging content with the power of AI
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="text" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Text Content
          </TabsTrigger>
          <TabsTrigger value="image" className="flex items-center gap-2">
            <Image className="h-4 w-4" />
            Image Generation
          </TabsTrigger>
          <TabsTrigger value="video" className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            Video Content
          </TabsTrigger>
        </TabsList>

        {/* Text Generation Tab */}
        <TabsContent value="text" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="h-5 w-5" />
                  Generate Text Content
                </CardTitle>
                <CardDescription>
                  Create engaging posts, captions, and copy with AI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="text-prompt">Content Prompt</Label>
                  <Textarea
                    id="text-prompt"
                    placeholder="Describe what you want to create... (e.g., 'A post about our new product launch')"
                    value={textPrompt}
                    onChange={(e) => setTextPrompt(e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Content Type</Label>
                    <Select value={contentType} onValueChange={setContentType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {contentTypes.map(type => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Platform</Label>
                    <Select value={platform} onValueChange={setPlatform}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {platforms.map(p => (
                          <SelectItem key={p.value} value={p.value}>
                            <div className="flex items-center gap-2">
                              <p.icon className="h-4 w-4" />
                              {p.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Tone</Label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {tones.map(t => (
                        <SelectItem key={t.value} value={t.value}>
                          {t.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={generateTextContent} 
                  className="w-full" 
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Generate Content
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Generated Content Display */}
            <Card>
              <CardHeader>
                <CardTitle>Generated Content</CardTitle>
                <CardDescription>
                  Your AI-generated content will appear here
                </CardDescription>
              </CardHeader>
              <CardContent>
                {generatedContent ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <pre className="whitespace-pre-wrap text-sm">{generatedContent}</pre>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => copyToClipboard(generatedContent)}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => downloadContent(generatedContent, 'generated-content.txt')}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={generateTextContent}
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Regenerate
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Generated content will appear here</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Image Generation Tab */}
        <TabsContent value="image" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="h-5 w-5" />
                  Generate Images
                </CardTitle>
                <CardDescription>
                  Create stunning visuals with AI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="image-prompt">Image Description</Label>
                  <Textarea
                    id="image-prompt"
                    placeholder="Describe the image you want to create... (e.g., 'A modern office space with plants and natural lighting')"
                    value={imagePrompt}
                    onChange={(e) => setImagePrompt(e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Style</Label>
                    <Select value={imageStyle} onValueChange={setImageStyle}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {imageStyles.map(style => (
                          <SelectItem key={style.value} value={style.value}>
                            {style.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Aspect Ratio</Label>
                    <Select value={aspectRatio} onValueChange={setAspectRatio}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="square">Square (1:1)</SelectItem>
                        <SelectItem value="landscape">Landscape (16:9)</SelectItem>
                        <SelectItem value="portrait">Portrait (9:16)</SelectItem>
                        <SelectItem value="wide">Wide (21:9)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  onClick={generateImageContent} 
                  className="w-full" 
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Generating Image...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Generate Image
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Generated Image Display */}
            <Card>
              <CardHeader>
                <CardTitle>Generated Image</CardTitle>
                <CardDescription>
                  Your AI-generated image will appear here
                </CardDescription>
              </CardHeader>
              <CardContent>
                {generatedImage ? (
                  <div className="space-y-4">
                    <div className="relative">
                      <img 
                        src={generatedImage} 
                        alt="Generated content" 
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          const a = document.createElement('a')
                          a.href = generatedImage
                          a.download = 'generated-image.jpg'
                          a.click()
                          toast.success('Image downloaded!')
                        }}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={generateImageContent}
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Regenerate
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Image className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Generated image will appear here</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Video Generation Tab */}
        <TabsContent value="video" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5" />
                Generate Video Content
              </CardTitle>
              <CardDescription>
                AI-assisted video creation and editing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="video-prompt">Video Description</Label>
                <Textarea
                  id="video-prompt"
                  placeholder="Describe the video you want to create... (e.g., 'A product demonstration showing key features')"
                  value={videoPrompt}
                  onChange={(e) => setVideoPrompt(e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Duration</Label>
                <Select value={videoDuration} onValueChange={setVideoDuration}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short (15-30 seconds)</SelectItem>
                    <SelectItem value="medium">Medium (30-60 seconds)</SelectItem>
                    <SelectItem value="long">Long (1-2 minutes)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={generateVideoContent} 
                className="w-full" 
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Generating Video...
                  </>
                ) : (
                  <>
                    <Video className="h-4 w-4 mr-2" />
                    Generate Video
                  </>
                )}
              </Button>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Note:</strong> Video generation typically takes 3-5 minutes. You'll receive a notification when your video is ready for download.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AIGenerator

