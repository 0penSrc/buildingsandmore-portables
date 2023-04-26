const Footer = () => {
    return (
    <>
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
          <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <img src="/logo.svg" className="w-32" />  
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400">Discover our excellent choice of portable buildings today, whether you’re looking for steel buildings, gazebos, screen rooms, portable storage sheds and more!</p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
              <li>
                  <a href="/about" className="mr-4 hover:underline md:mr-6 ">About Us</a>
              </li>
              <li>
                  <a href="/faqs" className="mr-4 hover:underline md:mr-6">Questions</a>
              </li>
              <li>
                  <a href="/terms" className="mr-4 hover:underline md:mr-6 ">Terms and Conditions</a>
              </li>
              <li>
                  <a href="/delivery" className="mr-4 hover:underline md:mr-6">Delivery</a>
              </li>
              <li>
                  <a href="/privacy-policy" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
              </li>
              <li>
                  <a href="/contact" className="mr-4 hover:underline md:mr-6">Contact</a>
              </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">BAM</a>. All Rights Reserved.</span>
      </div>
    </footer>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script>
</>
    )
    
    }
    
    export default Footer