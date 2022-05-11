import React, {useRef, useState, useCallback} from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";

import config from "./config";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./styles/GlobalStyles";
import {lightTheme, darkTheme} from "./styles/sharedCss";

function App() {
    const access_key = config.access_key;
    const [theme, setTheme] = useState("light");

    const callback = useCallback((theme) => {
        console.log(theme);
        theme === "light" ? setTheme("dark") : setTheme("light");
    }, []);
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
                <div className="App">
                    <Header parentCallback={callback} theme={theme}/>
                    <Banner />
                </div>
            </>
        </ThemeProvider>
    );
}

export default App;
