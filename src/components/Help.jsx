

const Help = () => {
  return (
    <div className="bg-gradient-to-br from-slate-100 via-blue-00 to-indigo-400   min-h-screen mt-12 flex flex-col items-center px-6 py-13">
    
      <div className="text-center text-black">
        <h1 className="text-4xl font-bold mb-2">Help & Support</h1>
        <p className="text-lg text-black ">
          We're here to help you make smarter investment decisions.
        </p>
      </div>
      <div className="bg-white mt-10 w-full max-w-6xl shadow-2xl rounded-2xl p-8 grid md:grid-cols-2 gap-10">
        
        <div className="flex justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Eerr6x30W4iZ_mOZvqC0IE6hHYbMhWRL7A&s"
            alt="Customer Support"
            className="w-72 h-72 object-contain"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Frequently Asked Questions
          </h2>
          <ul className="text-gray-700 space-y-4">
            <li>
              <span className="font-medium">💼 How does the AI Returns Optimizer work?</span>
              <p className="text-sm mt-1 ml-4">
                Our system analyzes historical data and your risk profile to recommend a 
                diversified investment portfolio tailored to your goals.
              </p>
            </li>

            <li>
              <span className="font-medium">📈 What kind of inputs do I need to provide?</span>
              <p className="text-sm mt-1 ml-4">
                You just need to enter your investment amount, tenure, and risk level. 
                The system will automatically generate a report and expected returns.
              </p>
            </li>

            <li>
              <span className="font-medium">🤖 Can I use the AI chatbot for investment queries?</span>
              <p className="text-sm mt-1 ml-4">
                Yes! Click the chat icon on the bottom-right corner to get live assistance 
                from our AI advisor about allocations, SIP/SWP, or rebalancing strategies.
              </p>
            </li>

            <li>
              <span className="font-medium">🔄 What is portfolio rebalancing?</span>
              <p className="text-sm mt-1 ml-4">
                Rebalancing helps you maintain your ideal asset allocation by adjusting your 
                portfolio periodically to manage risk and maximize returns.
              </p>
            </li>

            <li>
              <span className="font-medium">📞 How can I reach support?</span>
              <p className="text-sm mt-1 ml-4">
                You can contact us via <b>support@aireturns.ai</b> or use the live chatbot on 
                any page for instant answers.
              </p>
            </li>
          </ul>
        </div>
      </div>

      
      <p className="text-sm text-blue-200 mt-10">
        © {new Date().getFullYear()} AI Returns Optimizer — Empowering Smarter Investments.
      </p>
    </div>
  );
};

export default Help;


