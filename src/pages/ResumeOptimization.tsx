
import React, { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUp, Check, AlertCircle, UploadCloud, Download, FileText } from 'lucide-react';

const ResumeOptimization = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploaded, setIsUploaded] = useState(false);
  
  // Simulate upload when button is clicked
  const handleUpload = () => {
    setUploadProgress(0);
    setIsUploaded(false);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploaded(true);
          return 100;
        }
        return prev + 10;
      });
    }, 250);
  };
  
  return (
    <div className="min-h-screen flex flex-col futuristic-bg">
      <Navbar />
      <div className="futuristic-grid"></div>
      
      <main className="flex-grow py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Resume Optimization</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Upload your resume and let our AI analyze and optimize it to increase your chances of landing interviews.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <Card className="glass-panel">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileUp className="mr-2 h-5 w-5" />
                    <span>Upload Resume</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <UploadCloud className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                    <p className="text-sm text-gray-500 mb-4">Drag and drop your resume file here, or click to browse</p>
                    <input type="file" className="hidden" id="resume-upload" />
                    <label htmlFor="resume-upload">
                      <Button onClick={handleUpload} className="futuristic-button">
                        <span>Select File</span>
                      </Button>
                    </label>
                    <p className="text-xs text-gray-400 mt-2">Supports PDF, DOCX (Max 5MB)</p>
                    
                    {uploadProgress > 0 && !isUploaded && (
                      <div className="mt-4">
                        <p className="text-sm mb-2">Uploading... {uploadProgress}%</p>
                        <Progress value={uploadProgress} className="h-2" />
                      </div>
                    )}
                    
                    {isUploaded && (
                      <div className="mt-4 p-3 bg-gray-50 rounded-lg flex items-center">
                        <Check className="text-green-500 h-5 w-5 mr-2" />
                        <span className="text-sm">Resume uploaded successfully</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-panel">
                <CardHeader>
                  <CardTitle>Resume Score</CardTitle>
                  <CardDescription>How your resume ranks against industry standards</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center h-28 w-28 rounded-full bg-gray-50 border border-gray-200 text-black relative">
                      <span className="text-3xl font-bold">76</span>
                      <span className="text-sm absolute -bottom-1">/ 100</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Your resume needs some improvements</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Content Quality</span>
                        <span className="text-sm font-medium">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">ATS Compatibility</span>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Keyword Optimization</span>
                        <span className="text-sm font-medium">70%</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Visual Structure</span>
                        <span className="text-sm font-medium">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-2">
              <Card className="glass-panel h-full">
                <CardHeader>
                  <Tabs defaultValue="analysis" onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="analysis">AI Analysis</TabsTrigger>
                      <TabsTrigger value="suggestions">Improvement Suggestions</TabsTrigger>
                      <TabsTrigger value="preview">Resume Preview</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardHeader>
                <CardContent className="h-[calc(100%-80px)] overflow-y-auto">
                  <TabsContent value="analysis" className="mt-0">
                    <div className="p-4 border border-gray-200 rounded-lg mb-4">
                      <h3 className="font-semibold mb-2">Overall Analysis</h3>
                      <p className="text-gray-700 mb-4">
                        Your resume demonstrates solid experience and skills, but could benefit from more quantifiable achievements and targeted keywords for your industry. The AI has detected that your resume might not pass some ATS systems due to formatting issues.
                      </p>
                      
                      <h4 className="font-medium text-sm text-gray-500 mb-2">Key Findings:</h4>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Missing quantifiable achievements in your most recent role</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Skills section could be more targeted to job descriptions</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Education section is well structured and complete</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Contact information is clear and professional</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg mb-4">
                      <h3 className="font-semibold mb-2">Keyword Analysis</h3>
                      <p className="text-gray-700 mb-3">
                        Common keywords in your industry that are missing from your resume:
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Data Analysis</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Project Management</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Agile</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Cross-functional</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">ROI</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Strategic Planning</span>
                      </div>
                    </div>
                    
                    <Button className="futuristic-button w-full">
                      <span>Generate Optimized Resume</span>
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="suggestions" className="mt-0">
                    <div className="space-y-6">
                      <div className="p-4 border-l-4 border-gray-300 bg-gray-50 rounded-r-lg">
                        <h3 className="font-semibold mb-1">Professional Summary</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Your summary could be more impactful by highlighting your unique value proposition.
                        </p>
                        <div className="p-3 bg-white border border-gray-200 rounded-lg text-sm">
                          <p className="font-medium mb-1">Suggested Improvement:</p>
                          <p className="text-gray-700">
                            "Results-driven software engineer with 5+ years of experience in building scalable web applications using modern JavaScript frameworks. Specialized in optimizing application performance and implementing CI/CD pipelines that reduced deployment time by 40%."
                          </p>
                        </div>
                      </div>
                      
                      <div className="p-4 border-l-4 border-gray-300 bg-gray-50 rounded-r-lg">
                        <h3 className="font-semibold mb-1">Work Experience</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Add more measurable achievements to showcase your impact.
                        </p>
                        <div className="p-3 bg-white border border-gray-200 rounded-lg text-sm">
                          <p className="font-medium mb-1">Suggested Improvement:</p>
                          <p className="text-gray-700">
                            "Led a team of 5 developers to redesign the company's e-commerce platform, resulting in a 30% increase in conversion rate and 25% reduction in bounce rate within 3 months."
                          </p>
                        </div>
                      </div>
                      
                      <div className="p-4 border-l-4 border-gray-300 bg-gray-50 rounded-r-lg">
                        <h3 className="font-semibold mb-1">Skills Section</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Reorganize skills into categories and add missing relevant skills.
                        </p>
                        <div className="p-3 bg-white border border-gray-200 rounded-lg text-sm">
                          <p className="font-medium mb-1">Suggested Improvement:</p>
                          <p className="text-gray-700">
                            Group your skills into: Technical Skills (JavaScript, React, Node.js), Project Management (Agile, Scrum, JIRA), and Soft Skills (Leadership, Communication, Problem-solving).
                          </p>
                        </div>
                      </div>
                      
                      <Button className="futuristic-button w-full">
                        <span>Apply All Suggestions</span>
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="preview" className="mt-0">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <h2 className="text-2xl font-bold">John Anderson</h2>
                          <p className="text-gray-600">Senior Software Engineer</p>
                        </div>
                        <div className="text-right text-sm text-gray-600">
                          <p>john.anderson@email.com</p>
                          <p>(555) 123-4567</p>
                          <p>San Francisco, CA</p>
                        </div>
                      </div>
                      
                      <div className="mb-5">
                        <h3 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-3">Professional Summary</h3>
                        <p className="text-gray-700 text-sm">
                          Software engineer with 5 years of experience in web development. Skilled in JavaScript, React, and Node.js. Passionate about building user-friendly applications.
                        </p>
                      </div>
                      
                      <div className="mb-5">
                        <h3 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-3">Work Experience</h3>
                        
                        <div className="mb-4">
                          <div className="flex justify-between">
                            <h4 className="font-medium">Senior Software Engineer</h4>
                            <span className="text-sm text-gray-600">Jan 2020 - Present</span>
                          </div>
                          <p className="text-sm font-medium text-gray-600 mb-1">TechCorp Inc., San Francisco, CA</p>
                          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                            <li>Developed web applications using React and Node.js</li>
                            <li>Collaborated with design team to implement user interfaces</li>
                            <li>Maintained and updated existing codebases</li>
                          </ul>
                        </div>
                        
                        <div>
                          <div className="flex justify-between">
                            <h4 className="font-medium">Software Developer</h4>
                            <span className="text-sm text-gray-600">Mar 2017 - Dec 2019</span>
                          </div>
                          <p className="text-sm font-medium text-gray-600 mb-1">WebSolutions Co., Seattle, WA</p>
                          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                            <li>Built responsive websites for clients in various industries</li>
                            <li>Assisted senior developers with complex features</li>
                            <li>Participated in code reviews and team meetings</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mb-5">
                        <h3 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-3">Education</h3>
                        <div className="flex justify-between">
                          <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                          <span className="text-sm text-gray-600">2013 - 2017</span>
                        </div>
                        <p className="text-sm text-gray-600">University of Washington, Seattle, WA</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-3">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">JavaScript</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">React</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Node.js</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">HTML/CSS</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Git</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">RESTful APIs</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">MongoDB</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Express</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end mt-4 space-x-3">
                      <Button variant="outline" className="flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                      </Button>
                      <Button className="futuristic-button flex items-center">
                        <Download className="mr-2 h-4 w-4" />
                        <span>Download</span>
                      </Button>
                    </div>
                  </TabsContent>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResumeOptimization;
