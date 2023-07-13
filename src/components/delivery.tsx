import Link from "next/link"
const Delivery = () => {
    return (
<>
<section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Smooth and Simple delivery process</h2>
            <p className="mb-4">When you order a portable building from us, you needn’t worry about it being a hassle. In fact, our installation process is very simple: Once you have chosen the best building for your requirements, all you need to do is contact our team at (386) 755-6449. You can place your order quickly and easily. Our customer service representatives will contact you to arrange a suitable delivery time and date.</p>
            <p className="mb-4">It’s important to ensure that you obtain any required local building permits before the delivery date. You should also ensure that all debris is cleared from the building’s intended installation area. The ground must also be level and ready for the structure’s arrival.</p>
            <p className="mb-4">On the day of delivery, the installation team will bring along all of the essential tools to install the building. They will do all the hard work for you, and you’ll soon be enjoying your beautiful new portable building.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="/delivery-2.jpg" alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/delivery-1.jpg" alt="office content 2"/>
        </div>
    </div>
</section>
<section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
        <div className="max-w-screen-md">
        <h4 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Get Ready for your next Building</h4>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">The following checklist items should be taken care of in advance of your shed arriving for installation.</p>
            <ul className="pb-8">
                <li>1. Make sure to check for local rules and laws and regulations</li>
                <li>2. Have your building site cleaned and prepared</li>
                <li>3. Clear the path to get to the building site</li>
                <li>4. Keep your phone ready to receive a call from the delivery vehicle</li>
            </ul>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Contact Us 
                </Link>
                <Link  href="/all-buildings" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                      View Buildings
                </Link>  
            </div>
        </div>
    </div>
</section>



















</>
    )
}
    
export default Delivery