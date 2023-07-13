import Link from "next/link"

const LeaseForm = () => {
    return (

<>
  <section className="px-4 mx-auto max-w-6xl lg:py-4">

  <form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="9303649c-c94a-467e-8e7b-ac76bf070fa0"/>
  <input type="hidden" name="subject" value="New Financing/Leasing Submission"></input>
  <input type="hidden" name="from_name" value="Buildings And More Portables"></input>
  <input type="checkbox" name="botcheck" id="" className="hidden"></input>
  <input type="hidden" name="redirect" value="https://portables.buildingsandmore.com/thank-you"/>

  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        First Name
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" name="firstname" id="grid-first-name" type="text" placeholder="John"/>
    </div>
    <div className="md:w-1/3 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        Middle Initial
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" name="middle" id="grid-last-name" type="text" placeholder="R"/>
    </div>
    <div className="md:w-1/3 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" name="lastname" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/3 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        Phone Number
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" name="phone" id="grid-phone-number" type="text" placeholder="386-123-4567"/>
      <p className="text-grey-dark text-xs italic"></p>
    </div>
    <div className="md:w-1/3 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        Email
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" name="email" id="grid-email" type="text" placeholder="JDoe@Gmail.com"/>
      <p className="text-grey-dark text-xs italic"></p>
    </div>
    <div className="md:w-1/3 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        Last 4 of Social
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" name="social" id="grid-social" type="text" placeholder="1234"/>
      <p className="text-grey-dark text-xs italic"></p>
    </div>
  </div>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-full px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        Address
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" name="address" id="grid-password" type="text" placeholder="123 Main Street"/>
      <p className="text-grey-dark text-xs italic"></p>
    </div>
  </div>
  <div className="-mx-3 md:flex mb-2">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        City
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" name="city" id="grid-city" type="text" placeholder="Lake City"/>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        State
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" name="state" id="grid-state">
          <option>Florida</option>
          <option>Georgia</option>
        </select>
      </div>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        Zip
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" name="zip" id="grid-zip" type="text" placeholder="32066"/>
    </div>
  </div>
  <div className="flex items-start py-8">
  <input type="checkbox" id="authorization" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" name="authorized" required/>
  <label className="ml-2 block text-sm leading-5 text-gray-700">
    By continuing, I grant authorization for you to obtain a consumer credit report on me and confirm that I have read the Important Information Notice and accepted the Consent to Use Electronic Signatures which can be read <Link href="/authorization-notices" className="text-blue-500">here</Link>.
  </label>
</div>


                <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" type="submit"> SUBMIT </button>
</div>
</form>





</section>

</>
    )
}
    
export default LeaseForm