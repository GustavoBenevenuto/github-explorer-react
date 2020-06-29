import React from 'react';
import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
`;

export const Form = styled.form`

    margin-top: 40px;
    max-width: 700px;
    display: flex;

    input{
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        
        &::placeholder {
            color: #a8a8b3;
        }

    }

    button{
        width: 210px;
        height: 70px;
        background: #04d361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #FFF;
        font-weight: bold;
        transition: 0.2s;

        &:hover {
            background: #03A74D;          
        }
    }
`;

export const Repositories = styled.div`
    max-width: 700px;
    margin-top: 80px;

    a{
        background: #FFF;
        border-radius: 5px;
        padding: 24px;
        width: 100%;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: transform 0.2s;         

        & + a {
            margin-top: 16px;
        } 

        &:hover{
            transform: translateX(10px);
        }
    }

    img{
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    div{
        margin-left: 16px;
        strong{
            font-size: 20px;
            color: #3d3d4d;
        }

        p{ 
            font-size: 15px;
            color: #A8A8B3;
            margin-top: 4px;
        }
    }

    
    svg{
        margin-left: auto;
        color: #cbcbd6;
    }
    
`;