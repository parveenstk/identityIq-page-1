import { AuraboxData } from "../data/helper"

function AuraBox({ className }: { className?: string }) {
    return (
        <section className={`flex flex-col sm:flex-row gap-5 text-center sm:text-left bg-[#ffefb1] w-full py-4 sm:p-10 rounded-md border-3 border-amber-300 shadow-xl mb-4 sm:mb-18 ${className}`}>
            <div className="flex justify-center sm:items-center">
                <img src="./images/aura.webp" alt="Aura-logo" width={300} className="w-46 sm:w-40" />
            </div>
            <div className="w-full">
                <h1 className="text-2xl leading-6 sm:leading-8 sm:text-3xl font-bold">Protect Yourself NOW – <br /> Before It’s Too Late</h1>
                {Array.isArray(AuraboxData) ? (AuraboxData.map((data, index) => (
                    <p key={index} className="leading-4 sm:leading-8 text-lg sm:text-2xl mb-1" dangerouslySetInnerHTML={{ __html: data }}></p>
                ))) : (
                    <p>Data isn't showing.</p>
                )}
                <button className="cursor-pointer rounded-md py-2 px-3 text-2xl bg-red-600 text-white font-bold mt-3 sm:mt-5">Get Started Today</button>
            </div>
        </section>
    )
}

export default AuraBox