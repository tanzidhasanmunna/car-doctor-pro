export default function Footer() {
  return (
    <div className="bg-black text-white ">
      <footer className="bg-black text-white py-10 max-w-7xl mx-auto">
        <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              {/* <img alt="Car Doctor logo" className="mr-2" src={logo} /> */}
            </div>
            <p className="text-gray-400 mb-4">
              Edwin Diaz is a software and web technologies engineer, a life
              coach trainer who is also a serial .
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a className="text-gray-400 hover:text-white" href="#">
                <i className="fab fa-google"></i>
              </a>
              <a className="text-gray-400 hover:text-white" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-gray-400 hover:text-white" href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-gray-400 hover:text-white" href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-start space-y-6 md:space-y-0 md:space-x-12">
            <div className="text-center md:text-left">
              <h3 className="font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a className="text-gray-400 hover:text-white" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="#">
                    Service
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a className="text-gray-400 hover:text-white" href="#">
                    Why Car Doctor
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a className="text-gray-400 hover:text-white" href="#">
                    Support Center
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="#">
                    Feedback
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="#">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
