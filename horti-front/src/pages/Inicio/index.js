import { useHistory } from 'react-router-dom'
import './style.css';

import Logo from '../assets/logo.png'
import { Button } from 'antd'

export default function Inicio() {
    
    const history = useHistory()

    async function listarProdutos(event) {
        history.push('/produtos')
    }

    return (
        <div className='inicio__container'>
            <section className='inicio__container'>
                <img src={Logo} alt='Logo' className='inicio__logo' />
                <br/>
                <Button onClick={listarProdutos}>Ver produtos</Button>
            </section>
        </div>
    )
}