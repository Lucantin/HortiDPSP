import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

import './style.css';

import { Button, Card } from 'antd';

export default function Produtos() {
    const [ produtos, setProdutos] = useState([]);
    const history = useHistory();

    async function details(event, produto_id) {
        event.preventDefault()
        history.push(`/detalhes/${produto_id}`)
        window.location.reload()
    }


    useEffect(() => {
        api.get('/item')
        .then(response => {
        setProdutos(response.data);
        })
        .catch((error) => {
            console.log("Aconteceu um erro: " + error);
        })
    }, []);

    return(
        <div className="produto__container">
            <h1>Relação de todos os Produtos</h1>

            <div className="produto__card__container">
                {produtos.map(produto => (
                    <Card key={produto.id} title={produto.name} bordered={false} style={{width: 300}}>
                        <p>Descrição: {produto.description}</p>
                        <p>Quantidade: {produto.quantity}</p>
                        <Button onClick={(e)=>{details(e, produto.id)}}>Detalhes</Button>
                    </Card>
                ))}
            </div>
        </div>
    )
}