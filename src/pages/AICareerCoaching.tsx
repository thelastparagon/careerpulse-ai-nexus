
import React, { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, MessageSquare, Video, Lightbulb, BookOpen, ThumbsUp, Send, Mic } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AICareerCoaching = () => {
  const [activeTab, setActiveTab] = useState("coaching");
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', content: 'Hello! I\'m your AI Career Coach. How can I help you today with your career development or job search?' },
  ]);
  
  const handleSendMessage = () => {
    if (chatMessage.trim() === "") return;
    
    // Add user message
    setChatMessages(prev => [...prev, { sender: 'user', content: chatMessage }]);
    
    // Simulate AI response after a brief delay
    setTimeout(() => {
      let aiResponse;
      
      if (chatMessage.toLowerCase().includes('interview')) {
        aiResponse = "Preparing for interviews is crucial. I recommend researching the company, practicing common questions, and preparing stories that demonstrate your skills and experience. Would you like me to simulate some interview questions for your target role?";
      } else if (chatMessage.toLowerCase().includes('resume')) {
        aiResponse = "Your resume should highlight your achievements and be tailored for each application. Make sure to quantify your accomplishments and include relevant keywords. Have you tried our Resume Optimization tool?";
      } else if (chatMessage.toLowerCase().includes('career change') || chatMessage.toLowerCase().includes('switch')) {
        aiResponse = "Changing careers is a significant step. Let's analyze your transferable skills and identify gaps you might need to fill. What industry or role are you considering moving into?";
      } else {
        aiResponse = "That's a great question. I'd be happy to provide guidance on this topic. To give you the most relevant advice, could you share a bit more about your current situation and specific goals?";
      }
      
      setChatMessages(prev => [...prev, { sender: 'ai', content: aiResponse }]);
    }, 1000);
    
    setChatMessage("");
  };
  
  const commonQuestions = [
    "How do I prepare for a technical interview?",
    "What skills should I develop for data science?",
    "Tips for negotiating salary?",
    "How to address employment gaps?",
    "Should I include a cover letter?",
    "How to build a professional network?"
  ];
  
  return (
    <div className="min-h-screen flex flex-col futuristic-bg">
      <Navbar />
      <div className="futuristic-grid"></div>
      
      <main className="flex-grow py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 gradient-text">AI Career Coaching</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Get personalized career advice, interview preparation, and professional development guidance from our AI coach.
          </p>
          
          <Tabs defaultValue="coaching" onValueChange={setActiveTab} className="mb-6">
            <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3">
              <TabsTrigger value="coaching">Career Coaching</TabsTrigger>
              <TabsTrigger value="interview">Interview Prep</TabsTrigger>
              <TabsTrigger value="learning">Learning Paths</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <TabsContent value="coaching" className={activeTab === "coaching" ? "block" : "hidden"}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <Card className="glass-panel h-[600px] flex flex-col">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Brain className="mr-2 h-5 w-5" />
                      <span>AI Career Coach</span>
                    </CardTitle>
                    <CardDescription>Ask any career-related questions or get personalized advice</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col overflow-hidden">
                    <div className="flex-grow overflow-y-auto mb-4 space-y-4 pr-2">
                      {chatMessages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`flex items-start max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                            <Avatar className="h-8 w-8 flex-shrink-0 mx-2">
                              {msg.sender === 'ai' ? (
                                <>
                                  <AvatarFallback>AI</AvatarFallback>
                                  <AvatarImage src="/placeholder.svg" />
                                </>
                              ) : (
                                <AvatarFallback>You</AvatarFallback>
                              )}
                            </Avatar>
                            <div className={`p-3 rounded-lg ${msg.sender === 'user' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}>
                              <p className="text-sm">{msg.content}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="relative">
                      <Textarea 
                        placeholder="Ask a question about your career path or job search..." 
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        className="resize-none pr-12"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                      />
                      <div className="absolute right-3 bottom-3 flex items-center space-x-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                          <Mic className="h-4 w-4" />
                        </Button>
                        <Button onClick={handleSendMessage} size="icon" className="h-8 w-8 rounded-full">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-xs text-gray-500 mb-2">Common Questions:</p>
                      <div className="flex flex-wrap gap-2">
                        {commonQuestions.map((question, index) => (
                          <button 
                            key={index}
                            className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-full transition-colors"
                            onClick={() => setChatMessage(question)}
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <CardTitle>Career Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm">
                      Take our comprehensive career assessment to get personalized insights and recommendations.
                    </p>
                    <ul className="space-y-3 mb-5">
                      <li className="flex items-start">
                        <Lightbulb className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Discover your strengths and work style preferences</span>
                      </li>
                      <li className="flex items-start">
                        <Lightbulb className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Identify careers that align with your personality</span>
                      </li>
                      <li className="flex items-start">
                        <Lightbulb className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Get industry-specific advice for your career journey</span>
                      </li>
                    </ul>
                    <Button className="futuristic-button w-full">
                      <span>Start Assessment</span>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <CardTitle>Upcoming Sessions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 border border-gray-200 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">Mock Interview</h3>
                          <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">Tomorrow</span>
                        </div>
                        <p className="text-xs text-gray-600">10:00 AM - 11:00 AM</p>
                        <div className="flex justify-end mt-2">
                          <Button variant="outline" size="sm">Prepare</Button>
                        </div>
                      </div>
                      
                      <div className="p-3 border border-gray-200 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">Resume Review</h3>
                          <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">Friday</span>
                        </div>
                        <p className="text-xs text-gray-600">2:00 PM - 2:30 PM</p>
                        <div className="flex justify-end mt-2">
                          <Button variant="outline" size="sm">Prepare</Button>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4">
                      Schedule New Session
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="interview" className={activeTab === "interview" ? "block" : "hidden"}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <Card className="glass-panel h-[600px] flex flex-col">
                  <CardHeader className="pb-2">
                    <CardTitle>Interview Simulator</CardTitle>
                    <CardDescription>Practice with AI-powered mock interviews tailored to your target role</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <div className="flex-grow flex items-center justify-center">
                      <div className="text-center p-8">
                        <Video className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                        <h3 className="text-xl font-semibold mb-2">Ready for your mock interview?</h3>
                        <p className="text-gray-600 mb-6">
                          Our AI interviewer will ask you questions based on your target role and provide real-time feedback on your responses.
                        </p>
                        <div className="space-y-4">
                          <Button className="futuristic-button">
                            <span>Start Mock Interview</span>
                          </Button>
                          <p className="text-sm text-gray-500">
                            Sessions are recorded for your review (only accessible by you)
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <CardTitle>Interview Question Bank</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="hover-lift cursor-pointer">
                        <h3 className="font-medium text-sm mb-1">Technical Questions</h3>
                        <p className="text-xs text-gray-600">85 questions specific to software engineering</p>
                      </div>
                      <div className="hover-lift cursor-pointer">
                        <h3 className="font-medium text-sm mb-1">Behavioral Questions</h3>
                        <p className="text-xs text-gray-600">50 questions for assessing soft skills and culture fit</p>
                      </div>
                      <div className="hover-lift cursor-pointer">
                        <h3 className="font-medium text-sm mb-1">Situational Questions</h3>
                        <p className="text-xs text-gray-600">35 questions for problem-solving scenarios</p>
                      </div>
                      <div className="hover-lift cursor-pointer">
                        <h3 className="font-medium text-sm mb-1">Role-Specific Questions</h3>
                        <p className="text-xs text-gray-600">Customized to your target position</p>
                      </div>
                    </div>
                    <Button className="w-full">Access Question Bank</Button>
                  </CardContent>
                </Card>
                
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <CardTitle>Interview Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <ThumbsUp className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Research the company thoroughly before your interview</p>
                      </div>
                      <div className="flex items-start">
                        <ThumbsUp className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Prepare specific examples of your achievements</p>
                      </div>
                      <div className="flex items-start">
                        <ThumbsUp className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Follow the STAR method for behavioral questions</p>
                      </div>
                      <div className="flex items-start">
                        <ThumbsUp className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Prepare thoughtful questions for the interviewer</p>
                      </div>
                      <div className="flex items-start">
                        <ThumbsUp className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Practice your responses out loud before the interview</p>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4">
                      View All Tips
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="learning" className={activeTab === "learning" ? "block" : "hidden"}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-1">
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <CardTitle>Personalized Learning Paths</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm">
                      Based on your profile and career goals, we've created custom learning paths to help you develop the skills you need.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-lg hover-lift cursor-pointer">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium">Full Stack Development</h3>
                          <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">Recommended</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1 mb-2">12 weeks, 24 courses</p>
                        <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-black h-full" style={{ width: '35%' }}></div>
                        </div>
                        <p className="text-xs text-right mt-1 text-gray-500">35% complete</p>
                      </div>
                      
                      <div className="p-4 border border-gray-200 rounded-lg hover-lift cursor-pointer">
                        <h3 className="font-medium">Cloud Architecture</h3>
                        <p className="text-xs text-gray-600 mt-1 mb-2">8 weeks, 16 courses</p>
                        <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-black h-full" style={{ width: '10%' }}></div>
                        </div>
                        <p className="text-xs text-right mt-1 text-gray-500">10% complete</p>
                      </div>
                      
                      <div className="p-4 border border-gray-200 rounded-lg hover-lift cursor-pointer">
                        <h3 className="font-medium">Product Management</h3>
                        <p className="text-xs text-gray-600 mt-1 mb-2">10 weeks, 20 courses</p>
                        <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-black h-full" style={{ width: '0%' }}></div>
                        </div>
                        <p className="text-xs text-right mt-1 text-gray-500">0% complete</p>
                      </div>
                    </div>
                    
                    <Button className="futuristic-button w-full mt-5">
                      <span>Create New Learning Path</span>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-2">
                <Card className="glass-panel h-full">
                  <CardHeader className="pb-2">
                    <CardTitle>Current Learning: Full Stack Development</CardTitle>
                    <CardDescription>Your progress in your recommended learning path</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-sm">Module 1: Frontend Fundamentals</h3>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-black h-full" style={{ width: '100%' }}></div>
                        </div>
                        <p className="text-xs text-right text-gray-500">Completed</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-semibold text-sm">Module 2: React & Modern JavaScript</h3>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-black h-full" style={{ width: '75%' }}></div>
                        </div>
                        <p className="text-xs text-right text-gray-500">75% complete</p>
                        
                        <div className="space-y-2 pl-4 mt-3">
                          <div className="flex items-center text-sm">
                            <BookOpen className="h-4 w-4 mr-2 text-gray-400" />
                            <span className="line-through text-gray-500">Advanced React Hooks</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <BookOpen className="h-4 w-4 mr-2 text-gray-400" />
                            <span className="line-through text-gray-500">Context API and Redux</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <BookOpen className="h-4 w-4 mr-2" />
                            <span>React Performance Optimization</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <BookOpen className="h-4 w-4 mr-2 text-gray-400" />
                            <span className="text-gray-400">Testing React Applications</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-semibold text-sm">Module 3: Backend Development with Node.js</h3>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-black h-full" style={{ width: '0%' }}></div>
                        </div>
                        <p className="text-xs text-right text-gray-500">Not started</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-semibold text-sm">Module 4: Full Stack Integration</h3>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-black h-full" style={{ width: '0%' }}></div>
                        </div>
                        <p className="text-xs text-right text-gray-500">Not started</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button className="futuristic-button w-full">
                        <span>Continue Learning</span>
                      </Button>
                      <p className="text-xs text-center mt-2 text-gray-500">
                        Next lesson: React Performance Optimization (25 minutes)
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AICareerCoaching;
