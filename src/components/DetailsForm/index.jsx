import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import './styles.css';
// import TextArea from 'antd/es/input/TextArea';

const {TextArea} = Input

function DetailsForm() {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [age, setAge] = useState(''); // dropdown
    const [address, setAddress] = useState(''); //gmaps link to select on map
    const [description, setDescription] = useState(''); // to know more about them in detail

    const handleSubmit = () => {

    }
    return(
        <div className='details-container'>
            <Form
                className='details-box'
                layout='horizontal'
                labelCol={{ span: 8 }}
            >
                <p className='heading'>Introduction</p>
                <h3>Let us know more about you...</h3>
                <Form.Item name='name' label='Name'>
                        <Input name='name' value={name} onChange={() => setName(name)}></Input>
                </Form.Item>
                <Form.Item name='number' label='Contact Number'>
                    <Input name='number' value={number} onChange={() => setNumber(number)}></Input>
                </Form.Item>
                <Form.Item name='age' label='Age'>
                    <Input name='age' value={age} onChange={() => setAge(age)}></Input>
                </Form.Item>
                <Form.Item name='address' label='Address'>
                    <Input name='address' value={address} onChange={() => setAddress(address)}></Input>
                </Form.Item>
                <Form.Item name='description' label='Description'>
                    <TextArea rows={4} name='description' value={description} onChange={() => setDescription(description)}></TextArea>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' onClick={handleSubmit}>Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default DetailsForm;