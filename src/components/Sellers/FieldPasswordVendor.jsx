import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';
import { useEffect } from 'react';


const ContentField = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    column-gap: 0.5rem;
    padding: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.0);
    transition: all 0.4s;
    color: dimgray;
    cursor: pointer;

    &:hover {
        
        border: 1px solid var(--custom-blue);
        color: var(--custom-blue);
    }
`;

const ElementLabel = styled.label`
    font-size: 12pt;
    font-weight: bold;
    margin: 0px;
    letter-spacing: 0.1rem;
    cursor: pointer;
`;

const ElementInput = styled.input`
    padding: 0.2rem;
    border: none;
    outline: none;
    outline-color: transparent;
    width: 100%;
`;

const BtnSave = styled.button`
    z-index: 5;
    &:hover {
        cursor: not-allowed;
    }
`;


const FieldPasswordVendor = ({field, setField}) => {

    const [ show, setShow ] = useState(false);

    const { title, name, password1, password2 } = field;

    const [ enabled, setEnabled ] = useState(false);

    const handleClickShowModal = () => {
        
        if(show) { return; }
        setShow(true);
    }

    const handleClickShowBtn = () => {

        if(password1.trim().length < 6) {
            alert('Mínimo 6 caracteres');
            return;
        }

        setShow(false);
    }

    const handleChangeField = (e) => {

        setField({
            ...field,
            [e.target.name]: e.target.value
        });
    }


    useEffect(() => {

        if(password1.trim() === password2.trim() && password1.trim().length > 5) {
            console.log(password1, password2);
            setEnabled(true);
        } else {
            setEnabled(false);
        }

    }, [field]);


    return (
        <ContentField onClick={handleClickShowModal}>

            {
            show
            ? <Fragment>
                <div className="d-flex flex-column">
                    <ElementInput
                        className="mb-2"
                        placeholder={field.placeholder1}
                        name={`password1`}
                        value={password1}
                        onChange={handleChangeField}
                        type="text"
                    />
                    <hr/>
                    <ElementInput
                        placeholder={field.placeholder2}
                        name={`password2`}
                        value={password2}
                        onChange={handleChangeField}
                        type="text"
                    />
                </div>
                {
                !enabled
                ? <BtnSave
                    disabled={!enabled}
                    onClick={handleClickShowBtn}
                    className="btn btn-primary p-1"
                >Guardar</BtnSave>    
                : <button
                    onClick={handleClickShowBtn}
                    className="btn btn-primary p-1"
                   >Guardar</button>
                }
                
            </Fragment>
            
            
            : <ElementLabel>{title}</ElementLabel>
            }

            
        </ContentField>
    );
}

export default FieldPasswordVendor;