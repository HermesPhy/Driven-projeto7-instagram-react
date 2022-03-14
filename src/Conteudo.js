export default function Conteudo() {
    return (
        <div class="conteudo-total">
            <StoriesFeed />

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
    
}