import React from 'react';

const CustomBar = () => {
    return (
        <div style={{
            backgroundColor: '#231F20',
            color: 'white',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div style={{ marginLeft: 'auto', marginRight: '20px' }}>
                <a href="/acessar-conta" style={{ color: 'white', textDecoration: 'underline' }}>Acesse sua conta</a>
                 <span> ou </span>
                <a href="/cadastrar" style={{ color: 'white', textDecoration: 'underline' }}> Cadastre-se</a>
            </div>
        </div>
    );
};

export default CustomBar;
