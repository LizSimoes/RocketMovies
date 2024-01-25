import '../HomePage/style.css'
export default function Home({user}:any){
    return(
        <header>
            <div className="title-container">
                <h1>RocketMovies</h1>
                <input type="text" placeholder="Pesquisar pelo título"/>
                <div className="name-container">
                    <h2>{user.name}</h2>
                    <p>sair</p>
                </div>
            </div>

        </header>
        
    )
}