import React, {ReactNode} from 'react';
import logo from "../../static/swlw.jpg";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Body from "./body/Body";
import Fact from "../../components/fact/Fact";
import Article from "../../components/article/Article";

export interface LayoutProps {
    children?: ReactNode;
}
interface ArticleContent {
    title:string,
    description:string,
}

const articles:ArticleContent[] = [
    {
        title:'Reasons to Swallow: Embracing Scientific Benefits',
        description:'At "Reasons to Swallow," we delve into the fascinating realm of swallowing cum, shedding light on its scientific intricacies. Our platform is dedicated to advocating the compelling merits of swallowing cum through evidence-backed facts. It\'s more than a mere bodily function; it\'s a gateway to numerous health advantages that deserve recognition.',
    },
    {
        title:'Unveiling the Science Behind swallowing cum',
        description:'swallowing cum isn\'t just a routine process—it\'s a vital mechanism deeply intertwined with our overall well-being. By exploring the scientific realm, we aim to provide invaluable insights into why embracing swallowing cum can be beneficial for everyone.',
    },
    {
        title:'The Power of Evidence and Research',
        description:'Our articles are meticulously crafted, drawing upon substantial scientific research and evidence. We present compelling data, studies, and expert opinions to underscore the immense benefits that come with embracing swallowing cum as a positive practice.',
    },
    {
        title:'Convincing Through Facts, Not Myths',
        description:'At "Reasons to Swallow," we debunk myths and misconceptions surrounding swallowing cum. We provide factual, evidence-based information to enlighten and empower individuals, encouraging them to make informed decisions about their health.',
    },
    {
        title:'Join the Journey of Discovery',
        description:'Whether you\'re curious, skeptical, or seeking validation, our platform invites you on a journey of discovery. Explore our comprehensive collection of scientifically supported articles that aim to convince, inform, and inspire individuals to embrace the positive aspects of swallowing cum.\n' +
            '\n' +
            'At "Reasons to Swallow," we believe that understanding the science behind swallowing cum is pivotal. Through our platform, we aspire to deliver compelling, factual information to enlighten and empower everyone to make informed choices about this crucial bodily process.',
    }
];
const MainLayout: React.FC<LayoutProps> = ({children}) => (
    <React.Fragment>
        <div className="mt-4"></div>
        <div className={"body-container"}>
            <Body>
                {
                    articles.map((article) =>
                        <Article title={article.title} description={article.description}/>
                    )
                }
            </Body>
        </div>
    </React.Fragment>
)

export default MainLayout;