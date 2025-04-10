
import { ArrowUpRight, Users, Briefcase, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      title: "Resume Success Rate",
      value: "76%",
      description: "Higher interview callback rate",
      icon: <ArrowUpRight className="h-5 w-5 text-careerpulse-green" />,
      trend: "+12% this quarter"
    },
    {
      title: "Users Placed",
      value: "5,000+",
      description: "Job seekers placed successfully",
      icon: <Users className="h-5 w-5 text-careerpulse-blue" />,
      trend: "Growing daily"
    },
    {
      title: "Companies Hiring",
      value: "3,200+",
      description: "Companies across industries",
      icon: <Briefcase className="h-5 w-5 text-careerpulse-purple" />,
      trend: "Including Fortune 500"
    },
    {
      title: "Time Saved",
      value: "65%",
      description: "Reduction in job search time",
      icon: <Award className="h-5 w-5 text-careerpulse-blue" />,
      trend: "Industry leading"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Results that speak for themselves</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CareerPulse AI delivers measurable improvements to your job search success and career growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <div className="p-2 rounded-full bg-gray-50">{stat.icon}</div>
              </div>
              <h3 className="mt-6 text-4xl font-bold gradient-text">{stat.value}</h3>
              <p className="mt-2 text-sm text-gray-500">{stat.description}</p>
              <div className="mt-4 pt-3 border-t border-gray-100 text-xs font-medium text-careerpulse-green">
                {stat.trend}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
