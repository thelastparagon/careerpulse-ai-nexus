
import { 
  FileSpreadsheet, 
  TrendingUp, 
  MessageSquareText, 
  MailPlus, 
  BarChart3, 
  PieChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="feature-card">
    <div className="h-12 w-12 rounded-lg bg-careerpulse-blue/10 text-careerpulse-blue flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureSection = () => {
  const features = [
    {
      icon: <FileSpreadsheet className="h-6 w-6" />,
      title: "Resume Optimization",
      description: "AI-powered resume analysis and optimization to match job descriptions and increase interview chances."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Job Trend Analysis",
      description: "Track industry trends, in-demand skills, and salary data to make informed career decisions."
    },
    {
      icon: <MessageSquareText className="h-6 w-6" />,
      title: "AI Career Coaching",
      description: "Get personalized advice, interview tips, and career guidance from our AI career assistant."
    },
    {
      icon: <MailPlus className="h-6 w-6" />,
      title: "Auto Email Outreach",
      description: "AI-generated personalized emails to recruiters that highlight your relevant skills and experience."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Application Tracking",
      description: "Track all your job applications, interviews, and follow-ups in one centralized dashboard."
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Skills Gap Analysis",
      description: "Identify missing skills and get recommendations for courses to become more competitive."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to accelerate your career</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CareerPulse AI combines cutting-edge AI with practical tools to help you navigate the job market with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/features" 
            className="text-careerpulse-blue font-medium hover:underline inline-flex items-center"
          >
            Explore all features
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
