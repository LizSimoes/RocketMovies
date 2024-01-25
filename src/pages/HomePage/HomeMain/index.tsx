import mais from '../../../assets/mais.png'
import '../HomeMain/style.css'
export default function HomeMain(){
    return(
        <main>
            <div className='componentsHome'>
                <div className=''>
                    <h3>Meus filmes</h3>
                    <button><img src={mais} alt="" /> Adicionar filme</button>
                </div>
            </div>
        </main>
            
    )
}