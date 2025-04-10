
import React, { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, 
  BarChart, 
  Layers, 
  Edit, 
  PlusCircle, 
  CheckCircle,
  Book,
  Clock,
  Trophy,
  ExternalLink,
  Star,
  PlayCircle,
  XCircle,
  ChevronRight
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const SkillGapAnalysis = () => {
  const [activeTab, setActiveTab] = useState("analysis");
  
  const targetRole = "Senior Frontend Developer";
  
  const skillGaps = [
    { skill: "React Native", level: "Intermediate", importance: "High", gap: 30, courses: 5 },
    { skill: "GraphQL", level: "Intermediate", importance: "Medium", gap: 45, courses: 3 },
    { skill: "CI/CD Pipelines", level: "Beginner", importance: "Medium", gap: 60, courses: 4 },
    { skill: "Testing (Jest/Cypress)", level: "Intermediate", importance: "High", gap: 25, courses: 6 },
    { skill: "Design Systems", level: "Beginner", importance: "Low", gap: 50, courses: 2 },
  ];
  
  const strengths = [
    { skill: "React", level: 90 },
    { skill: "JavaScript", level: 95 },
    { skill: "HTML/CSS", level: 92 },
    { skill: "Redux", level: 85 },
    { skill: "TypeScript", level: 80 },
  ];
  
  const courses = [
    { 
      id: 1, 
      title: "React Native for React Developers", 
      provider: "Frontend Masters", 
      duration: "6 hours", 
      level: "Intermediate", 
      rating: 4.8,
      enrolled: true,
      progress: 25,
      image: "/placeholder.svg"
    },
    { 
      id: 2, 
      title: "GraphQL API Development", 
      provider: "Udemy", 
      duration: "12 hours", 
      level: "Intermediate", 
      rating: 4.6,
      enrolled: false,
      image: "/placeholder.svg"
    },
    { 
      id: 3, 
      title: "CI/CD with GitHub Actions", 
      provider: "Coursera", 
      duration: "4 weeks", 
      level: "Beginner to Intermediate", 
      rating: 4.7,
      enrolled: false,
      image: "/placeholder.svg"
    }
  ];
  
  const learningPath = [
    {
      name: "Fundamentals",
      completed: true,
      modules: [
        { name: "JavaScript Advanced Concepts", completed: true },
        { name: "Modern React Patterns", completed: true },
        { name: "TypeScript Essentials", completed: true }
      ]
    },
    {
      name: "Current Focus",
      completed: false,
      modules: [
        { name: "React Native Basics", completed: true },
        { name: "Building Cross-Platform Apps", completed: false },
        { name: "React Native Navigation", completed: false }
      ]
    },
    {
      name: "Next Steps",
      completed: false,
      modules: [
        { name: "GraphQL Fundamentals", completed: false },
        { name: "CI/CD Pipelines", completed: false },
        { name: "Advanced Testing Strategies", completed: false }
      ]
    }
  ];
  
  const getImportanceBadge = (importance) => {
    switch(importance) {
      case "High":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High</Badge>;
      case "Medium":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Medium</Badge>;
      case "Low":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Low</Badge>;
      default:
        return <Badge>{importance}</Badge>;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col futuristic-bg">
      <Navbar />
      <div className="futuristic-grid"></div>
      
      <main className="flex-grow py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Skill Gap Analysis</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Identify the skills you need to develop to qualify for your dream job and get personalized learning paths.
          </p>
          
          <div className="glass-panel mb-8 p-6 rounded-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center">
                  <GraduationCap className="h-6 w-6 mr-2 text-gray-700" />
                  <h2 className="text-2xl font-bold">Target Role: {targetRole}</h2>
                </div>
                <p className="text-gray-600 mt-1">Based on your profile and 150+ job descriptions analyzed</p>
              </div>
              <Button className="futuristic-button">
                <Edit className="mr-2 h-4 w-4" />
                <span>Change Target Role</span>
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="analysis" onValueChange={setActiveTab} className="mb-6">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
              <TabsTrigger value="analysis">Gap Analysis</TabsTrigger>
              <TabsTrigger value="learning">Learning Path</TabsTrigger>
              <TabsTrigger value="progress">Progress Tracking</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <TabsContent value="analysis" className={activeTab === "analysis" ? "block" : "hidden"}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <Card className="glass-panel h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Layers className="mr-2 h-5 w-5" />
                      <span>Skills Gap Assessment</span>
                    </CardTitle>
                    <CardDescription>Comparing your current skills with job requirements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {skillGaps.map((skill, i) => (
                        <div key={i} className="border border-gray-200 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">{skill.skill}</h3>
                              <div className="flex items-center mt-1">
                                <Badge variant="outline">{skill.level}</Badge>
                                <span className="mx-2">•</span>
                                {getImportanceBadge(skill.importance)}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-bold">{100 - skill.gap}%</div>
                              <div className="text-sm text-gray-500">Proficiency</div>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Current Level</span>
                              <span className="text-sm">Target Level</span>
                            </div>
                            <div className="relative">
                              <Progress value={100 - skill.gap} className="h-2" />
                              <div className="absolute right-0 top-0 h-4 w-0.5 bg-black -mt-1"></div>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center mt-4">
                            <div className="text-sm text-gray-600">
                              {skill.courses} courses available
                            </div>
                            <Button variant="outline" size="sm">
                              View Recommendations
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Trophy className="mr-2 h-5 w-5" />
                      <span>Your Strengths</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {strengths.map((strength, i) => (
                        <div key={i}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{strength.skill}</span>
                            <span className="text-sm font-medium">{strength.level}%</span>
                          </div>
                          <Progress value={strength.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full mt-6">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>Add More Skills</span>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <CardTitle>Market Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 border border-gray-200 rounded-lg">
                        <h3 className="font-medium mb-1">Top Skills in Demand</h3>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">React</Badge>
                          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">TypeScript</Badge>
                          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Next.js</Badge>
                          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">React Native</Badge>
                          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">GraphQL</Badge>
                          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Testing</Badge>
                          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">CI/CD</Badge>
                        </div>
                      </div>
                      
                      <div className="p-3 border border-gray-200 rounded-lg">
                        <h3 className="font-medium mb-1">Emerging Technologies</h3>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">WebAssembly</Badge>
                          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Web3</Badge>
                          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Edge Computing</Badge>
                          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Micro Frontends</Badge>
                        </div>
                      </div>
                      
                      <div className="p-3 border border-gray-200 rounded-lg">
                        <h3 className="font-medium mb-1">Industry Match</h3>
                        <div className="flex items-center mt-2">
                          <div className="flex-grow">
                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-black h-full" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                          <span className="ml-4 text-lg font-bold">75%</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Top 25% of applicants for Senior Frontend Developer roles</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card className="glass-panel mb-6">
              <CardHeader className="pb-2">
                <CardTitle>Recommended Learning Resources</CardTitle>
                <CardDescription>Personalized courses based on your skill gaps</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {courses.map((course, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover-lift">
                      <div className="h-40 bg-gray-100">
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-1">{course.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span>{course.provider}</span>
                          <span className="mx-2">•</span>
                          <span>{course.duration}</span>
                        </div>
                        
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="outline">{course.level}</Badge>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                            <span className="text-sm ml-1">{course.rating}</span>
                          </div>
                        </div>
                        
                        {course.enrolled ? (
                          <div className="space-y-2">
                            <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-black h-full" style={{ width: `${course.progress}%` }}></div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-500">{course.progress}% complete</span>
                              <Button variant="outline" size="sm" className="h-8">Continue</Button>
                            </div>
                          </div>
                        ) : (
                          <Button className="w-full">Enroll</Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center mt-6">
                  <Button className="futuristic-button">
                    <span>View All Recommendations</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="learning" className={activeTab === "learning" ? "block" : "hidden"}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-1">
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5" />
                      <span>Learning Paths</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 border border-gray-300 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold">Frontend Mastery</h3>
                          <Badge className="bg-black text-white hover:bg-black">Active</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Complete path for Senior Frontend Developer roles</p>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-black h-full" style={{ width: '45%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>45% complete</span>
                          <span>8/18 modules</span>
                        </div>
                      </div>
                      
                      <div className="p-3 border border-gray-200 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold">Full Stack Development</h3>
                          <Badge variant="outline">Available</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Backend skills for full-stack positions</p>
                        <Button variant="outline" className="w-full">Start Path</Button>
                      </div>
                      
                      <div className="p-3 border border-gray-200 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold">Tech Leadership</h3>
                          <Badge variant="outline">Available</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Management and leadership in tech</p>
                        <Button variant="outline" className="w-full">Start Path</Button>
                      </div>
                      
                      <Button className="w-full">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        <span>Create Custom Path</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-2">
                <Card className="glass-panel h-full">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Frontend Mastery Path</CardTitle>
                        <CardDescription>Personalized learning journey for {targetRole}</CardDescription>
                      </div>
                      <Button variant="outline">Edit Path</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {learningPath.map((section, i) => (
                        <div key={i}>
                          <div className="flex items-center mb-4">
                            <div className={`h-8 w-8 rounded-full ${section.completed ? 'bg-black' : 'bg-gray-200'} flex items-center justify-center mr-3`}>
                              {section.completed ? (
                                <CheckCircle className="h-5 w-5 text-white" />
                              ) : (
                                <span className="text-sm font-bold text-gray-500">{i + 1}</span>
                              )}
                            </div>
                            <h3 className={`text-lg font-semibold ${section.completed ? 'line-through text-gray-400' : ''}`}>
                              {section.name}
                            </h3>
                          </div>
                          
                          <div className="ml-11 space-y-4">
                            {section.modules.map((module, j) => (
                              <div key={j} className={`p-4 rounded-lg ${module.completed ? 'bg-gray-50 border-gray-200' : 'border-2 border-gray-300'} border`}>
                                <div className="flex justify-between items-start">
                                  <div className="flex items-start">
                                    <div className="mr-3 mt-0.5">
                                      {module.completed ? (
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                      ) : (
                                        <Book className="h-5 w-5 text-gray-400" />
                                      )}
                                    </div>
                                    <div>
                                      <h4 className={`font-medium ${module.completed ? 'line-through text-gray-400' : ''}`}>
                                        {module.name}
                                      </h4>
                                      <div className="flex items-center text-xs text-gray-500 mt-1">
                                        <Clock className="h-3 w-3 mr-1" />
                                        <span>Estimated: 8-10 hours</span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <Button 
                                    variant={module.completed ? "outline" : "default"} 
                                    size="sm"
                                    className={module.completed ? "h-8" : "h-8"}
                                  >
                                    {module.completed ? "Review" : "Start"}
                                  </Button>
                                </div>
                                
                                {!module.completed && (
                                  <div className="ml-8 mt-3 space-y-2">
                                    <div className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded-md">
                                      <div className="flex items-center">
                                        <PlayCircle className="h-4 w-4 mr-2 text-gray-400" />
                                        <span>Video Course: {module.name} Fundamentals</span>
                                      </div>
                                      <span className="text-xs text-gray-500">3.5 hours</span>
                                    </div>
                                    
                                    <div className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded-md">
                                      <div className="flex items-center">
                                        <Book className="h-4 w-4 mr-2 text-gray-400" />
                                        <span>Hands-on Project</span>
                                      </div>
                                      <span className="text-xs text-gray-500">4 hours</span>
                                    </div>
                                    
                                    <div className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded-md">
                                      <div className="flex items-center">
                                        <GraduationCap className="h-4 w-4 mr-2 text-gray-400" />
                                        <span>Skill Assessment</span>
                                      </div>
                                      <span className="text-xs text-gray-500">30 mins</span>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-center mt-8">
                      <Button className="futuristic-button">
                        <span>Continue Learning</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="progress" className={activeTab === "progress" ? "block" : "hidden"}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="glass-panel">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold mb-1">12</p>
                      <p className="text-sm text-gray-500">Skills In Progress</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-panel">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold mb-1">8</p>
                      <p className="text-sm text-gray-500">Courses Enrolled</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-panel">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold mb-1">43</p>
                      <p className="text-sm text-gray-500">Learning Hours</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-panel">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold mb-1">5</p>
                      <p className="text-sm text-gray-500">Certifications</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-2">
                <Card className="glass-panel h-full">
                  <CardHeader className="pb-2">
                    <CardTitle>Learning Activity</CardTitle>
                    <CardDescription>Your skill development over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center">
                      {/* Chart would go here */}
                      <div className="text-center">
                        <BarChart className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500">Activity chart will appear here as you progress</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold mb-3">Recent Activity</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 flex-shrink-0">
                            <PlayCircle className="h-4 w-4 text-gray-500" />
                          </div>
                          <div>
                            <p className="font-medium">Completed "React Native Navigation" lesson</p>
                            <p className="text-sm text-gray-500">2 hours ago</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 flex-shrink-0">
                            <GraduationCap className="h-4 w-4 text-gray-500" />
                          </div>
                          <div>
                            <p className="font-medium">Passed "Advanced React Hooks" assessment</p>
                            <p className="text-sm text-gray-500">Yesterday</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 flex-shrink-0">
                            <Book className="h-4 w-4 text-gray-500" />
                          </div>
                          <div>
                            <p className="font-medium">Started "GraphQL API Development" course</p>
                            <p className="text-sm text-gray-500">2 days ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <CardTitle>In-Progress Courses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-3">
                        <h3 className="font-medium">React Native for React Developers</h3>
                        <div className="flex justify-between text-xs text-gray-500 mb-2 mt-1">
                          <span>Frontend Masters</span>
                          <span>25% complete</span>
                        </div>
                        <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-black h-full" style={{ width: '25%' }}></div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full mt-3">
                          Continue
                        </Button>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-3">
                        <h3 className="font-medium">Advanced TypeScript Patterns</h3>
                        <div className="flex justify-between text-xs text-gray-500 mb-2 mt-1">
                          <span>Udemy</span>
                          <span>68% complete</span>
                        </div>
                        <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-black h-full" style={{ width: '68%' }}></div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full mt-3">
                          Continue
                        </Button>
                      </div>
                      
                      <Button className="w-full">
                        <span>View All Courses</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <CardTitle>Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="h-10 w-10 mr-3 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <Trophy className="h-5 w-5 text-amber-500" />
                        </div>
                        <div>
                          <p className="font-medium">React Advanced Developer</p>
                          <p className="text-xs text-gray-500">Issued Mar 2025 • Frontend Masters</p>
                        </div>
                        <Button variant="ghost" size="icon" className="ml-auto">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 mr-3 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <Trophy className="h-5 w-5 text-amber-500" />
                        </div>
                        <div>
                          <p className="font-medium">TypeScript Expert</p>
                          <p className="text-xs text-gray-500">Issued Jan 2025 • Udemy</p>
                        </div>
                        <Button variant="ghost" size="icon" className="ml-auto">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="border-t pt-3 mt-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium">Next Available</h3>
                          <Badge>In progress</Badge>
                        </div>
                        <div className="flex items-start mt-2">
                          <div className="h-10 w-10 mr-3 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <Trophy className="h-5 w-5 text-gray-400" />
                          </div>
                          <div>
                            <p className="font-medium">React Native Developer</p>
                            <div className="flex items-center text-xs text-gray-500 mt-0.5">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>2/3 modules completed</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card className="glass-panel mb-6">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>Skill Development Tracking</CardTitle>
                  <Button variant="outline">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    <span>Add Skill</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[...strengths, ...skillGaps.map(s => ({ skill: s.skill, level: 100 - s.gap }))].slice(0, 6).map((skill, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-medium">{skill.skill}</h3>
                        <span className="text-lg font-bold">{skill.level}%</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${skill.level >= 80 ? 'bg-green-500' : skill.level >= 50 ? 'bg-amber-500' : 'bg-red-500'}`} 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Initial: {Math.max(0, skill.level - 15)}%</span>
                          <span>Target: 100%</span>
                        </div>
                        
                        <div className="pt-2 flex justify-between items-center">
                          <div className="flex space-x-1">
                            <Badge variant="outline" className="text-xs">
                              +{Math.floor(Math.random() * 10 + 5)}%
                            </Badge>
                            <span className="text-xs text-gray-500">this month</span>
                          </div>
                          <Button variant="outline" size="sm" className="h-7 text-xs">Log Practice</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkillGapAnalysis;
