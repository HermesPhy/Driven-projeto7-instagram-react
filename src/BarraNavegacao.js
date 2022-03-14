export default function BarraNavegacao() {
    return (
        <div class="barra-logo-fixa">
            <Involucro />
        </div>
    )
}

function Involucro() {
    return (
        <div class="involucro-blf">
            <LogoInstagram />
            <CaixaPesquisar />
            <Icones />
        </div>
    )
}

function LogoInstagram() {
    return (
        <div class="logo-instagram-1">
                <a href="https://www.instagram.com/">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <div class="border-1 ocultar-1"></div>
                <a href="https://www.instagram.com/"><img src="imagens/imagens/logo.png" alt="Logo do Instagram" class="logo-instagram-2 ocultar-1" /></a>
        </div>
    )
}

function CaixaPesquisar() {
    return (
        <div class="caixa-pesquisar">
                <input type="Pesquisar" placeholder="Pesquisar" class="campo-pesquisar ocultar-1" />
                <a href="https://www.instagram.com/"><img src="imagens/imagens/logo.png" alt="Logo do Instagram" class="logo-instagram-2 ocultar-2 mostrar-1" /></a>
        </div>
    )
}

function Icones() {
    return (
        <div class="icones-blf">
            <a href="https://www.instagram.com/">
                    <button><ion-icon name="paper-plane-outline"></ion-icon></button>
            </a>
            <IconesItem nome="compass-outline" />
            <IconesItem nome="heart-outline" />
            <IconesItem nome="person-outline" />
        </div>
    )
}

function IconesItem(props) {
    return (
        <a href="https://www.instagram.com/">
            <button class="ocultar-1"><ion-icon name={props.nome}></ion-icon></button>
        </a>
    )
}
