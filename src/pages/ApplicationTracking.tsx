
import React, { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ClipboardList, 
  Plus, 
  Search, 
  BarChart, 
  Building, 
  Calendar, 
  Clock, 
  ChevronDown, 
  ChevronRight, 
  MoreHorizontal,
  Star,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  CheckCircle,
  XCircle,
  FileText,
  Users,
  Bell
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ApplicationTracking = () => {
  const [activeTab, setActiveTab] = useState("applications");
  const [searchQuery, setSearchQuery] = useState("");
  
  const applications = [
    { 
      id: 1,
      company: "TechCorp Inc.", 
      role: "Senior Frontend Developer", 
      location: "San Francisco, CA", 
      status: "Interview", 
      dateApplied: "2025-04-02", 
      lastUpdate: "1 day ago",
      starred: true,
      logo: "/placeholder.svg"
    },
    { 
      id: 2,
      company: "DataViz Solutions", 
      role: "Full Stack Engineer", 
      location: "Remote", 
      status: "Applied", 
      dateApplied: "2025-04-05", 
      lastUpdate: "5 hours ago",
      starred: false,
      logo: "/placeholder.svg"
    },
    { 
      id: 3,
      company: "CloudNet Systems", 
      role: "Software Engineer II", 
      location: "Austin, TX", 
      status: "Assessment", 
      dateApplied: "2025-03-29", 
      lastUpdate: "2 days ago",
      starred: true,
      logo: "/placeholder.svg"
    },
    { 
      id: 4,
      company: "InnovateTech", 
      role: "UI/UX Developer", 
      location: "Seattle, WA", 
      status: "Rejected", 
      dateApplied: "2025-03-25", 
      lastUpdate: "3 days ago",
      starred: false,
      logo: "/placeholder.svg"
    },
    { 
      id: 5,
      company: "FinSoft Corp", 
      role: "Frontend Developer", 
      location: "New York, NY", 
      status: "Offer", 
      dateApplied: "2025-03-20", 
      lastUpdate: "12 hours ago",
      starred: false,
      logo: "/placeholder.svg"
    }
  ];
  
  const getStatusBadge = (status) => {
    switch(status) {
      case "Applied":
        return <Badge variant="outline" className="border-blue-500 text-blue-500">Applied</Badge>;
      case "Assessment":
        return <Badge variant="outline" className="border-purple-500 text-purple-500">Assessment</Badge>;
      case "Interview":
        return <Badge variant="outline" className="border-amber-500 text-amber-500">Interview</Badge>;
      case "Offer":
        return <Badge variant="outline" className="border-green-500 text-green-500">Offer</Badge>;
      case "Rejected":
        return <Badge variant="outline" className="border-red-500 text-red-500">Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  const upcoming = [
    { event: "Technical Interview", company: "TechCorp Inc.", date: "Tomorrow", time: "10:00 - 11:30 AM" },
    { event: "Coding Assessment", company: "CloudNet Systems", date: "April 15", time: "Due by 11:59 PM" }
  ];
  
  const tasks = [
    { task: "Send follow-up email", company: "DataViz Solutions", dueDate: "Today", completed: false, priority: "high" },
    { task: "Research interview panel", company: "TechCorp Inc.", dueDate: "Tomorrow", completed: false, priority: "medium" },
    { task: "Complete take-home project", company: "CloudNet Systems", dueDate: "April 14", completed: false, priority: "high" },
    { task: "Update resume with latest project", company: "", dueDate: "April 16", completed: true, priority: "low" }
  ];
  
  return (
    <div className="min-h-screen flex flex-col futuristic-bg">
      <Navbar />
      <div className="futuristic-grid"></div>
      
      <main className="flex-grow py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Application Tracking</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Organize and monitor all your job applications in one place with status updates and reminders.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="w-full md:w-auto flex-grow relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search companies, positions, or locations" 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="whitespace-nowrap">
                Filter <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              <Button className="futuristic-button whitespace-nowrap">
                <Plus className="mr-1 h-4 w-4" />
                <span>Add Application</span>
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="applications" onValueChange={setActiveTab}>
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="tasks">Tasks & Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="applications">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-3">
                  <Card className="glass-panel">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="flex items-center">
                          <ClipboardList className="mr-2 h-5 w-5" />
                          <span>Job Applications</span>
                        </CardTitle>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>Sort by:</span>
                          <select className="ml-2 bg-transparent border-none focus:outline-none text-sm">
                            <option>Date Applied</option>
                            <option>Company Name</option>
                            <option>Status</option>
                            <option>Last Updated</option>
                          </select>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="text-xs text-gray-500 border-b">
                              <th className="px-4 py-3 text-left w-10"></th>
                              <th className="px-4 py-3 text-left">Company</th>
                              <th className="px-4 py-3 text-left">Position</th>
                              <th className="px-4 py-3 text-left hidden md:table-cell">Location</th>
                              <th className="px-4 py-3 text-left">Status</th>
                              <th className="px-4 py-3 text-left hidden md:table-cell">Date Applied</th>
                              <th className="px-4 py-3 text-left hidden lg:table-cell">Last Update</th>
                              <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            {applications.map((application) => (
                              <tr key={application.id} className="hover:bg-gray-50">
                                <td className="px-4 py-4">
                                  <Button variant="ghost" size="icon" className="h-6 w-6">
                                    <Star className={`h-4 w-4 ${application.starred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                                  </Button>
                                </td>
                                <td className="px-4 py-4">
                                  <div className="flex items-center">
                                    <Avatar className="h-8 w-8 mr-3">
                                      <AvatarImage src={application.logo} alt={application.company} />
                                      <AvatarFallback>{application.company[0]}</AvatarFallback>
                                    </Avatar>
                                    <span className="font-medium">{application.company}</span>
                                  </div>
                                </td>
                                <td className="px-4 py-4">
                                  {application.role}
                                </td>
                                <td className="px-4 py-4 hidden md:table-cell text-gray-600">
                                  {application.location}
                                </td>
                                <td className="px-4 py-4">
                                  {getStatusBadge(application.status)}
                                </td>
                                <td className="px-4 py-4 hidden md:table-cell text-gray-600">
                                  {new Date(application.dateApplied).toLocaleDateString()}
                                </td>
                                <td className="px-4 py-4 hidden lg:table-cell text-gray-600">
                                  {application.lastUpdate}
                                </td>
                                <td className="px-4 py-4 text-right">
                                  <div className="flex justify-end space-x-1">
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                      <ExternalLink className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                      <MessageSquare className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="flex justify-between items-center mt-4 text-sm">
                        <span className="text-gray-500">Showing 5 of 12 applications</span>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" disabled>Previous</Button>
                          <Button variant="outline" size="sm">Next</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-2">
                  <Card className="glass-panel">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Building className="mr-2 h-5 w-5" />
                        <span>TechCorp Inc.</span>
                      </CardTitle>
                      <CardDescription>Application for Senior Frontend Developer</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-semibold mb-3">Application Progress</h3>
                          <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
                            <div className="flex items-center">
                              <span className="h-3 w-3 rounded-full bg-gray-200 mr-1"></span>
                              <span>Applied</span>
                            </div>
                            <ChevronRight className="h-3 w-3" />
                            <div className="flex items-center">
                              <span className="h-3 w-3 rounded-full bg-gray-200 mr-1"></span>
                              <span>Assessment</span>
                            </div>
                            <ChevronRight className="h-3 w-3" />
                            <div className="flex items-center">
                              <span className="h-3 w-3 rounded-full bg-amber-500 mr-1"></span>
                              <span className="font-medium">Interview</span>
                            </div>
                            <ChevronRight className="h-3 w-3" />
                            <div className="flex items-center">
                              <span className="h-3 w-3 rounded-full bg-gray-200 mr-1"></span>
                              <span>Offer</span>
                            </div>
                          </div>
                          <Progress value={60} className="h-2" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Date Applied</span>
                              <span className="text-sm">April 2, 2025</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Source</span>
                              <span className="text-sm">LinkedIn</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Salary Range</span>
                              <span className="text-sm">$120K - $150K</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Location</span>
                              <span className="text-sm">San Francisco, CA (Hybrid)</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Contact</span>
                              <span className="text-sm">Sarah Johnson (Recruiter)</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Resume Version</span>
                              <span className="text-sm">Frontend-focused v2</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-semibold mb-3">Timeline</h3>
                          <div className="space-y-4">
                            <div className="flex">
                              <div className="flex flex-col items-center mr-4">
                                <div className="h-6 w-6 rounded-full bg-amber-100 border-2 border-amber-500 flex items-center justify-center">
                                  <Clock className="h-3 w-3 text-amber-500" />
                                </div>
                                <div className="flex-grow w-0.5 bg-gray-200 mt-1"></div>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Technical Interview Scheduled</p>
                                <p className="text-xs text-gray-500">April 11, 2025 at 10:00 AM</p>
                                <p className="text-xs mt-1">Interview with the Engineering Team (4 members)</p>
                              </div>
                            </div>
                            
                            <div className="flex">
                              <div className="flex flex-col items-center mr-4">
                                <div className="h-6 w-6 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center">
                                  <CheckCircle className="h-3 w-3 text-green-500" />
                                </div>
                                <div className="flex-grow w-0.5 bg-gray-200 mt-1"></div>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Initial Screening Completed</p>
                                <p className="text-xs text-gray-500">April 5, 2025</p>
                                <p className="text-xs mt-1">30-minute call with HR recruiter</p>
                              </div>
                            </div>
                            
                            <div className="flex">
                              <div className="flex flex-col items-center mr-4">
                                <div className="h-6 w-6 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center">
                                  <FileText className="h-3 w-3 text-blue-500" />
                                </div>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Application Submitted</p>
                                <p className="text-xs text-gray-500">April 2, 2025</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Button variant="outline" className="flex items-center flex-grow">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            <span>Add Note</span>
                          </Button>
                          <Button className="flex items-center flex-grow">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            <span>View Job</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-1 space-y-6">
                  <Card className="glass-panel">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Calendar className="mr-2 h-5 w-5" />
                        <span>Upcoming Events</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {upcoming.map((event, i) => (
                          <div key={i} className="border border-gray-200 rounded-lg p-3 hover-lift">
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium text-sm">{event.event}</h3>
                              <Badge variant="outline" className="text-amber-500 border-amber-500">{event.date}</Badge>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{event.company}</p>
                            <div className="flex items-center text-xs text-gray-600 mt-2">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{event.time}</span>
                            </div>
                          </div>
                        ))}
                        
                        {upcoming.length === 0 && (
                          <div className="text-center py-6">
                            <Calendar className="h-10 w-10 mx-auto text-gray-300 mb-2" />
                            <p className="text-gray-500 text-sm">No upcoming events</p>
                          </div>
                        )}
                        
                        <Button variant="outline" className="w-full">
                          <Plus className="mr-2 h-4 w-4" />
                          <span>Add Event</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-panel">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Bell className="mr-2 h-5 w-5" />
                        <span>Reminders</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {tasks.filter(task => !task.completed).slice(0, 3).map((task, i) => (
                          <div key={i} className="flex items-start space-x-2 p-2 hover:bg-gray-50 rounded-md">
                            <input 
                              type="checkbox" 
                              className="h-4 w-4 mt-1 rounded border-gray-300 text-black focus:ring-gray-500"
                            />
                            <div>
                              <p className="text-sm font-medium">{task.task}</p>
                              {task.company && <p className="text-xs text-gray-500">{task.company}</p>}
                              <div className="flex items-center mt-1">
                                <Badge 
                                  variant="outline" 
                                  className={`text-xs ${
                                    task.priority === 'high' ? 'text-red-500 border-red-500' : 
                                    task.priority === 'medium' ? 'text-amber-500 border-amber-500' : 
                                    'text-green-500 border-green-500'
                                  }`}
                                >
                                  {task.priority}
                                </Badge>
                                <span className="text-xs text-gray-500 ml-2">Due {task.dueDate}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full mt-4">
                        <Plus className="mr-2 h-4 w-4" />
                        <span>Add Reminder</span>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="glass-panel">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-3xl font-bold mb-1">24</p>
                        <p className="text-sm text-gray-500">Total Applications</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="glass-panel">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-3xl font-bold mb-1">8</p>
                        <p className="text-sm text-gray-500">Interviews Secured</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="glass-panel">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-3xl font-bold mb-1">33%</p>
                        <p className="text-sm text-gray-500">Response Rate</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="glass-panel">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-3xl font-bold mb-1">2</p>
                        <p className="text-sm text-gray-500">Active Offers</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-2">
                  <Card className="glass-panel h-full">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <BarChart className="mr-2 h-5 w-5" />
                        <span>Application Status Breakdown</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64">
                        {/* Chart would go here */}
                        <div className="h-full flex items-center justify-center">
                          <div className="space-y-4 w-full">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm">Applied</span>
                                <span className="text-sm">10</span>
                              </div>
                              <div className="w-full bg-gray-200 h-4 rounded-sm overflow-hidden">
                                <div className="bg-blue-500 h-full" style={{ width: '42%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm">Assessment</span>
                                <span className="text-sm">5</span>
                              </div>
                              <div className="w-full bg-gray-200 h-4 rounded-sm overflow-hidden">
                                <div className="bg-purple-500 h-full" style={{ width: '21%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm">Interview</span>
                                <span className="text-sm">4</span>
                              </div>
                              <div className="w-full bg-gray-200 h-4 rounded-sm overflow-hidden">
                                <div className="bg-amber-500 h-full" style={{ width: '17%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm">Offer</span>
                                <span className="text-sm">2</span>
                              </div>
                              <div className="w-full bg-gray-200 h-4 rounded-sm overflow-hidden">
                                <div className="bg-green-500 h-full" style={{ width: '8%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm">Rejected</span>
                                <span className="text-sm">3</span>
                              </div>
                              <div className="w-full bg-gray-200 h-4 rounded-sm overflow-hidden">
                                <div className="bg-red-500 h-full" style={{ width: '12%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-1">
                  <Card className="glass-panel h-full">
                    <CardHeader className="pb-2">
                      <CardTitle>Application Insights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-5">
                        <div>
                          <h3 className="text-sm font-semibold mb-2">Top Application Sources</h3>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">LinkedIn</span>
                              <span className="text-sm">42%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Company Website</span>
                              <span className="text-sm">25%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Referrals</span>
                              <span className="text-sm">17%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Job Boards</span>
                              <span className="text-sm">16%</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-t pt-4">
                          <h3 className="text-sm font-semibold mb-2">Response Time</h3>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-gray-50 p-3 rounded-lg text-center">
                              <p className="text-xl font-semibold">5.3</p>
                              <p className="text-xs text-gray-500">Avg. Days</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg text-center">
                              <p className="text-xl font-semibold">35%</p>
                              <p className="text-xs text-gray-500">No Response</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-t pt-4">
                          <h3 className="text-sm font-semibold mb-2">Application Trends</h3>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-sm text-gray-600">+15% interviews this month</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-3">
                  <Card className="glass-panel">
                    <CardHeader className="pb-2">
                      <CardTitle>Skill Match Analysis</CardTitle>
                      <CardDescription>How your skills align with job requirements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 border border-gray-200 rounded-lg">
                          <h3 className="font-medium mb-3">Technical Skills</h3>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-xs">JavaScript</span>
                                <span className="text-xs">95%</span>
                              </div>
                              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-black h-full" style={{ width: '95%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-xs">React</span>
                                <span className="text-xs">90%</span>
                              </div>
                              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-black h-full" style={{ width: '90%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-xs">Node.js</span>
                                <span className="text-xs">75%</span>
                              </div>
                              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-black h-full" style={{ width: '75%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-xs">TypeScript</span>
                                <span className="text-xs">70%</span>
                              </div>
                              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-black h-full" style={{ width: '70%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 border border-gray-200 rounded-lg">
                          <h3 className="font-medium mb-3">Experience Match</h3>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-xs">Frontend Development</span>
                                <span className="text-xs">95%</span>
                              </div>
                              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-black h-full" style={{ width: '95%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-xs">UI/UX Implementation</span>
                                <span className="text-xs">85%</span>
                              </div>
                              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-black h-full" style={{ width: '85%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-xs">State Management</span>
                                <span className="text-xs">80%</span>
                              </div>
                              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-black h-full" style={{ width: '80%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-xs">API Integration</span>
                                <span className="text-xs">90%</span>
                              </div>
                              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-black h-full" style={{ width: '90%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 border border-gray-200 rounded-lg">
                          <h3 className="font-medium mb-3">Skill Gap Analysis</h3>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-xs">GraphQL</span>
                                <span className="text-xs">60%</span>
                              </div>
                              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-black h-full" style={{ width: '60%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-xs">Testing (Jest/Cypress)</span>
                                <span className="text-xs">55%</span>
                              </div>
                              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-black h-full" style={{ width: '55%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-xs">CI/CD Pipelines</span>
                                <span className="text-xs">45%</span>
                              </div>
                              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-black h-full" style={{ width: '45%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-xs">AWS/Cloud Services</span>
                                <span className="text-xs">40%</span>
                              </div>
                              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-black h-full" style={{ width: '40%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end mt-6">
                        <Button>
                          <Users className="mr-2 h-4 w-4" />
                          <span>Find Jobs Matching Your Skills</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="tasks">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5" />
                        <span>Todo List</span>
                      </CardTitle>
                      <Button className="futuristic-button">
                        <Plus className="h-4 w-4 mr-2" />
                        <span>Add Task</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">High Priority</span>
                        <Button variant="ghost" size="sm">
                          <Plus className="h-3 w-3 mr-1" />
                          <span className="text-xs">Add</span>
                        </Button>
                      </div>
                      
                      <div className="space-y-2">
                        {tasks.filter(task => task.priority === 'high').map((task, i) => (
                          <div key={i} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover-lift">
                            <input 
                              type="checkbox" 
                              checked={task.completed}
                              className="h-4 w-4 mt-0.5 rounded border-gray-300 text-black focus:ring-gray-500"
                              readOnly
                            />
                            <div className="flex-grow">
                              <div className="flex justify-between">
                                <p className={`text-sm font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>{task.task}</p>
                                <Badge variant="outline" className="border-red-500 text-red-500">High</Badge>
                              </div>
                              {task.company && <p className="text-xs text-gray-500">{task.company}</p>}
                              <p className="text-xs text-gray-500 mt-1">Due {task.dueDate}</p>
                            </div>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <MoreHorizontal className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mt-6">
                        <span className="text-sm font-medium">Medium Priority</span>
                        <Button variant="ghost" size="sm">
                          <Plus className="h-3 w-3 mr-1" />
                          <span className="text-xs">Add</span>
                        </Button>
                      </div>
                      
                      <div className="space-y-2">
                        {tasks.filter(task => task.priority === 'medium').map((task, i) => (
                          <div key={i} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover-lift">
                            <input 
                              type="checkbox" 
                              checked={task.completed}
                              className="h-4 w-4 mt-0.5 rounded border-gray-300 text-black focus:ring-gray-500"
                              readOnly
                            />
                            <div className="flex-grow">
                              <div className="flex justify-between">
                                <p className={`text-sm font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>{task.task}</p>
                                <Badge variant="outline" className="border-amber-500 text-amber-500">Medium</Badge>
                              </div>
                              {task.company && <p className="text-xs text-gray-500">{task.company}</p>}
                              <p className="text-xs text-gray-500 mt-1">Due {task.dueDate}</p>
                            </div>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <MoreHorizontal className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mt-6">
                        <span className="text-sm font-medium">Completed</span>
                        <Button variant="ghost" size="sm">
                          <XCircle className="h-3 w-3 mr-1" />
                          <span className="text-xs">Clear</span>
                        </Button>
                      </div>
                      
                      <div className="space-y-2">
                        {tasks.filter(task => task.completed).map((task, i) => (
                          <div key={i} className="flex items-start space-x-3 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                            <input 
                              type="checkbox" 
                              checked={task.completed}
                              className="h-4 w-4 mt-0.5 rounded border-gray-300 text-black focus:ring-gray-500"
                              readOnly
                            />
                            <div className="flex-grow">
                              <div className="flex justify-between">
                                <p className="text-sm font-medium line-through text-gray-400">{task.task}</p>
                                <Badge variant="outline" className="border-gray-300 text-gray-400">Completed</Badge>
                              </div>
                              {task.company && <p className="text-xs text-gray-400">{task.company}</p>}
                            </div>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <MoreHorizontal className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center">
                        <Calendar className="mr-2 h-5 w-5" />
                        <span>Calendar</span>
                      </CardTitle>
                      <Button className="futuristic-button">
                        <Plus className="h-4 w-4 mr-2" />
                        <span>Add Event</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Calendar would go here */}
                      <div className="border border-gray-200 rounded-lg">
                        <div className="bg-gray-50 p-2 flex items-center justify-between border-b">
                          <Button variant="ghost" size="sm">
                            <ChevronDown className="h-4 w-4 mr-1" />
                            <span>April 2025</span>
                          </Button>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="icon" className="h-7 w-7">
                              <ChevronDown className="h-4 w-4 rotate-90" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-7 w-7">
                              <ChevronDown className="h-4 w-4 -rotate-90" />
                            </Button>
                          </div>
                        </div>
                        <div className="grid grid-cols-7 text-center p-4 gap-2">
                          <div className="text-xs text-gray-500">Sun</div>
                          <div className="text-xs text-gray-500">Mon</div>
                          <div className="text-xs text-gray-500">Tue</div>
                          <div className="text-xs text-gray-500">Wed</div>
                          <div className="text-xs text-gray-500">Thu</div>
                          <div className="text-xs text-gray-500">Fri</div>
                          <div className="text-xs text-gray-500">Sat</div>
                          
                          {Array.from({ length: 30 }, (_, i) => (
                            <div 
                              key={i} 
                              className={`p-2 rounded-md text-xs ${
                                i === 9 ? 'bg-black text-white' : 
                                (i === 4 || i === 10 || i === 14) ? 'border border-amber-500' : 
                                'hover:bg-gray-100'
                              }`}
                            >
                              {i + 1}
                              {i === 10 && (
                                <div className="h-1 w-1 bg-amber-500 rounded-full mx-auto mt-1"></div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold mb-3">Upcoming Events</h3>
                        <div className="space-y-3">
                          <div className="p-3 border-l-2 border-amber-500 bg-amber-50 rounded-r-lg">
                            <p className="text-sm font-medium">Technical Interview</p>
                            <p className="text-xs text-gray-500">TechCorp Inc.</p>
                            <div className="flex items-center text-xs text-gray-600 mt-1">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>Apr 11</span>
                              <span className="mx-1">•</span>
                              <Clock className="h-3 w-3 mr-1" />
                              <span>10:00 - 11:30 AM</span>
                            </div>
                          </div>
                          
                          <div className="p-3 border-l-2 border-blue-500 bg-blue-50 rounded-r-lg">
                            <p className="text-sm font-medium">Coding Assessment</p>
                            <p className="text-xs text-gray-500">CloudNet Systems</p>
                            <div className="flex items-center text-xs text-gray-600 mt-1">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>Apr 15</span>
                              <span className="mx-1">•</span>
                              <Clock className="h-3 w-3 mr-1" />
                              <span>Due by 11:59 PM</span>
                            </div>
                          </div>
                          
                          <div className="p-3 border-l-2 border-green-500 bg-green-50 rounded-r-lg">
                            <p className="text-sm font-medium">Offer Discussion</p>
                            <p className="text-xs text-gray-500">FinSoft Corp</p>
                            <div className="flex items-center text-xs text-gray-600 mt-1">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>Apr 18</span>
                              <span className="mx-1">•</span>
                              <Clock className="h-3 w-3 mr-1" />
                              <span>2:00 - 3:00 PM</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationTracking;

