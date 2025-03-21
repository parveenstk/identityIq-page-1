import { footerData } from "../data/helper"

function Footer() {
    return (
        <section className="bg-zinc-300 text-center text-1rem">
            <div className=" w-full sm:w-9/12 mx-auto text-[0.60rem] sm:text-[1rem] p-2">
                <p className="sm:py-8">{data.text1}</p>
                <p>{data.text2}</p>
                <p className="sm:py-4"><span className="font-semibold">{data.text3.content.bold}</span> {data.text3.content.text}</p>
                <p><span className="font-semibold">{data.text4.content.bold}</span> {data.text4.content.text}</p>
                <div className="py-4 sm:py-10 flex justify-around">
                    <a href="#">{links.text1}</a>
                    <a href="#">{links.text2}</a>
                    <a href="#">{links.text3}</a>
                </div>
            </div>
        </section >
    )
}

export default Footer

const data = footerData.content
const links = data.links