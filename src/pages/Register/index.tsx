import nome from '../../assets/Nome.png'
import seta from '../../assets/seta.png'
import img from '../../assets/img-left.png'
import eMail from '../../assets/E-mail.png'
import senha from '../../assets/password.png'
import '../Register/style.css'
import { useState } from 'react'
import axios from 'axios'
export default function PageRegister({setUser}:any){

   
    const [name, setName] = useState<any>();
    const [email, setEmail] = useState<any>();
    const [password, setPassword] = useState<any>();

    
    
    async function Cadastrar(){
        await axios
        .post('https://service-food.onrender.com/create_user',{
            name: name, 
            email: email,
            password: password,
        })
        .then((data) => {
           setUser(data.data)
           
            
        })
        .catch((error) =>{
            console.log(error);
            
        })
    }


    return (
        <main>
            <div className='components'>
                <div className='title'>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                </div>
                <div className='components-container'>
                    <p>Crie sua conta</p>
                    <div className='ipt'>
                        <div className='input-nome'>
                            <input type="text" placeholder='Nome' onChange={(e) => setName(e.target.value)}/>
                            <img src={nome} alt="" />
                        </div>
                        <div className='input-email'>
                            <input type="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                            <img src={eMail} alt="" />

                        </div>
                        <div className='input-password'>
                            <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
                            <img src={senha} alt="" />

                        </div>

                    </div>
                </div>
                <div className='bnt'>
                    <button onClick={Cadastrar} id='pink'>Cadastrar</button>
                    <button ><img src={seta} alt="" /> Voltar para o login</button>
                </div>

              
            </div>
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
           
        </main>
        
    )
}