export function Hero() {
  return (
    <div className="relative h-[50dvh]">
      <img
        src="/newlyweds.png"
        className="w-full h-full object-cover object-top"
        alt=""
      />
      <div className="font-libredisplay text-white absolute text-center left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] text-5xl w-3/4">
        <div className="text-3xl sm:text-5xl">
          More than a stylist - <span className="italic">a Bridalist</span>.
          <div className="text-xl block">
            Here to enhance your natural beauty and keep you calm, glowing and
            <span className="font-qwigley text-4xl"> effortlessly</span> you.
          </div>
        </div>
      </div>
    </div>
  )
}
