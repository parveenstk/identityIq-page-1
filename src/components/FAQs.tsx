import { useState } from "react"
import { faqData } from "../data/helper";


function FAQs() {
    const [active, setActive] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        console.log(index, 'clicked')
        setActive(index === active ? null : index);
    }

    return (
        <section>
            <div className="flex flex-col sm:gap-20 justify-center items-center mb-5 sm:mb-16">
                <img className="w-38 h-38" src="./images/guaranteed.png" alt="gauranteed-logo" />
                <h1 className="font-bold sm:font-semibold text-[26px] sm:text-5xl">Frequently Asked Questions</h1>
            </div>

            {faqData.map((data, index) => (
                <div key={index} className="mb-4">
                    <button onClick={() => handleToggle(index)} type="button" className={`flex items-center justify-between w-full p-3 sm:p-5 font-medium text-2xl border-2 border-gray-200 rounded-t-md focus:ring-4 focus:ring-blue-200 cursor-pointer ${active !== index ? 'bg-[#efefef]' : 'bg-[#bd9e26] text-white'}`}>
                        <p className="text-left text-xl sm:text-2xl">{data.question}</p>
                        <svg className={`w-4 h-4 transition-all duration-500 shrink-0 ${active === index && 'rotate-180'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6 5 0 0 6" />
                        </svg>
                    </button>
                    {/* Content */}
                    <div id="Answer" className={`bg-gray-200 opacity-0 transition-all duration-500 ${active === index && 'opacity-100'}`}>
                        {active === index && (
                            <div className={`text-xl mb-2 border-t-0 p-5`}>
                                {Array.isArray(data.answer) && data.answer.length > 0 ? (
                                    data.answer.map((text, index) => (
                                        <p key={index} dangerouslySetInnerHTML={{ __html: text }} className="sm:mb-4 text-lg sm:text-2xl"></p>
                                    ))
                                ) : (<p key={index} dangerouslySetInnerHTML={{ __html: data.answer }} className="sm:mb-2 text-center sm:text-left leading-6 sm:leading-8 text-lg sm:text-2xl"></p>)}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default FAQs