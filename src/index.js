import ReactDom from "react-dom";
import BarraNavegacao from "./BarraNavegacao";
import Conteudo from "./Conteudo";

function App() {
    return (
        <div>
            <BarraNavegacao />
            <Conteudo />
        </div>
    )
}

const app = App();
const appElement = document.querySelector(".root");
ReactDom.render(app, appElement);