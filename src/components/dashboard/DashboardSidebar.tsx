
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  FileText, 
  Search, 
  BarChart2, 
  MessageSquare, 
  Mail, 
  BookOpen, 
  Settings,
  LogOut
} from "lucide-react";

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const SidebarLink = ({ to, icon, label }: SidebarLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <Button
        variant={isActive ? "default" : "ghost"}
        className={`w-full justify-start ${
          isActive 
            ? "bg-careerpulse-blue text-white hover:bg-careerpulse-blue/90" 
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        {icon}
        <span className="ml-2">{label}</span>
      </Button>
    </Link>
  );
};

const DashboardSidebar = () => {
  const links = [
    { to: "/dashboard", icon: <LayoutDashboard size={18} />, label: "Dashboard" },
    { to: "/dashboard/resume", icon: <FileText size={18} />, label: "Resume Manager" },
    { to: "/dashboard/jobs", icon: <Search size={18} />, label: "Job Search" },
    { to: "/dashboard/trends", icon: <BarChart2 size={18} />, label: "Career Trends" },
    { to: "/dashboard/coaching", icon: <MessageSquare size={18} />, label: "AI Coach" },
    { to: "/dashboard/outreach", icon: <Mail size={18} />, label: "Email Outreach" },
    { to: "/dashboard/learning", icon: <BookOpen size={18} />, label: "Learning" },
    { to: "/dashboard/settings", icon: <Settings size={18} />, label: "Settings" },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-careerpulse-blue to-careerpulse-purple bg-clip-text text-transparent">CareerPulse</span>
          <span className="ml-1 text-xs px-1.5 py-0.5 rounded bg-careerpulse-purple/10 text-careerpulse-purple">AI</span>
        </Link>
      </div>
      
      <div className="flex-1 py-6 overflow-y-auto">
        <div className="px-3 space-y-1">
          {links.map((link, index) => (
            <SidebarLink key={index} to={link.to} icon={link.icon} label={link.label} />
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100">
          <LogOut size={18} />
          <span className="ml-2">Log out</span>
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
