
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const testimonials = [
  {
    id: "recent-grad",
    title: "Recent Graduate",
    name: "Alex Chen",
    position: "Software Engineer at Google",
    quote: "As a recent CS graduate with no industry experience, I was getting zero callbacks. CareerPulse AI helped me optimize my resume and taught me how to highlight my projects effectively. Within 3 weeks, I landed 5 interviews and got my dream job offer at Google!",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: "career-changer",
    title: "Career Changer",
    name: "Priya Sharma",
    position: "UX Designer at Adobe",
    quote: "After 6 years in marketing, I wanted to switch to UX design. CareerPulse helped me identify transferable skills and create a portfolio strategy. The AI coach guided me through the transition, and I've now been at Adobe for 8 months. Best career decision ever!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: "executive",
    title: "Executive",
    name: "Marcus Johnson",
    position: "CTO at FinTech Startup",
    quote: "The job market for executive roles is extremely competitive. CareerPulse AI's trend analysis showed me which emerging sectors needed technical leadership. The automated outreach generated compelling emails that got me connections with founders. Worth every penny!",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by job seekers at every career stage</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how CareerPulse AI has helped professionals from different backgrounds achieve their career goals.
          </p>
        </div>

        <Tabs defaultValue="recent-grad" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            {testimonials.map((testimonial) => (
              <TabsTrigger 
                key={testimonial.id} 
                value={testimonial.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full py-2"
              >
                {testimonial.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {testimonials.map((testimonial) => (
            <TabsContent key={testimonial.id} value={testimonial.id}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover border-4 border-white shadow-md" 
                    />
                  </div>
                  <div className="flex-1">
                    <svg className="h-8 w-8 text-careerpulse-blue/30 mb-4" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-lg text-gray-700 italic mb-6">{testimonial.quote}</p>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-careerpulse-blue">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TestimonialSection;
