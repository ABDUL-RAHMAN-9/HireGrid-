import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button';
const Contact = () =>
{
    const navigate = useNavigate();
    const onClickInfo = () =>
    {
        navigate('info');
    }

    const onClickForm = () =>
    {
        navigate('form');
    }


    return (
        <div>
            <h1>Contact Page</h1>
            <div className="flex justify-center mt-8 text-xl gap-4">
                <Button text="Contact Info" onClick={onClickInfo} />
                <Button text="Contact Form" onClick={onClickForm} />
            </div>
        </div>
    )
}

export default Contact
