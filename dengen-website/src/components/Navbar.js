import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      {/* Rigshospitalet Logo Above Navbar - Left Aligned */}
      <div className="flex justify-start py-8 bg-white shadow-md">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Rigshospitalet_logo.svg/800px-Rigshospitalet_logo.svg.png?20171103201311"
          className="h-12 ml-4"
          /*src="/image.png"*/
          /*src="dengen_dall-e.webp"*/
          /*src="dengen_dall-e_tentative.png"   */       
          alt="Rigshospitalet"
          /*className="h-[140px] w-auto ml-4 rounded-full"*/ 
          
        />
      </div>

      {/* Navbar */}
      <nav className="bg-[#003865] shadow-md py-2 px-4">
        <div className="flex justify-between items-center">
          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-white hover:underline">
                Home
              </a>
            </li>

            {/* About Dropdown Menu */}
            <li className="relative group">
              <button className="text-white hover:underline">
                About
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 hidden bg-[#003865] shadow-lg w-56 rounded-md group-hover:block">
                <ul
                  className="text-white py-2"
                  onMouseEnter={(e) => e.stopPropagation()} // Ensures the dropdown stays open
                  onMouseLeave={(e) => e.stopPropagation()} // Prevents premature closure
                >
                  <li><Link to="/about"  className="block px-4 py-2 hover:bg-blue-600" >DenGen</Link></li>
                  <li><Link to="/pipelines" className="block px-4 py-2 hover:bg-blue-600" >Pipelines</Link></li>
                  <li><Link to="/data-use-terms" className="block px-4 py-2 hover:bg-blue-600" >Data Use Terms</Link></li>
                  <li><Link to="/data-access"  className="block px-4 py-2 hover:bg-blue-600" >Data Access</Link></li>
                  <li><Link to="/funding"  className="block px-4 py-2 hover:bg-blue-600" >Funders</Link></li>
                  <li><Link to="/publications" className="block px-4 py-2 hover:bg-blue-600" >Publications</Link></li>
                  <li><Link to="/citation"className="block px-4 py-2 hover:bg-blue-600" >Citation</Link></li>
                  <li><Link to="/contact"  className="block px-4 py-2 hover:bg-blue-600" >Contact</Link></li>
                  <li><Link to="/team" className="block px-4 py-2 hover:bg-blue-600" >Team</Link></li>
                </ul>
              </div>
            </li>

            {/* About Dropdown Menu */}
            <li className="relative group">
              <button className="text-white hover:underline">
                Tooling
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 hidden bg-[#003865] shadow-lg w-56 rounded-md group-hover:block">
                <ul
                  className="text-white py-2"
                  onMouseEnter={(e) => e.stopPropagation()} // Ensures the dropdown stays open
                  onMouseLeave={(e) => e.stopPropagation()} // Prevents premature closure
                >
                  <li><Link to="http://10.62.55.108:8008/" target="_blank" className="block px-4 py-2 hover:bg-blue-600" >Genome Aggregation Browser</Link></li>
                  <li><Link to="http://10.62.55.108:3001/" target="_blank" className="block px-4 py-2 hover:bg-blue-600" >Allele Frequency Browser</Link></li>
                  <li><Link to="/beacon" target="_blank" className="block px-4 py-2 hover:bg-blue-600" >Danish Beacon</Link></li>
                  <li><Link to="/landing" target="_blank"  className="block px-4 py-2 hover:bg-blue-600" >Data Quality Portal</Link></li>                
                </ul>
              </div>
            </li>           
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

