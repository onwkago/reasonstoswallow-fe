import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header.tsx";
import Home from "./pages/Home.tsx";
import ConvinceMe from "./pages/ConvinceMe.tsx";
import { PageContainer } from "./styles/styled.ts";
import View from "./pages/View.tsx";
import Propose from "./pages/Propose.tsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/colors.ts";

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Header/>
                <PageContainer>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/convince-me" element={<ConvinceMe/>}/>
                        <Route path="/view/:id" element={<View />}/>
                        <Route path="/propose" element={<Propose />}/>
                    </Routes>
                </PageContainer>
                <Footer/>
            </ThemeProvider>
        </Router>
    );
}

export default App;
