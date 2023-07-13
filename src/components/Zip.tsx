import React, { useState } from 'react';

function Zip(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  function handleButtonClick(): void {
    const wordsToCheck: string[] = ['32008', '32024', '32025', '32038', '32055', '32056', '32059', '32060', '32062', '32063', '32064', '32065', '32066', '32071', '32072', '32073', '32079', '32083', '32087', '32091', '32094', '32096', '32113', '32134', '32140', '32145', '32147', '32160', '32601', '32602', '32603', '32604', '32605', '32606', '32607', '32608', '32609', '32610', '32611', '32612', '32613', '32614', '32615', '32616', '32618', '32621', '32622', '32625', '32626', '32631', '32633', '32634', '32635', '32639', '32640', '32641', '32643', '32653', '32654', '32655', '32656', '32658', '32662', '32663', '32664', '32666', '32667', '32669', '32680', '32681', '32686', '32692', '32693', '32694', '32696', '32009', '32026', '32040', '32044', '32053', '32054', '32058', '32067', '32068', '32234', '32259', '32346', '32617', '32619', '32628', '32427', '32438', '32448', '32460', '32463', '31513', '31516', '31518', '31519', '31533', '31542', '31543', '31545', '31548', '31555', '31563', '31565', '31566', '31567', '31568', '31569', '31601', '31602', '31605', '31606', '31620', '31622', '31623', '31624', '31625', '31626', '31627', '31629', '31630', '31631', '31632', '31634', '31635', '31636', '31637', '31638', '31639', '31641', '31642', '31643', '31645', '31647', '31648', '31649', '31650', '31698', '31701', '31702', '31703', '31704', '31705', '31706', '31707', '31708', '31709', '31710', '31711', '31712', '31713', '31714', '31715', '31716', '31717', '31718', '31719', '31720', '31721', '31722', '31727', '31730', '31733', '31735', '31738', '31743', '31744', '31747', '31749', '31750', '31756', '31757', '31763', '31764', '31765', '31768', '31771', '31772', '31773', '31774', '31775', '31776', '31778', '31779', '31780', '31781', '31782', '31783', '31784', '31787', '31789', '31790', '31791', '31792', '31793', '31794', '31795', '31796', '31798', '31799'];
    const inputWords: string[] = inputValue.split(' ');
  
    for (let i = 0; i < wordsToCheck.length; i++) {
      if (inputWords.includes(wordsToCheck[i])) {
        setMessage('Excellent! You are within range of our delivery!');
        return;
      }
    }
  
    setMessage('Sorry, we do not deliver to this area yet, please call us at 386-755-6499.');
  }
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.target.value);
  }

  return (

<>


<section className="grad pt-5">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0">
      <div className="p-2 sm:p-2 md:grid md:grid-cols-3 md:gap-4">
        <h1 className="text-xl font-bold text-white md:text-2xl">
          Check your Zip
        </h1>
        
        <div className="flex flex-col mb-3">
          <div className="w-full">
            <input type="text" id="inputField" value={inputValue} onChange={handleInputChange} className="p-1 w-full border-2 border-gray-200 rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col mb-3">
        <button onClick={handleButtonClick} className="md:ml-4 w-full md:w-auto text-white bg-primary-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Check My Zip
          </button>
        </div>
      </div>
      <p className="text-sm text-white text-center ">Buildings and More will deliver 60 miles from any of our locations.</p>
      <p className="text-sm font-light text-white dark:text-gray-400 text-center pb-4">{message}</p>
    </div>
  </div>
</section>
</>
  );
}

export default Zip;