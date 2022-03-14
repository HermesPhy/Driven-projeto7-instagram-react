export default function Conteudo() {
    return (
        <div class="conteudo-total">
            <StoriesFeed />
            <SideBar />
        </div>
    )
}

function StoriesFeed () {
    return (
        <div class="conteudo-stories-feed">
            <UsersStories />
            <UsersFeed />
        </div>

    )
}

function UsersStories() {
    const users = [
        {name: "9gag"}, 
        {name: "meowed"}, 
        {name: "barked"}, 
        {name: "nathanwpylestrangeplanet"}, 
        {name: "wawawiwacomicsa"}, 
        {name: "respondeai"}, 
        {name: "filomoderna"}, 
        {name: "memeriagourmet"}        
    ];

    return (
        <div class="stories">
            {users.map((user) =>
                <Storie name={user.name} />
                )
            }
        </div>
    )
}

function Storie(props) {
    return (
        <a href="https://www.instagram.com/">
            <button class="involucro-stories">
                <div class="contorno-stories">
                    <div class="borda-stories borda-cor">
                        <div class="borda-branca">
                            <div class="imagem-stories"><img src={`imagens/imagens/${props.name}.png`} /></div>
                        </div>
                    </div>
                </div>
                <p class="nome-stories">{props.name}</p>
            </button>
        </a>
    )
}

function UsersFeed() {
    const posts = [
        {userName: "filosofialiquida", imageUser:"superpoder", visitant:"dixx.dragaozinhoo", numberComents:"66", time:"11 HORAS"}, 
        {userName: "philosophyofscience", imageUser:"stand-up-for-science", visitant:"saladeapoioaoensinodefisica", numberComents:"198", time:"2 DIAS"}, 
        {userName: "ursoselvagem", imageUser:"superpoder", visitant:"anatureza", numberComents:"398", time:"42 MINUTOS"}    
    ];

    return (
        <div class="feed">
            {posts.map((post) =>
                <Feed userName={post.userName} imageUser={post.imageUser} visitant={post.visitant} numberComents={post.numberComents} time={post.time} />
                )
            }
        </div>
    )
}

function Feed(props){
    return(
        <div class="posts">
            <div class="posts-topo">
                <div>
                    <a href="https://www.instagram.com/"><img src={`imagens/imagens/${props.userName}.jpg`} alt="" class="logo-posts-topo" /></a>
                    <a href="https://www.instagram.com/" class="nome-posts-topo">{props.userName}</a>
                </div>
                <div>
                    <button>
                        <ion-icon name="ellipsis-horizontal-sharp"></ion-icon>
                    </button>
                </div>
            </div>
            <img src={`imagens/imagens/${props.imageUser}.JPG`} alt="" />
            <div class="posts-corpo">
                <div class="posts-reacoes">
                    <div class="posts-acoes">
                        <button>
                            <ion-icon name="heart" class="heart-color"></ion-icon>
                        </button>
                        <button>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </button>
                        <button>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </button>
                    </div>
                    <div>
                        <button>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </button>
                    </div>
                </div>
                <div class="posts-curtidas">
                    <a href="https://www.instagram.com/"><img src={`imagens/imagens/${props.visitant}.jpg`} alt="" /></a>
                        <p class="texto-curtidas">Curtido por <a href={`https://www.instagram.com/${props.visitant}/`}>{props.visitant}</a> e <a href="https://www.instagram.com/">outras pessoas</a></p>
                </div>
                <button class="ver-comentarios">Ver todos os {props.numberComents} comentários</button>
                <p class="tempo-comentarios">HÁ {props.time}</p>
            </div>
            <div class="postar-comentarios">
                <button><ion-icon name="happy-outline"></ion-icon></button>
                <textarea name="" id="" row="1" col="1" maxlength="200" class="textarea-comentarios" placeholder="Adicione um comentário..."></textarea>
                <button class="escrever-comentarios">Publicar</button>
            </div>
        </div>
    )
}

function SideBar() {
    return (
        <div class="barra-lateral ocultar-3">
            <MeuPerfil />
            <Sugetoes />
            <Rodape />
        </div>
    )
}

function MeuPerfil() {
    return (
        <div class="meu-perfil">
                <a href="https://www.instagram.com/"><img src="imagens/imagens/FotoPats.jpg" class="minha-foto" /></a>
                <div class="texto-perfil">
                    <a href="https://www.instagram.com/" class="meu-nome">hermes.junior</a>
                    <div class="nome">Hermes Júnior</div>
                </div>
            </div>
    )
}

function Sugetoes() {
    return (
        <div class="sugestoes-todas">
            <div class="sugestoes-topo espaco-1">
                <p class="sugestoes-texto-1">Sugestões para você</p>
                <a href="https://www.instagram.com/" class="ver-tudo">Ver tudo</a>
            </div>
            <div class="sugestoes espaco-1">
                <div class="sugestoes-perfil">
                    <a class="sugestoes-imagem" href="https://www.instagram.com/">
                        <img src="imagens/imagens/badvibesmemes.png" alt="" />
                    </a>
                    <div class="sugestoes-texto-2">
                        <a class="sugestoes-nome" href="https://www.instagram.com/">bad.vibes.memes</a>
                        <p class="sugestoes-status">Segue você</p>
                    </div>
                </div>
                <a href="https://www.instagram.com/" class="seguir">
                    <p>Seguir</p>
                </a>
            </div>
            <div class="sugestoes espaco-1">
                <div class="sugestoes-perfil">
                    <a class="sugestoes-imagem" href="https://www.instagram.com/">
                        <img src="imagens/imagens/chibirdart.png" alt="" />
                    </a>
                    <div class="sugestoes-texto-2">
                        <a class="sugestoes-nome" href="https://www.instagram.com/">chibirdart</a>
                        <p class="sugestoes-status">Segue você</p>
                    </div>
                </div>
                <a href="https://www.instagram.com/" class="seguir">
                    <p>Seguir</p>
                </a>
            </div>
            <div class="sugestoes espaco-1">
                <div class="sugestoes-perfil">
                    <a class="sugestoes-imagem" href="https://www.instagram.com/">
                        <img src="imagens/imagens/razoesparaacreditar.png" alt="" />
                    </a>
                    <div class="sugestoes-texto-2">
                        <a class="sugestoes-nome" href="https://www.instagram.com/">razoesparaacreditar</a>
                        <p class="sugestoes-status">Novo no Instagram</p>
                    </div>
                </div>
                <a href="https://www.instagram.com/" class="seguir">
                    <p>Seguir</p>
                </a>
            </div>
            <div class="sugestoes espaco-1">
                <div class="sugestoes-perfil">
                    <a class="sugestoes-imagem" href="https://www.instagram.com/">
                        <img src="imagens/imagens/adorableanimals.png" alt="" />
                    </a>
                    <div class="sugestoes-texto-2">
                        <a class="sugestoes-nome" href="https://www.instagram.com/">adorable_animals</a>
                        <p class="sugestoes-status">Segue você</p>
                    </div>
                </div>
                <a href="https://www.instagram.com/" class="seguir">
                    <p>Seguir</p>
                </a>
            </div>
            <div class="sugestoes espaco-1">
                <div class="sugestoes-perfil">
                    <a class="sugestoes-imagem" href="https://www.instagram.com/">
                        <img src="imagens/imagens/smallcutecats.png" alt="" />
                    </a>
                    <div class="sugestoes-texto-2">
                        <a class="sugestoes-nome" href="https://www.instagram.com/">smallcutecats</a>
                        <p class="sugestoes-status">Segue você</p>
                    </div>
                </div>
                <a href="https://www.instagram.com/" class="seguir">
                    <p>Seguir</p>
                </a>
            </div>
        </div>
    )
}

function Rodape() {
    return (
        <div class="rodape">
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
    )
}