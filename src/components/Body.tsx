import { boxContent, ExtraContent, paragraph, withOutAura } from "../data/helper"
import AuraBox from "./AuraBox"
import ExtraText from "./ExtraText"
import FAQs from "./FAQs"
import Logo from "./Logo"
import Paragraph from "./Paragraph"
import Review from "./Review"
import Sources from "./Sources"
import Suggestion from "./Suggestion"
import Table from "./Table"
import Text from "./Text"
import Yellowbox from "./Yellowbox"

function Body({ className }: { className?: string }) {
    return (
        <div className={` ${className}`}>
            <Yellowbox content={boxContent[0]} />
            <Text className="mb-2 sm:mb-8" data={paragraph[0]} />
            <Text data={paragraph[1]} />
            <p className="text-center sm:text-left text-lg leading-5 sm:leading-7 sm:text-xl sm:my-8">The basics aren’t enough anymore.<br /> That’s why you need…</p>
            <p className="text-3xl sm:text-4xl text-center font-bold mb-2 sm:py-4">8 Identity Theft Secrets <span className="block sm:inline">No One Is Telling You</span></p>

            <Paragraph />
            <Yellowbox content={boxContent[1]} />
            <ExtraText content={ExtraContent.content1} />
            <ExtraText content={ExtraContent.content2} />
            <Yellowbox content={boxContent[2]} />
            <ExtraText content={ExtraContent.content3} />
            <ExtraText content={ExtraContent.content4} />
            <ExtraText content={ExtraContent.content5} />
            <ExtraText content={ExtraContent.content6} />
            <ExtraText content={ExtraContent.content7} />
            <ExtraText content={ExtraContent.content8} />
            <ExtraText content={ExtraContent.content9} />
            <Table />
            <ExtraText content={withOutAura} />
            <Suggestion />
            <AuraBox />
            <Review />
            <Logo />
            <AuraBox />
            <FAQs />
            <AuraBox className="sm:mt-20" />
            <Sources />
        </div>
    )
}

export default Body