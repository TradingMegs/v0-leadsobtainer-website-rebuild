import Image from "next/image"

export function OurStory() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                LeadsObtainer was founded in 2019 with a simple mission: to help local businesses thrive in an
                increasingly digital world. Our founder, after working with hundreds of small businesses, noticed a
                common problem - they were spending too much time and money on marketing with little to show for it.
              </p>
              <p>
                What started as a small consultancy has grown into a comprehensive growth solution for local businesses
                across the country. We've helped over 500 businesses increase their revenue, streamline their
                operations, and build sustainable growth systems.
              </p>
              <p>
                Our team of experts combines deep industry knowledge with cutting-edge AI technology to deliver
                results-driven solutions that actually work for local businesses. We're not just another marketing
                agency - we're your growth partner.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-secondary/30 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="LeadsObtainer team"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
