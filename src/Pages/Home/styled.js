import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 60px); /* Ajusta a altura para considerar o Header */
    margin-top: 60px; /* Adiciona uma margem para empurrar o conteúdo para baixo */
`;

export const Menu = styled.aside`
    width: 20%;
    padding: 2rem;
    background-color: ${({theme}) => theme.COLORS.DARK_GRAY}; /* Cor de fundo para destacar a barra lateral */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Sombra para destacar a sidebar */
    
    h1 {
        margin-bottom: 2rem;
    }
`;

export const Agenda = styled.div`
    flex: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    .Input {
            background-color: ${({theme}) => theme.COLORS.BLACK};  
            height: 12;
            svg {
                color: ${({theme}) => theme.COLORS.GRAY};
            }      
            
            input {
                border-radius: 6px;
                width: 100%;
            }
        }
    #cards {
        flex: 1;
        margin-top: 2rem;
        
        h2 {
            color: ${({theme}) => theme.COLORS.WHITE};
            margin-top: 1rem;
        }
    }
`;
