
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import ResumeOptimization from "./pages/ResumeOptimization";
import JobTrendAnalysis from "./pages/JobTrendAnalysis";
import AICareerCoaching from "./pages/AICareerCoaching";
import EmailOutreach from "./pages/EmailOutreach";
import ApplicationTracking from "./pages/ApplicationTracking";
import SkillGapAnalysis from "./pages/SkillGapAnalysis";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/resume" element={<Resume />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume-optimization" element={<ResumeOptimization />} />
          <Route path="/job-trend-analysis" element={<JobTrendAnalysis />} />
          <Route path="/ai-career-coaching" element={<AICareerCoaching />} />
          <Route path="/email-outreach" element={<EmailOutreach />} />
          <Route path="/application-tracking" element={<ApplicationTracking />} />
          <Route path="/skill-gap-analysis" element={<SkillGapAnalysis />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
