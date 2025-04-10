
import React, { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Send, UserPlus, Settings, RefreshCw, PenTool, List, Plus, MessageSquare, ChevronDown, Check } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const EmailOutreach = () => {
  const [activeTab, setActiveTab] = useState("compose");
  const [emailSubject, setEmailSubject] = useState("Introduction - Software Engineer with expertise in AI applications");
  const [emailBody, setEmailBody] = useState(`Dear [Recipient Name],

I hope this email finds you well. My name is [Your Name], and I recently came across [Company Name] and was impressed by your work on [specific project or company achievement].

I am a [Your Position] with [X] years of experience in [Your Key Skills], and I'm particularly interested in the innovative work your team is doing in [specific area relevant to the company].

I would love to learn more about potential opportunities at [Company Name] and how my background in [relevant experience] might align with your team's needs.

Would you be available for a brief 15-minute call next week to discuss how my skills could contribute to your team's success?

Thank you for considering my request. I look forward to hearing from you.

Best regards,
[Your Name]
[Your Phone Number]
[Your LinkedIn Profile]`);
  
  const [generatingTemplate, setGeneratingTemplate] = useState(false);
  
  const handleGenerateTemplate = () => {
    setGeneratingTemplate(true);
    
    // Simulate AI generation with a delay
    setTimeout(() => {
      setGeneratingTemplate(false);
    }, 2000);
  };
  
  const recruiters = [
    { name: "Sarah Johnson", company: "TechCorp Inc.", position: "Technical Recruiter", status: "To Contact" },
    { name: "Michael Rodriguez", company: "InnovateSoft", position: "Senior Talent Acquisition", status: "Follow Up" },
    { name: "Jennifer Lee", company: "DataFocus Systems", position: "HR Director", status: "Contacted" },
    { name: "Robert Williams", company: "CloudTech Solutions", position: "Engineering Manager", status: "Responded" },
    { name: "Amanda Chen", company: "Quantum Software", position: "Technical Recruiter", status: "To Contact" },
  ];
  
  const campaigns = [
    { name: "Software Engineering Roles", targets: 28, sent: 24, responses: 8, meetings: 3, status: "Active" },
    { name: "Data Science Positions", targets: 15, sent: 15, responses: 5, meetings: 2, status: "Active" },
    { name: "Product Management Outreach", targets: 20, sent: 8, responses: 3, meetings: 1, status: "Paused" },
  ];
  
  return (
    <div className="min-h-screen flex flex-col futuristic-bg">
      <Navbar />
      <div className="futuristic-grid"></div>
      
      <main className="flex-grow py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Email Outreach</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Build professional relationships with AI-powered email campaigns that connect you with recruiters and hiring managers.
          </p>
          
          <Tabs defaultValue="compose" onValueChange={setActiveTab} className="mb-6">
            <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3">
              <TabsTrigger value="compose">Compose</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <TabsContent value="compose" className={activeTab === "compose" ? "block" : "hidden"}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Mail className="mr-2 h-5 w-5" />
                      <span>Email Composer</span>
                    </CardTitle>
                    <CardDescription>Create personalized outreach emails powered by AI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="template">Email Template</Label>
                        <div className="flex items-center space-x-2 mb-2">
                          <select className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm flex-grow">
                            <option>Initial Outreach - Standard</option>
                            <option>Initial Outreach - Technical Role</option>
                            <option>Follow-up Message</option>
                            <option>Networking Request</option>
                            <option>Custom Template</option>
                          </select>
                          <Button variant="outline" size="sm">
                            <PenTool className="h-4 w-4 mr-1" /> Save As
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="subject">Subject Line</Label>
                        <Input 
                          id="subject" 
                          value={emailSubject}
                          onChange={(e) => setEmailSubject(e.target.value)}
                          className="mb-1"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Subject strength: Good</span>
                          <span>55 characters</span>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="body">Email Body</Label>
                        <Textarea 
                          id="body" 
                          value={emailBody}
                          onChange={(e) => setEmailBody(e.target.value)}
                          rows={12}
                          className="font-mono text-sm"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>Readability: Good</span>
                          <span>217 words</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-end space-x-3 mt-4">
                        <Button variant="outline" className="flex items-center" onClick={handleGenerateTemplate}>
                          <RefreshCw className={`mr-2 h-4 w-4 ${generatingTemplate ? 'animate-spin' : ''}`} />
                          <span>{generatingTemplate ? 'Generating...' : 'Generate Alternative'}</span>
                        </Button>
                        <Button className="futuristic-button flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          <span>Send Email</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <CardTitle>Personalization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="recipient">Email Recipient</Label>
                        <select className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm">
                          <option>Sarah Johnson (TechCorp)</option>
                          <option>Michael Rodriguez (InnovateSoft)</option>
                          <option>Jennifer Lee (DataFocus)</option>
                          <option>+ Add New Recipient</option>
                        </select>
                      </div>
                      
                      <div>
                        <Label className="flex items-center justify-between">
                          <span>Personalization Level</span>
                          <span className="text-sm text-gray-500">Advanced</span>
                        </Label>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-2">
                          <div className="bg-black h-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <h3 className="text-sm font-medium mb-3">Personalization Variables</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>[Recipient Name]</span>
                            <span className="text-gray-500">Sarah Johnson</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>[Company Name]</span>
                            <span className="text-gray-500">TechCorp Inc.</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>[Your Name]</span>
                            <span className="text-gray-500">Alex Chen</span>
                          </div>
                        </div>
                        
                        <Button variant="outline" className="w-full mt-4 text-sm">
                          <Plus className="h-3 w-3 mr-1" /> Add Custom Variable
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <CardTitle>Email Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="schedule" className="cursor-pointer">Schedule sending</Label>
                        <Switch id="schedule" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Label htmlFor="followup" className="cursor-pointer">Auto follow-up</Label>
                        <Switch id="followup" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Label htmlFor="track" className="cursor-pointer">Track opens & clicks</Label>
                        <Switch id="track" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Label htmlFor="signature" className="cursor-pointer">Include signature</Label>
                        <Switch id="signature" defaultChecked />
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                        <Settings className="h-4 w-4 mr-2" />
                        <span>Advanced Settings</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card className="glass-panel mb-6">
              <CardHeader className="pb-2">
                <CardTitle>AI Writing Suggestions</CardTitle>
                <CardDescription>Recommendations to improve your email effectiveness</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium mb-2 flex items-center">
                      <RefreshCw className="h-4 w-4 mr-2 text-gray-500" />
                      Clarity Improvements
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Consider specifying which project at TechCorp interested you to show you've done your research.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">Apply Suggestion</Button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium mb-2 flex items-center">
                      <RefreshCw className="h-4 w-4 mr-2 text-gray-500" />
                      Value Proposition
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Add a specific example of how your skills could benefit their team based on their current needs.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">Apply Suggestion</Button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium mb-2 flex items-center">
                      <RefreshCw className="h-4 w-4 mr-2 text-gray-500" />
                      Call to Action
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Suggest specific days/times for the call to make it easier for the recipient to respond.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">Apply Suggestion</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contacts" className={activeTab === "contacts" ? "block" : "hidden"}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center">
                        <List className="mr-2 h-5 w-5" />
                        <span>Recruiter Contacts</span>
                      </CardTitle>
                      <Button className="futuristic-button">
                        <UserPlus className="h-4 w-4 mr-2" />
                        <span>Add Contact</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="border rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-500 border-b">
                          <tr>
                            <th className="px-4 py-3 text-left">Name</th>
                            <th className="px-4 py-3 text-left">Company</th>
                            <th className="px-4 py-3 text-left">Position</th>
                            <th className="px-4 py-3 text-left">Status</th>
                            <th className="px-4 py-3 text-left">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {recruiters.map((recruiter, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                              <td className="px-4 py-3">
                                <div className="flex items-center">
                                  <Avatar className="h-8 w-8 mr-3">
                                    <AvatarFallback>{recruiter.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <span className="font-medium">{recruiter.name}</span>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-gray-600">{recruiter.company}</td>
                              <td className="px-4 py-3 text-gray-600">{recruiter.position}</td>
                              <td className="px-4 py-3">
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                  recruiter.status === 'Responded' ? 'bg-green-100 text-green-800' :
                                  recruiter.status === 'Contacted' ? 'bg-blue-100 text-blue-800' :
                                  recruiter.status === 'Follow Up' ? 'bg-amber-100 text-amber-800' :
                                  'bg-gray-100 text-gray-800'
                                }`}>
                                  {recruiter.status}
                                </span>
                              </td>
                              <td className="px-4 py-3">
                                <div className="flex space-x-2">
                                  <Button variant="ghost" size="sm">
                                    <Mail className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <MessageSquare className="h-4 w-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 text-sm">
                      <span className="text-gray-500">Showing 5 of 12 contacts</span>
                      <div className="flex space-x-1">
                        <Button variant="outline" size="sm" disabled>Previous</Button>
                        <Button variant="outline" size="sm">Next</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <CardTitle>Import Contacts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Import contacts from various sources to expand your network.
                    </p>
                    
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.34 18.338H5.666v-8.59H8.34v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.764h-2.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" />
                        </svg>
                        Import from LinkedIn
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start">
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
                        </svg>
                        Import from Google
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start">
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.019-1.155-.231-1.731-.751-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z" />
                        </svg>
                        Import from Apple
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start">
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fillRule="evenodd" clipRule="evenodd" />
                        </svg>
                        Import from CSV
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <CardTitle>Network Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Connection Rate</span>
                          <span className="text-sm font-medium">65%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-black h-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Response Rate</span>
                          <span className="text-sm font-medium">42%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-black h-full" style={{ width: '42%' }}></div>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4 mt-4">
                        <h3 className="text-sm font-medium mb-3">Top Industries</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Technology</span>
                            <span className="text-gray-500">58%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Finance</span>
                            <span className="text-gray-500">23%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Healthcare</span>
                            <span className="text-gray-500">12%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Other</span>
                            <span className="text-gray-500">7%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="campaigns" className={activeTab === "campaigns" ? "block" : "hidden"}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center">
                        <Mail className="mr-2 h-5 w-5" />
                        <span>Active Campaigns</span>
                      </CardTitle>
                      <Button className="futuristic-button">
                        <Plus className="h-4 w-4 mr-2" />
                        <span>New Campaign</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {campaigns.map((campaign, i) => (
                        <div key={i} className="border border-gray-200 rounded-lg p-4 hover-lift">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-medium">{campaign.name}</h3>
                              <p className="text-sm text-gray-500">Created on April 5, 2025</p>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              campaign.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                            }`}>
                              {campaign.status}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-4 gap-4 mb-4">
                            <div className="text-center">
                              <p className="text-2xl font-semibold">{campaign.targets}</p>
                              <p className="text-xs text-gray-500">Targets</p>
                            </div>
                            <div className="text-center">
                              <p className="text-2xl font-semibold">{campaign.sent}</p>
                              <p className="text-xs text-gray-500">Sent</p>
                            </div>
                            <div className="text-center">
                              <p className="text-2xl font-semibold">{campaign.responses}</p>
                              <p className="text-xs text-gray-500">Responses</p>
                            </div>
                            <div className="text-center">
                              <p className="text-2xl font-semibold">{campaign.meetings}</p>
                              <p className="text-xs text-gray-500">Meetings</p>
                            </div>
                          </div>
                          
                          <div className="flex justify-between">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <div className="space-x-2">
                              <Button variant="ghost" size="sm">
                                <Settings className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <RefreshCw className="h-4 w-4" />
                              </Button>
                            </div>
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
                    <CardTitle>Campaign Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-6 border-b">
                        <p className="text-3xl font-bold">32%</p>
                        <p className="text-sm text-gray-500">Average Response Rate</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium mb-3">Key Metrics</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Open Rate</span>
                            <span className="text-gray-500">68%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Click Rate</span>
                            <span className="text-gray-500">24%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Meeting Conversion</span>
                            <span className="text-gray-500">12%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Average Response Time</span>
                            <span className="text-gray-500">1.8 days</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <h3 className="text-sm font-medium mb-3">Best Performing Templates</h3>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <span className="bg-black text-white h-6 w-6 rounded-full flex items-center justify-center text-xs mr-3">1</span>
                            <span className="text-sm">Technical Role Introduction</span>
                          </div>
                          <div className="flex items-center">
                            <span className="bg-gray-300 text-gray-700 h-6 w-6 rounded-full flex items-center justify-center text-xs mr-3">2</span>
                            <span className="text-sm">Specific Project Interest</span>
                          </div>
                          <div className="flex items-center">
                            <span className="bg-gray-200 text-gray-700 h-6 w-6 rounded-full flex items-center justify-center text-xs mr-3">3</span>
                            <span className="text-sm">Referral Follow-up</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4">
                      View Detailed Analytics
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="glass-panel">
                  <CardHeader className="pb-2">
                    <CardTitle>AI Suggestions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Send follow-up emails between Tuesday and Thursday mornings for 15% higher response rates.</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Keep subject lines under 60 characters to improve open rates by up to 20%.</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Personalize your first paragraph with specific company details to increase engagement.</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Include a clear, time-bound call to action in every outreach email.</p>
                      </div>
                      
                      <Button className="futuristic-button w-full mt-2">
                        <span>Get More Tips</span>
                      </Button>
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

export default EmailOutreach;
