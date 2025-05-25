"use client"
import { StickyScroll } from "./sticky-scroll-reveal"

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share feedback, and make decisions quickly.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real-time Collaboration",
    description:
      "See changes as they happen. With our real-time collaboration features, you can see edits, comments, and feedback instantly.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] flex items-center justify-center text-white">
        Real-time Collaboration
      </div>
    ),
  },
  {
    title: "Version Control",
    description:
      "Keep track of changes and go back to previous versions at any time. Version control makes it easy to see who made what changes and when.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version Control
      </div>
    ),
  },
]

export function StickyScrollDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  )
}
