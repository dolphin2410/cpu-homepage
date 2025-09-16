import { ReactElement } from "react";
import Navbar from "./components/ui/nav/Navbar";

type AppProps = {
    child: ReactElement
}

function App({ child } : AppProps) {
    return (
        <>
            <Navbar />
            {child}
        </>
    )
}

export default App;