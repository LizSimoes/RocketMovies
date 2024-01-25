import img from '../../assets/img-left.png'
import eMail from '../../assets/E-mail.png'
import senha from '../../assets/password.png'
import '../SignIn/style.css'
import { useState } from 'react'
import axios from 'axios'
import PageRegister from '../Register'
export default function PageSignIn({ setUser }: any) {
    const [page, setPage] = useState<any>(true);
    const [email, setEmail] = useState<any>();
    const [password, setPassword] = useState<any>();

    async function Entrar() {
        await axios
            .post('https://service-food.onrender.com/login', {

                email: email,
                password: password,

            })
            .then((data) => {
                setUser(data.data);

            })
            .catch((error) => {
                console.log(error);

            })
    }


    return (
        <>
            {page ? (
                <>
                    <main>
                        <div className='components'>
                            <div className='title'>
                                <h1>RocketMovies</h1>
                                <p>Aplicação para acompanhar tudo que assistir.</p>
                            </div>
                            <div className='components-container'>
                                <p>Faça seu login</p>
                                <div className='ipt'>
                                    <div className='input-email'>
                                        <input type="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                                        <img src={eMail} alt="" />

                                    </div>
                                    <div className='input-password'>
                                        <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
                                        <img src={senha} alt="" />

                                    </div>

                                </div>
                            </div>
                            <div className='bnt'>
                                <button onClick={Entrar} id='bnt'>Entrar</button>
                                <button onClick={() => setPage(false)} id='none'>Criar conta</button>
                            </div>


                        </div>
                        <div className='img-container'>
                            <img src={img} alt="" />
                        </div>
                    </main>
                </>
            ) : (
                <>
                    <PageRegister />
                </>
            )}

        </>
    )
}