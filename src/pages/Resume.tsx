
import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  FileText, 
  ChevronRight, 
  Download, 
  Edit, 
  AlertCircle, 
  CheckCircle2, 
  MessageSquare,
  FileUp
} from "lucide-react";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("analysis");
  
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Resume Manager</h1>
            <p className="text-gray-600">Upload, optimize, and track the performance of your resume</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
              {/* Upload Resume Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Upload className="mr-2 h-5 w-5" />
                    <span>Upload Resume</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <FileUp className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm text-gray-500 mb-4">Drag and drop your resume file here, or click to browse</p>
                    <input type="file" className="hidden" id="resume-upload" />
                    <label htmlFor="resume-upload">
                      <Button className="bg-careerpulse-blue hover:bg-careerpulse-blue/90">
                        Select File
                      </Button>
                    </label>
                    <p className="text-xs text-gray-400 mt-2">Supports PDF, DOCX (Max 5MB)</p>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-medium mb-3">Current Resume</h3>
                    <div className="bg-gray-50 p-3 rounded-lg flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-gray-400 mr-3" />
                        <div>
                          <p className="font-medium">Alex_Chen_Resume.pdf</p>
                          <p className="text-xs text-gray-500">Uploaded 2 days ago</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Resume Score Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Resume Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-careerpulse-blue/10 text-careerpulse-blue mb-2">
                      <span className="text-3xl font-bold">85</span>
                    </div>
                    <p className="text-sm text-gray-500">Your resume is performing well!</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Content</span>
                        <span className="text-sm font-medium">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Formatting</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Keywords</span>
                        <span className="text-sm font-medium">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">ATS Compatibility</span>
                        <span className="text-sm font-medium">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-2">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex space-x-4 border-b">
                    <button
                      className={`pb-2 px-1 ${activeTab === "analysis" ? "text-careerpulse-blue border-b-2 border-careerpulse-blue" : "text-gray-500"}`}
                      onClick={() => setActiveTab("analysis")}
                    >
                      AI Analysis
                    </button>
                    <button
                      className={`pb-2 px-1 ${activeTab === "optimizer" ? "text-careerpulse-blue border-b-2 border-careerpulse-blue" : "text-gray-500"}`}
                      onClick={() => setActiveTab("optimizer")}
                    >
                      Resume Optimizer
                    </button>
                    <button
                      className={`pb-2 px-1 ${activeTab === "history" ? "text-careerpulse-blue border-b-2 border-careerpulse-blue" : "text-gray-500"}`}
                      onClick={() => setActiveTab("history")}
                    >
                      Version History
                    </button>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto">
                  {activeTab === "analysis" && (
                    <div>
                      <div className="mb-6">
                        <h3 className="text-lg font-medium mb-3">AI Insights</h3>
                        
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="h-8 w-8 rounded-full bg-careerpulse-blue/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-careerpulse-blue text-xs font-semibold">AI</span>
                          </div>
                          <div className="bg-gray-100 rounded-lg p-4 text-sm">
                            <p className="text-gray-700 mb-3">
                              I've analyzed your resume and found several strengths and opportunities for improvement. 
                              Your experience section is strong with quantifiable achievements, but there are some areas 
                              that could be optimized to increase your interview chances.
                            </p>
                            <Button variant="link" className="px-0 text-careerpulse-blue">
                              View detailed report
                              <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-medium mb-3">Key Findings</h3>
                        
                        <div className="space-y-3">
                          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                            <div className="flex">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                              <div>
                                <h4 className="font-medium text-green-700">Strong quantifiable achievements</h4>
                                <p className="text-sm text-green-600">
                                  Your use of metrics and numbers effectively demonstrates your impact.
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                            <div className="flex">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                              <div>
                                <h4 className="font-medium text-green-700">Excellent skills section</h4>
                                <p className="text-sm text-green-600">
                                  Your technical skills are well organized and relevant to your target roles.
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                            <div className="flex">
                              <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                              <div>
                                <h4 className="font-medium text-yellow-700">Add more keywords</h4>
                                <p className="text-sm text-yellow-600">
                                  Include more industry-specific keywords to improve ATS performance. 
                                  Consider adding: "React Native", "CI/CD", and "Agile methodology".
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                            <div className="flex">
                              <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                              <div>
                                <h4 className="font-medium text-yellow-700">Strengthen summary section</h4>
                                <p className="text-sm text-yellow-600">
                                  Your professional summary could be more impactful. Focus on your unique value proposition and career highlights.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Next Steps</h3>
                        
                        <div className="flex mb-4">
                          <Button className="bg-careerpulse-blue hover:bg-careerpulse-blue/90">
                            Optimize Resume
                          </Button>
                          <Button variant="outline" className="ml-2">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Ask AI Coach
                          </Button>
                        </div>
                        
                        <div className="bg-careerpulse-blue/5 p-4 rounded-lg">
                          <h4 className="font-medium text-careerpulse-blue mb-2">Pro Tip</h4>
                          <p className="text-sm text-gray-600">
                            Customize your resume for each job application. Our AI can help you tailor your resume to 
                            specific job descriptions to increase your match rate with ATS systems.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === "optimizer" && (
                    <div className="text-center p-12">
                      <h3 className="text-lg font-medium mb-2">Resume Optimizer</h3>
                      <p className="text-gray-500 mb-6">This content will be implemented in the next phase</p>
                      <Button variant="outline">Coming Soon</Button>
                    </div>
                  )}
                  
                  {activeTab === "history" && (
                    <div className="text-center p-12">
                      <h3 className="text-lg font-medium mb-2">Version History</h3>
                      <p className="text-gray-500 mb-6">This content will be implemented in the next phase</p>
                      <Button variant="outline">Coming Soon</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Resume;
