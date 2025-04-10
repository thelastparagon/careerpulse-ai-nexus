
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileText, ArrowUpRight, PieChart, BarChart, Calendar, Settings } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Welcome Section */}
            <Card className="md:col-span-8 bg-gradient-to-r from-careerpulse-blue to-careerpulse-purple text-white">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Welcome back, Alex!</h2>
                    <p className="text-white/90 mb-4">Your career optimization score is improving. Here's what to focus on today:</p>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Resume Optimization</span>
                          <span className="text-sm font-medium">85%</span>
                        </div>
                        <Progress value={85} className="h-2 bg-white/20" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Application Status</span>
                          <span className="text-sm font-medium">60%</span>
                        </div>
                        <Progress value={60} className="h-2 bg-white/20" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Interview Readiness</span>
                          <span className="text-sm font-medium">40%</span>
                        </div>
                        <Progress value={40} className="h-2 bg-white/20" />
                      </div>
                    </div>
                    
                    <Button variant="secondary" className="mt-6 bg-white text-careerpulse-blue hover:bg-white/90">
                      Continue Optimization
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="hidden lg:block">
                    <FileText className="h-24 w-24 text-white/20" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* AI Coach */}
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span>AI Career Coach</span>
                  <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-careerpulse-blue/10 text-careerpulse-blue">New</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="h-8 w-8 rounded-full bg-careerpulse-blue/10 flex items-center justify-center">
                    <span className="text-careerpulse-blue text-xs font-semibold">AI</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 text-sm max-w-sm">
                    <p className="text-gray-700">I noticed you have an interview coming up on Friday. Would you like help preparing for common questions?</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <input 
                    type="text" 
                    placeholder="Ask your career coach..." 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-careerpulse-blue/50"
                  />
                </div>
                
                <div className="mt-4 flex space-x-2">
                  <Button variant="outline" size="sm" className="text-xs">Interview Tips</Button>
                  <Button variant="outline" size="sm" className="text-xs">Resume Advice</Button>
                  <Button variant="outline" size="sm" className="text-xs">Salary Negotiation</Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Application Stats */}
            <Card className="md:col-span-6">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Application Activity</span>
                  <BarChart className="h-4 w-4 text-gray-500" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-careerpulse-blue">12</p>
                    <p className="text-sm text-gray-500">Applications</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-careerpulse-green">5</p>
                    <p className="text-sm text-gray-500">Interviews</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-careerpulse-purple">3</p>
                    <p className="text-sm text-gray-500">Offers</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="font-medium">Senior Frontend Developer</p>
                      <p className="text-sm text-gray-500">Google</p>
                    </div>
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Interview</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="font-medium">UX Designer</p>
                      <p className="text-sm text-gray-500">Facebook</p>
                    </div>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Offer</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="font-medium">Product Manager</p>
                      <p className="text-sm text-gray-500">Airbnb</p>
                    </div>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Applied</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">View All Applications</Button>
              </CardContent>
            </Card>
            
            {/* Skill Analysis */}
            <Card className="md:col-span-6">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Skills Gap Analysis</span>
                  <PieChart className="h-4 w-4 text-gray-500" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">Based on 25 job postings for "Frontend Developer"</p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">React</span>
                        <span className="text-sm font-medium">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">TypeScript</span>
                        <span className="text-sm font-medium">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Next.js</span>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">GraphQL</span>
                        <span className="text-sm font-medium text-orange-600">45% (Gap)</span>
                      </div>
                      <Progress value={45} className="h-2 bg-gray-200" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Testing (Jest)</span>
                        <span className="text-sm font-medium text-red-600">30% (Major Gap)</span>
                      </div>
                      <Progress value={30} className="h-2 bg-gray-200" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-careerpulse-blue/5 p-4 rounded-lg">
                  <h4 className="font-medium text-careerpulse-blue mb-2">Recommended Courses</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Advanced GraphQL Mastery</span>
                      <a href="#" className="text-careerpulse-blue hover:underline">View</a>
                    </li>
                    <li className="flex justify-between">
                      <span>Testing React Applications with Jest</span>
                      <a href="#" className="text-careerpulse-blue hover:underline">View</a>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            {/* Upcoming Events */}
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Upcoming Events</span>
                  <Calendar className="h-4 w-4 text-gray-500" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 text-center">
                      <p className="text-lg font-bold text-careerpulse-blue">15</p>
                      <p className="text-xs text-gray-500">APR</p>
                    </div>
                    <div>
                      <p className="font-medium">Technical Interview</p>
                      <p className="text-sm text-gray-500">Google - 2:00 PM</p>
                      <div className="flex mt-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-careerpulse-blue/10 text-careerpulse-blue">Prep Required</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 text-center">
                      <p className="text-lg font-bold text-careerpulse-purple">18</p>
                      <p className="text-xs text-gray-500">APR</p>
                    </div>
                    <div>
                      <p className="font-medium">Resume Workshop</p>
                      <p className="text-sm text-gray-500">Virtual - 6:00 PM</p>
                      <div className="flex mt-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-careerpulse-green/10 text-careerpulse-green">Confirmed</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 text-center">
                      <p className="text-lg font-bold text-gray-500">22</p>
                      <p className="text-xs text-gray-500">APR</p>
                    </div>
                    <div>
                      <p className="font-medium">Networking Event</p>
                      <p className="text-sm text-gray-500">Tech Hub - 7:00 PM</p>
                      <div className="flex mt-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">Optional</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  View Calendar
                </Button>
              </CardContent>
            </Card>
            
            {/* Settings */}
            <Card className="md:col-span-8">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Quick Settings</span>
                  <Settings className="h-4 w-4 text-gray-500" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium mb-2">Job Alerts</h3>
                    <p className="text-sm text-gray-500 mb-3">Receive notifications for new job matches</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-careerpulse-green">Enabled</span>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium mb-2">Email Frequency</h3>
                    <p className="text-sm text-gray-500 mb-3">How often you receive summary emails</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Daily</span>
                      <Button variant="outline" size="sm">Change</Button>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium mb-2">Privacy Settings</h3>
                    <p className="text-sm text-gray-500 mb-3">Manage who can see your profile</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-careerpulse-blue">Review</span>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Button variant="link" className="px-0 text-careerpulse-blue">
                    View all settings
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
