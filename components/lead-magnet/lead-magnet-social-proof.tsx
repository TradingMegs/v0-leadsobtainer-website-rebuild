import Image from "next/image"

export function LeadMagnetSocialProof() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">What Others Are Saying</h2>

          <div className="space-y-6">
            <div className="rounded-lg bg-gray-800/50 p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Testimonial Avatar"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white">Michael Johnson</h3>
                  <p className="text-sm text-gray-400">Marketing Director, Local Agency</p>
                </div>
              </div>
              <p className="text-gray-300">
                "This eBook saved me 10+ hours a week – absolute game-changer for my agency! The automation workflows
                alone paid for themselves in the first week."
              </p>
            </div>

            <div className="rounded-lg bg-gray-800/50 p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Testimonial Avatar"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white">Sarah Williams</h3>
                  <p className="text-sm text-gray-400">Owner, Boutique Retail Store</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Finally, a clear roadmap for AI marketing – no fluff, just results. I was able to implement the email
                sequence templates and saw a 32% increase in conversions within two weeks."
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-lg font-medium text-white">Trusted By</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="h-8 w-24 opacity-70">
                <Image
                  src="/placeholder.svg?height=32&width=96"
                  alt="Featured In Logo"
                  width={96}
                  height={32}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-8 w-24 opacity-70">
                <Image
                  src="/placeholder.svg?height=32&width=96"
                  alt="Featured In Logo"
                  width={96}
                  height={32}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-8 w-24 opacity-70">
                <Image
                  src="/placeholder.svg?height=32&width=96"
                  alt="Featured In Logo"
                  width={96}
                  height={32}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-8 w-24 opacity-70">
                <Image
                  src="/placeholder.svg?height=32&width=96"
                  alt="Featured In Logo"
                  width={96}
                  height={32}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
