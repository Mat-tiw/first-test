import Footer from "../components/Footer"
import Marquee from "react-fast-marquee"
import Testimonial from "../components/Testimonial"
import { FasterMarquee } from "../components/FasterMarquee"
export default function testPage(){
    return(
        <>
        <Marquee direction="up">
            <Testimonial/>
        </Marquee>
        </>
    )
}