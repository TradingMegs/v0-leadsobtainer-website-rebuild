import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, MapPin, Briefcase, Users } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

// This would typically come from a database or API
const getJobById = (id: string) => {
  const jobs = {
    "1": {
      id: 1,
      title: "Senior AI Marketing Specialist",
      department: "Marketing",
      location: "Remote (US/Canada)",
      type: "Full-time",
      postedDate: "July 15, 2023",
      description: `
        <p>LeadsObtainer is seeking a Senior AI Marketing Specialist to join our growing team. In this role, you'll be responsible for developing and implementing AI-powered marketing strategies for our clients across various industries.</p>
        
        <h3>Responsibilities:</h3>
        <ul>
          <li>Design and execute AI-driven marketing campaigns that deliver measurable results</li>
          <li>Analyze marketing data to identify trends and opportunities for optimization</li>
          <li>Develop and refine customer segmentation models using machine learning techniques</li>
          <li>Create personalized content strategies based on AI-generated insights</li>
          <li>Collaborate with cross-functional teams to integrate AI solutions into marketing workflows</li>
          <li>Stay current with emerging AI marketing technologies and best practices</li>
          <li>Provide strategic guidance to clients on leveraging AI for marketing success</li>
          <li>Measure and report on the performance of AI marketing initiatives</li>
        </ul>
        
        <h3>Requirements:</h3>
        <ul>
          <li>5+ years of experience in digital marketing, with at least 2 years focused on AI applications</li>
          <li>Proven track record of implementing successful AI marketing strategies</li>
          <li>Strong understanding of machine learning concepts and their marketing applications</li>
          <li>Experience with marketing automation platforms and CRM systems</li>
          <li>Excellent analytical skills with the ability to translate data into actionable insights</li>
          <li>Outstanding communication and presentation skills</li>
          <li>Bachelor's degree in Marketing, Computer Science, or related field (Master's preferred)</li>
        </ul>
        
        <h3>Preferred Qualifications:</h3>
        <ul>
          <li>Experience with natural language processing (NLP) and generative AI tools</li>
          <li>Knowledge of predictive analytics and customer behavior modeling</li>
          <li>Familiarity with Python, R, or similar data analysis tools</li>
          <li>Certifications in relevant marketing or AI disciplines</li>
        </ul>
        
        <h3>Benefits:</h3>
        <ul>
          <li>Competitive compensation package</li>
          <li>Comprehensive health, dental, and vision insurance</li>
          <li>401(k) matching program</li>
          <li>Flexible remote work policy</li>
          <li>Professional development budget</li>
          <li>Paid time off and company holidays</li>
          <li>Employee stock options</li>
        </ul>
      `,
    },
    "2": {
      id: 2,
      title: "Lead Generation Specialist",
      department: "Sales",
      location: "Remote (Global)",
      type: "Full-time",
      postedDate: "July 20, 2023",
      description: `
        <p>LeadsObtainer is looking for a talented Lead Generation Specialist to join our sales team. In this role, you'll be responsible for identifying and qualifying potential clients for our AI-powered growth solutions.</p>
        
        <h3>Responsibilities:</h3>
        <ul>
          <li>Develop and execute lead generation strategies across multiple channels</li>
          <li>Research and identify target companies and decision-makers</li>
          <li>Create and optimize outreach campaigns using our AI tools</li>
          <li>Qualify leads based on established criteria and business requirements</li>
          <li>Manage the lead nurturing process to convert prospects into sales opportunities</li>
          <li>Collaborate with sales and marketing teams to align lead generation efforts</li>
          <li>Track, measure, and report on lead generation performance metrics</li>
          <li>Continuously test and refine approaches to improve conversion rates</li>
        </ul>
        
        <h3>Requirements:</h3>
        <ul>
          <li>3+ years of experience in B2B lead generation or similar sales development role</li>
          <li>Proven track record of meeting or exceeding lead generation targets</li>
          <li>Experience with CRM systems and sales automation tools</li>
          <li>Strong understanding of B2B sales processes and buyer journeys</li>
          <li>Excellent communication and interpersonal skills</li>
          <li>Ability to work independently and manage multiple priorities</li>
          <li>Bachelor's degree in Business, Marketing, or related field</li>
        </ul>
        
        <h3>Preferred Qualifications:</h3>
        <ul>
          <li>Experience in SaaS or marketing services industries</li>
          <li>Familiarity with AI and marketing automation technologies</li>
          <li>Knowledge of social selling techniques and tools</li>
          <li>Experience with data analysis and performance optimization</li>
        </ul>
        
        <h3>Benefits:</h3>
        <ul>
          <li>Attractive compensation structure with performance incentives</li>
          <li>Comprehensive health, dental, and vision insurance</li>
          <li>401(k) matching program</li>
          <li>Flexible remote work policy</li>
          <li>Professional development opportunities</li>
          <li>Paid time off and company holidays</li>
          <li>Employee referral program</li>
        </ul>
      `,
    },
    "3": {
      id: 3,
      title: "AI Solutions Architect",
      department: "Technology",
      location: "Remote (US/Canada)",
      type: "Full-time",
      postedDate: "July 25, 2023",
      description: `
        <p>LeadsObtainer is seeking an experienced AI Solutions Architect to design and implement our next generation of AI-powered marketing and sales automation solutions. In this role, you'll be responsible for architecting scalable AI systems that drive business growth for our clients.</p>
        
        <h3>Responsibilities:</h3>
        <ul>
          <li>Design and develop AI-powered solutions for marketing, sales, and customer acquisition</li>
          <li>Create technical specifications and architecture documents for AI implementations</li>
          <li>Collaborate with data scientists and engineers to build and deploy AI models</li>
          <li>Evaluate and integrate third-party AI technologies and services</li>
          <li>Ensure AI solutions meet performance, scalability, and security requirements</li>
          <li>Provide technical leadership and mentorship to development teams</li>
          <li>Work with product management to define AI product roadmaps</li>
          <li>Stay current with emerging AI technologies and industry trends</li>
        </ul>
        
        <h3>Requirements:</h3>
        <ul>
          <li>7+ years of experience in software architecture, with at least 3 years focused on AI solutions</li>
          <li>Strong understanding of machine learning, natural language processing, and predictive analytics</li>
          <li>Experience designing and implementing AI systems at scale</li>
          <li>Proficiency in Python, TensorFlow, PyTorch, or similar AI frameworks</li>
          <li>Knowledge of cloud platforms (AWS, Azure, GCP) and their AI/ML services</li>
          <li>Excellent problem-solving and communication skills</li>
          <li>Bachelor's or Master's degree in Computer Science, AI, or related field</li>
        </ul>
        
        <h3>Preferred Qualifications:</h3>
        <ul>
          <li>Experience with generative AI models and applications</li>
          <li>Knowledge of marketing automation and CRM systems</li>
          <li>Background in data engineering and big data technologies</li>
          <li>Certifications in cloud platforms or AI specializations</li>
        </ul>
        
        <h3>Benefits:</h3>
        <ul>
          <li>Competitive compensation with performance-based incentives</li>
          <li>Comprehensive health, dental, and vision insurance</li>
          <li>401(k) matching program</li>
          <li>Flexible remote work policy</li>
          <li>Professional development and certification budget</li>
          <li>Paid time off and company holidays</li>
          <li>Employee stock options</li>
          <li>Home office stipend</li>
        </ul>
      `,
    },
  }

  return jobs[id as keyof typeof jobs] || null
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const job = getJobById(params.id)

  if (!job) {
    return {
      title: "Job Not Found | LeadsObtainer Careers",
      description: "The job posting you're looking for doesn't exist or has been filled.",
    }
  }

  return {
    title: `${job.title} | LeadsObtainer Careers`,
    description: `Join our team as a ${job.title}. ${job.type} position in ${job.location}. Apply now!`,
    openGraph: {
      title: `${job.title} | LeadsObtainer Careers`,
      description: `Join our team as a ${job.title}. ${job.type} position in ${job.location}. Apply now!`,
      url: `https://leadsobtainer.com/careers/job/${job.id}`,
      siteName: "LeadsObtainer",
      locale: "en_US",
      type: "website",
    },
  }
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = getJobById(params.id)

  if (!job) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job not found</h1>
          <p className="text-gray-600 mb-6">The job posting you're looking for doesn't exist or has been filled.</p>
          <Link
            href="/careers"
            className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
          >
            View All Job Openings
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  // JSON-LD Schema for JobPosting
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description.replace(/<[^>]*>/g, " ").trim(),
    datePosted: job.postedDate,
    employmentType: job.type,
    hiringOrganization: {
      "@type": "Organization",
      name: "LeadsObtainer",
      sameAs: "https://leadsobtainer.com",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
      },
    },
  }

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />

      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link
              href="/careers"
              className="inline-flex items-center text-primary hover:text-primary/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Jobs
            </Link>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-4">
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2 text-primary" />
                  <span>{job.department}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  <span>Posted: {job.postedDate}</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: job.description }} />

              <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Our Hiring Process
                </h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-medium text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Application Review</h4>
                      <p className="text-gray-600 text-sm">Our team reviews your application and resume (1-2 weeks)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-medium text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Initial Screening</h4>
                      <p className="text-gray-600 text-sm">
                        30-minute call with a recruiter to discuss your experience
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-medium text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Technical Assessment</h4>
                      <p className="text-gray-600 text-sm">Role-specific assessment to evaluate your skills</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-medium text-primary">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Team Interviews</h4>
                      <p className="text-gray-600 text-sm">Virtual interviews with team members and leadership</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-medium text-primary">5</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Offer & Onboarding</h4>
                      <p className="text-gray-600 text-sm">Final offer and welcome to the LeadsObtainer team!</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Apply for this Position
                </Button>
                <Button size="lg" variant="outline">
                  Save Job
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
