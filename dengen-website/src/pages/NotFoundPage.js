import React from "react";
import Layout from "./LayoutPage"; // Import the Layout component
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (

   <Layout> 

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <img
        src="https://i.etsystatic.com/31262582/r/il/c5c77c/6154173746/il_794xN.6154173746_1fps.jpg"
        alt="404 - Not Found"
        className="w-3/4 md:w-1/2"
      />
      <h1 className="text-4xl font-bold mt-6 text-blue-600">Oops! Page not found</h1>
      <p className="text-lg mt-4 text-gray-700">
        We can't seem to find the page you're looking for.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Go back to Home
      </Link>
    </div>

   </Layout>

  );
}
export default NotFoundPage;



