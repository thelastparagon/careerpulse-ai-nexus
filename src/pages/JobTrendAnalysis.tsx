
import React, { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, BarChart, PieChart, AreaChart } from 'recharts';
import { Line, Bar, Pie, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Search, TrendingUp, Filter, Download, Share2, Bookmark } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

// Sample data for charts
const jobTrendData = [
  { month: 'Jan', 'Software Engineer': 1200, 'Data Scientist': 850, 'Product Manager': 640 },
  { month: 'Feb', 'Software Engineer': 1300, 'Data Scientist': 900, 'Product Manager': 700 },
  { month: 'Mar', 'Software Engineer': 1150, 'Data Scientist': 950, 'Product Manager': 650 },
  { month: 'Apr', 'Software Engineer': 1400, 'Data Scientist': 1000, 'Product Manager': 680 },
  { month: 'May', 'Software Engineer': 1500, 'Data Scientist': 1200, 'Product Manager': 700 },
  { month: 'Jun', 'Software Engineer': 1350, 'Data Scientist': 1100, 'Product Manager': 740 },
];

const skillTrendData = [
  { name: 'React', value: 85 },
  { name: 'Python', value: 70 },
  { name: 'AWS', value: 65 },
  { name: 'Machine Learning', value: 55 },
  { name: 'Docker', value: 45 },
];

const salaryData = [
  { role: 'Junior Developer', salary: 70000 },
  { role: 'Mid-level Developer', salary: 95000 },
  { role: 'Senior Developer', salary: 130000 },
  { role: 'Tech Lead', salary: 155000 },
  { role: 'Engineering Manager', salary: 185000 },
];

const locationData = [
  { name: 'San Francisco', value: 25 },
  { name: 'New York', value: 20 },
  { name: 'Seattle', value: 18 },
  { name: 'Austin', value: 14 },
  { name: 'Boston', value: 12 },
  { name: 'Other', value: 11 },
];

const JobTrendAnalysis = () => {
  const [activeTab, setActiveTab] = useState("trends");
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="min-h-screen flex flex-col futuristic-bg">
      <Navbar />
      <div className="futuristic-grid"></div>
      
      <main className="flex-grow py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Job Trend Analysis</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Explore real-time insights into job market trends, in-demand skills, and emerging opportunities.
          </p>
          
          <div className="glass-panel p-4 mb-8 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search job roles, skills, or industries" 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <Select defaultValue="software">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Industries</SelectLabel>
                    <SelectItem value="software">Software Development</SelectItem>
                    <SelectItem value="data">Data Science</SelectItem>
                    <SelectItem value="design">UI/UX Design</SelectItem>
                    <SelectItem value="marketing">Digital Marketing</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                <span>Filters</span>
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="trends" onValueChange={setActiveTab} className="mb-6">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-4">
              <TabsTrigger value="trends">Job Trends</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="salary">Salary Data</TabsTrigger>
              <TabsTrigger value="location">Locations</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <TabsContent value="trends" className={activeTab === "trends" ? "block" : "hidden"}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Card className="glass-panel lg:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    <span>Job Posting Trends (Last 6 Months)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={jobTrendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="month" tick={{ fill: '#666' }} />
                        <YAxis tick={{ fill: '#666' }} />
                        <Tooltip contentStyle={{ backgroundColor: 'white', borderColor: '#e0e0e0' }} />
                        <Legend />
                        <Line type="monotone" dataKey="Software Engineer" stroke="#000000" strokeWidth={2} />
                        <Line type="monotone" dataKey="Data Scientist" stroke="#666666" strokeWidth={2} />
                        <Line type="monotone" dataKey="Product Manager" stroke="#999999" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-panel">
                <CardHeader className="pb-2">
                  <CardTitle>Key Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <h3 className="text-sm font-semibold mb-1">Software Engineer</h3>
                      <p className="text-sm text-gray-600">Demand increased by 25% in the past 6 months, with a particular focus on full-stack developers.</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <h3 className="text-sm font-semibold mb-1">Data Scientist</h3>
                      <p className="text-sm text-gray-600">Job postings have risen steadily, with 41% growth year-over-year.</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <h3 className="text-sm font-semibold mb-1">Emerging Roles</h3>
                      <p className="text-sm text-gray-600">AI Engineering and Cloud Security have seen the fastest growth in the past quarter.</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <h3 className="text-sm font-semibold mb-1">Industry Shifts</h3>
                      <p className="text-sm text-gray-600">Healthcare tech and fintech sectors are posting the most new positions.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="glass-panel mb-6">
              <CardHeader className="pb-2">
                <CardTitle>Recommended Jobs Based on Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3].map((job) => (
                    <div key={job} className="border border-gray-200 rounded-lg p-4 hover-lift">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">Senior Software Engineer</h3>
                          <p className="text-sm text-gray-600">TechCorp Inc.</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="mr-3">San Francisco, CA</span>
                        <span>$130K - $160K</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Looking for a skilled software engineer with expertise in distributed systems and cloud architecture...
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">React</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">AWS</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">Node.js</span>
                      </div>
                      <Button className="w-full mt-2">View Job</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="skills" className={activeTab === "skills" ? "block" : "hidden"}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Card className="glass-panel">
                <CardHeader className="pb-2">
                  <CardTitle>Top In-Demand Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        layout="vertical" 
                        data={skillTrendData} 
                        margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis type="number" tick={{ fill: '#666' }} />
                        <YAxis dataKey="name" type="category" tick={{ fill: '#666' }} />
                        <Tooltip contentStyle={{ backgroundColor: 'white', borderColor: '#e0e0e0' }} />
                        <Bar dataKey="value" fill="#000000" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-panel lg:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle>Skills Gap Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 mb-4">
                      Based on current market trends and your profile, here are the key skills you should consider developing:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h3 className="font-semibold mb-2">Technical Skills</h3>
                        <ul className="space-y-2">
                          <li className="flex justify-between items-center">
                            <span className="text-sm">Cloud Architecture (AWS)</span>
                            <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">High Priority</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span className="text-sm">Containerization (Docker)</span>
                            <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">Medium Priority</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span className="text-sm">TypeScript</span>
                            <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">Medium Priority</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span className="text-sm">GraphQL</span>
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Low Priority</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h3 className="font-semibold mb-2">Soft Skills</h3>
                        <ul className="space-y-2">
                          <li className="flex justify-between items-center">
                            <span className="text-sm">Agile Project Management</span>
                            <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">High Priority</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span className="text-sm">Cross-functional Collaboration</span>
                            <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">Medium Priority</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span className="text-sm">Technical Writing</span>
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Low Priority</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span className="text-sm">Presentation Skills</span>
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Low Priority</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-4">
                      <Button className="futuristic-button">
                        <span>Generate Personalized Learning Path</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="salary" className={activeTab === "salary" ? "block" : "hidden"}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card className="glass-panel">
                <CardHeader className="pb-2">
                  <CardTitle>Salary Trends by Role</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={salaryData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="role" tick={{ fill: '#666' }} />
                        <YAxis tick={{ fill: '#666' }} />
                        <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Salary']} contentStyle={{ backgroundColor: 'white', borderColor: '#e0e0e0' }} />
                        <Bar dataKey="salary" fill="#000000" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-panel">
                <CardHeader className="pb-2">
                  <CardTitle>Salary Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 mb-4">
                      Based on market data across the software engineering field:
                    </p>
                    
                    <div className="p-4 border border-gray-200 rounded-lg mb-4">
                      <h3 className="font-semibold mb-2">Factors Affecting Salary</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="font-medium mr-2">•</span>
                          <span>Experience level (4-7 years typically sees the largest percentage jumps)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">•</span>
                          <span>Technical expertise in high-demand areas (AI/ML, Cloud Security)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">•</span>
                          <span>Industry (fintech and healthcare leading in compensation)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">•</span>
                          <span>Company size and funding stage</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-semibold mb-2">Salary Negotiation Tips</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="font-medium mr-2">•</span>
                          <span>Research salary ranges for your role, experience, and location</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">•</span>
                          <span>Highlight specific accomplishments and their business impact</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">•</span>
                          <span>Consider total compensation (equity, benefits, bonuses)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2">•</span>
                          <span>Practice your negotiation pitch and anticipate objections</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex justify-center mt-4">
                      <Button className="futuristic-button">
                        <span>Get Personalized Salary Report</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="location" className={activeTab === "location" ? "block" : "hidden"}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Card className="glass-panel">
                <CardHeader className="pb-2">
                  <CardTitle>Job Distribution by Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie 
                          data={locationData} 
                          cx="50%" 
                          cy="50%" 
                          labelLine={false}
                          outerRadius={100} 
                          fill="#8884d8" 
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {locationData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#000000' : `#${(5 - index) * 222}${(5 - index) * 222}${(5 - index) * 222}`} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value, name) => [`${value}%`, name]} contentStyle={{ backgroundColor: 'white', borderColor: '#e0e0e0' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-panel lg:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle>Remote Work Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={[
                          { year: '2019', remote: 15, hybrid: 25, onsite: 60 },
                          { year: '2020', remote: 60, hybrid: 30, onsite: 10 },
                          { year: '2021', remote: 50, hybrid: 40, onsite: 10 },
                          { year: '2022', remote: 40, hybrid: 45, onsite: 15 },
                          { year: '2023', remote: 35, hybrid: 50, onsite: 15 },
                          { year: '2024', remote: 30, hybrid: 55, onsite: 15 },
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                          <XAxis dataKey="year" tick={{ fill: '#666' }} />
                          <YAxis tick={{ fill: '#666' }} />
                          <Tooltip contentStyle={{ backgroundColor: 'white', borderColor: '#e0e0e0' }} />
                          <Area type="monotone" dataKey="remote" stackId="1" stroke="#000000" fill="#000000" />
                          <Area type="monotone" dataKey="hybrid" stackId="1" stroke="#666666" fill="#666666" />
                          <Area type="monotone" dataKey="onsite" stackId="1" stroke="#999999" fill="#999999" />
                          <Legend />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h3 className="font-semibold mb-2">Remote Work Insights</h3>
                        <p className="text-sm text-gray-600">
                          Remote work opportunities have stabilized at 30-35% of tech job postings, with hybrid roles becoming the new standard at 55%. Companies are finding a balance between flexibility and in-person collaboration.
                        </p>
                      </div>
                      
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h3 className="font-semibold mb-2">Location Strategy</h3>
                        <p className="text-sm text-gray-600">
                          Consider targeting companies with distributed teams or those with offices in tech hubs outside traditional centers like San Francisco and New York, where competition is less intense but salary ranges remain competitive.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <div className="flex justify-between items-center mt-8">
            <div>
              <Button variant="outline" className="mr-2 flex items-center">
                <Download className="mr-2 h-4 w-4" />
                <span>Download Report</span>
              </Button>
              <Button variant="outline" className="flex items-center">
                <Share2 className="mr-2 h-4 w-4" />
                <span>Share</span>
              </Button>
            </div>
            <Button className="futuristic-button">
              <span>Set Job Alerts</span>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobTrendAnalysis;
