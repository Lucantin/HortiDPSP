import './styles.css'

import React from 'react'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

import { message, Form, Input, Button, InputNumber } from 'antd'

export default function AdicionarProduto() {

    const history = useHistory()

    async function handleSubmit(produto) {
        api.post('/item', produto)
            .then(response => {
                if(response.status === 201) {
                    message.success('Produto adicionado com sucesso!')
                    history.push('/produtos')
                }
            })
            .catch(error => {
                message.error('Erro ao adicionar produto!' + error)
            })
    }
    return(
        <div className='produto__container'>
                <h1>Adicionar Produto</h1>
                <br/>
            <div>
                <Form
                name='submitProduto'
                labelCol={{span:8}}
                wrapperCol={{ span: 16 }}
                onFinish={handleSubmit}
                autoComplete="off"
                >
                    <Form.Item
                    label="Nome do item"
                    name="name"
                    rules={[{ required: true, message: "O nome do item não pode ser vazio" }]}
                    >
                        <Input />
                    </Form.Item>
                   
                    <Form.Item
                    label="Descrição"
                    name="description"
                    rules={[{ required: true, message: "Insira a descrição do item" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                    label="Quantidade"
                    name="quantity"
                    rules={[{ required: true, message: "Insira a quantidade" }]}
                    >
                        <InputNumber />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Adicionar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )

}
