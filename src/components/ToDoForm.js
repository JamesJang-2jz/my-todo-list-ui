import React from 'react'
import {Typography, Form, Input, Button } from 'antd'

const { Title } = Typography

function ToDoForm ({ onFinish }) {
    return (
    <>
        <Title level={3}>Add ToDo</Title>
        <Form 
            name="basic"
            autoComplete='off'
            onFinish={onFinish}
        >
            <Form.Item
                label="Description"
                name="Description"
                rules= {[{ required:true, message: 'Please write the description!'}]}
                >
                    <Input/>
                </Form.Item>

            </Form>
            </>

    )
}