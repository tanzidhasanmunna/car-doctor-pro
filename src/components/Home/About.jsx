

export default function About() {
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 p-4 relative">
      <img
        alt="A smiling mechanic in a blue uniform standing in a garage"
        className="rounded-lg shadow-lg"
        height="300"
        src="https://storage.googleapis.com/a1aa/image/negAepIjaEsLcUnBKbpsGVuRew8PwKU8KBb20qyPdLSCkfdPB.jpg"
        width="400"
      />
      <img
        alt="Various car parts and a container of motor oil"
        className="border-8 rounded-lg shadow-lg absolute top-[80%] left-[78%] md:left-[60%] transform -translate-x-1/2 -translate-y-1/2"
        height="150"
        src="https://storage.googleapis.com/a1aa/image/1zGofJ340sy4cyUUgYUkGknqRht4mIacuMNQLxcOXf3AyfunA.jpg"
        width="200"
      />
    </div>
    <div className="md:w-1/2 p-4">
      <h2 className="text-red-500 text-xl font-bold mb-2">About Us</h2>
      <h1 className="text-4xl font-bold mb-4">
        We are qualified &amp; of experience in this field
      </h1>
      <p className="text-gray-600 mb-4">
        There Are Many Variations Of Passages Of Lorem Ipsum Available, But
        The Majority Have Suffered Alteration In Some Form, By Injected
        Humour, Or Randomised Words Which Don&apos;t Look Even Slightly Believable.
      </p>
      <p className="text-gray-600 mb-4">
        The Majority Have Suffered Alteration In Some Form, By Injected
        Humour, Or Randomised Words Which Don&apos;t Look Even Slightly
        Believable.
      </p>
      <button className=" bg-primary text-white px-4 py-2 rounded" >
        Get More Info
      </button>
    </div>
  </div>
  )
}
