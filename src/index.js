import ReactDom from "react-dom";
import BarraNavegacao from "./BarraNavegacao";
import Conteudo from "./Conteudo";
import Mobile from "./Mobile";

function App() {
    return (
        <div>
            <BarraNavegacao />
            <Conteudo />
            <Mobile />
        </div>
    )
}

const app = App();
const appElement = document.querySelector(".root");
ReactDom.render(app, appElement);