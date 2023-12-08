import React, {ReactNode} from 'react';
import logo from "../../static/swlw.jpg";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Body from "./body/Body";
import Article from "../../components/article/Article";

export interface LayoutProps {
    children?: ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({children}) => (
    <React.Fragment>
        <Header/>
        <div className="mt-4"></div>
        <div className={"body-container"}>
            <Body>
                <Article fact={"BYBYS"}/>
            </Body>
        </div>
        <Footer/>
    </React.Fragment>
)

export default MainLayout;