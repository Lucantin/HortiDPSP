import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { useParams } from "react-router-dom";
import './styles.css';

import { Card, message } from 'antd';


export default function DetalhesProduto() {

    const [ produto, setProduto] = useState([]);

    let {id} = useParams();

    useEffect(() => {
        api.get(`/item/${id}`)
        .then(response => {
            setProduto(response.data)
        })
        .catch((error) => {
            message.error("Aconteceu um erro: " + error)
        })
    }, [id]);

    return(
        <div className="produto__container">
            <h1>Detalhes do produto</h1>
            <br/>
            <div className="produto__card__container">
                <Card key={produto.id} title={produto.name} bordered={false}>
                    <p>Id: {produto.id}</p>
                    <p>UpdatedAT: {produto.updatedAt}</p>
                    <p>Descrição: {produto.description}</p>
                    <p>Quantidade: {produto.quantity}</p>
                </Card>
            </div>
        </div>
    )
}