"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, MapPin, Clock, ChevronRight, Search, Filter } from "lucide-react"
import Link from "next/link"

// Sample job data - in a real app, this would come from an API or CMS
const jobs = [
  {
    id: "senior-developer",
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the development of complex web applications using modern JavaScript frameworks.",
    tags: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    id: "marketing-specialist",
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time",
    experience: "3+ years",
    description: "Drive growth through innovative digital marketing strategies and campaigns.",
    tags: ["SEO", "PPC", "Content Marketing", "Analytics"],
  },
  {
    id: "ux-designer",
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote (Worldwide)",
    type: "Full-time",
    experience: "4+ years",
    description: "Create beautiful, intuitive interfaces that deliver exceptional user experiences.",
    tags: ["Figma", "User Research", "Prototyping", "Design Systems"],
  },
  {
    id: "project-manager",
    title: "Technical Project Manager",
    department: "Operations",
    location: "London, UK",
    type: "Full-time",
    experience: "4+ years",
    description: "Oversee the successful delivery of complex technical projects for our clients.",
    tags: ["Agile", "Scrum", "Client Management", "Technical Background"],
  },
  {
    id: "sales-representative",
    title: "Sales Development Representative",
    department: "Sales",
    location: "Chicago, IL",
    type: "Full-time",
    experience: "1-3 years",
    description: "Identify and develop new business opportunities with potential clients.",
    tags: ["B2B Sales", "Lead Generation", "CRM", "Relationship Building"],
  },
  {
    id: "content-writer",
    title: "Content Writer",
    department: "Marketing",
    location: "Remote (US)",
    type: "Contract",
    experience: "2+ years",
    description: "Create compelling content that drives engagement and conversions.",
    tags: ["SEO Writing", "Blogging", "Copywriting", "Content Strategy"],
  },
]

export function OpenPositions() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const departments = ["All", "Engineering", "Marketing", "Design", "Operations", "Sales"]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment

    return matchesSearch && matchesDepartment
  })

  return (
    <section id="open-positions" className="bg-white py-24 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Open Positions
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Join our team of passionate professionals and help shape the future of digital marketing.
          </p>
        </motion.div>

        <div className="mt-12 rounded-xl bg-slate-50 p-6 dark:bg-slate-800/50">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-grow">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full rounded-lg border border-slate-300 bg-white p-4 pl-10 text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search positions, skills, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative min-w-[200px]">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Filter className="h-5 w-5 text-slate-400" />
              </div>
              <select
                className="block w-full rounded-lg border border-slate-300 bg-white p-4 pl-10 text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept === "All" ? "All Departments" : dept}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.title}</h3>
                      <p className="mt-1 text-slate-600 dark:text-slate-300">{job.department}</p>
                    </div>
                    <Link
                      href={`/careers/job/${job.id}`}
                      className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>

                  <p className="mt-4 text-slate-600 dark:text-slate-300">{job.description}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <MapPin className="mr-1 h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <Clock className="mr-1 h-4 w-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <Briefcase className="mr-1 h-4 w-4" />
                      {job.experience}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="rounded-lg bg-slate-50 p-8 text-center dark:bg-slate-800">
              <p className="text-lg text-slate-600 dark:text-slate-300">No positions found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedDepartment("All")
                }}
                className="mt-4 inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        <motion.div
          className="mt-16 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold">Don't See a Perfect Fit?</h3>
          <p className="mt-4 text-lg">
            We're always looking for talented individuals to join our team. Send us your resume and let us know how you
            can contribute.
          </p>
          <Link
            href="#application-form"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-lg transition-all hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
          >
            Submit General Application
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
