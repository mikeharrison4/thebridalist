export function Contact() {
  return (
    <div id="contact" className="px-6 sm:px-28 md:px-48 py-16">
      <h2 className="text-3xl sm:text-4xl uppercase mb-8 tracking-wider text-center">
        How to Contact Me
      </h2>
      <div className="max-w-2xl mx-auto text-center tracking-wider leading-relaxed">
        <p className="mb-6">
          I'd love to hear from you! Whether you're planning your special day or have questions about my services, please don't hesitate to get in touch.
        </p>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-2 uppercase">Email</p>
            <a
              href="mailto:hello@thebridalist.com"
              className="text-lg hover:underline"
            >
              hello@thebridalist.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
