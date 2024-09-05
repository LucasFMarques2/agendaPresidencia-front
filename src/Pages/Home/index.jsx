import { Container, Agenda, Menu } from "./styled";
import { Tab, Nav } from 'react-bootstrap';
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import { AgendaCards } from "../../Components/AgendaCards";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { AddAgendaForm } from '../../Components/AddAgendaForm';

const initialAgendas = [
    {
        id: 2,
        titulo: "Reunião com ministro mec",
        desc: "reunuão apara asdlasdl asdlas alsdl alsdl alsd alsd",
        dataInicio: "10/07/2024 20:20",
        dataFIm: "10/07/2024 20:50",
        local: "Cabinete 07",
        estadoAtual: "em andamento"
    },
    {
        id: 3,
        titulo: "Reunião com ministro mec",
        desc: "reunuão apara asdlasdl asdlas alsdl alsdl alsd alsd",
        dataInicio: "10/07/2024 20:20",
        dataFIm: "10/07/2024 20:50",
        local: "Cabinete 07",
        estadoAtual: "finalizado"
    },
    {
        id: 3,
        titulo: "Reunião com ministro mec",
        desc: "reunuão apara asdlasdl asdlas alsdl alsdl alsd alsd",
        dataInicio: "10/07/2024 20:20",
        dataFIm: "10/07/2024 20:50",
        local: "Cabinete 07",
        estadoAtual: "finalizado"
    },
    {
        id: 3,
        titulo: "Reunião com ministro mec",
        desc: "reunuão apara asdlasdl asdlas alsdl alsdl alsd alsd",
        dataInicio: "10/07/2024 20:20",
        dataFIm: "10/07/2024 20:50",
        local: "Cabinete 07",
        estadoAtual: "finalizado"
    },
    {
        id: 3,
        titulo: "Reunião com ministro mec",
        desc: "reunuão apara asdlasdl asdlas alsdl alsdl alsd alsd",
        dataInicio: "10/07/2024 20:20",
        dataFIm: "10/07/2024 20:50",
        local: "Cabinete 07",
        estadoAtual: "finalizado"
    },
    
    {
        id: 3,
        titulo: "Reunião com ministro mec",
        desc: "reunuão apara asdlasdl asdlas alsdl alsdl alsd alsd",
        dataInicio: "10/07/2024 20:20",
        dataFIm: "10/07/2024 20:50",
        local: "Cabinete 07",
        estadoAtual: "finalizado"
    },
    
    {
        id: 3,
        titulo: "Reunião com ministro mec",
        desc: "reunuão apara asdlasdl asdlas alsdl alsdl alsd alsd",
        dataInicio: "10/07/2024 20:20",
        dataFIm: "10/07/2024 20:50",
        local: "Cabinete 07",
        estadoAtual: "finalizado"
    },
    
]


export function Home() {
    const [agendas, setAgendas] = useState(initialAgendas);

    const estadoAtual = (estado) => {
        switch (estado) {
            case "agendado":
                return {
                    color: 'primary',
                    stay: 'Agendado'
                };
            case "em andamento":
                return {
                    color: 'danger',
                    stay: "Em andamento"
                };
            case "finalizado":
                return {
                    color: 'success',
                    stay: "Finalizado"
                };
            default:
                return {
                    color: 'default',
                    stay: estado
                };
        }
    };

    const handleAddAgenda = (newAgenda) => {
        setAgendas(prevAgendas => [
            ...prevAgendas,
            {
                id: prevAgendas.length + 1,
                ...newAgenda
            }
        ]);
    };

    const filterAgendasByStatus = (status) => {
        return agendas.filter(agenda => agenda.estadoAtual === status);
    };

    return (
        <>
            <Header />
            <Container>
                <Menu>
                    <h1>Adicione um novo calendário</h1>
                    <AddAgendaForm onAdd={handleAddAgenda} />
                </Menu>
                <Agenda>
                    <Input className="Input" placeholder="Pesquisar pelo título" type="text" icon={FiSearch} />
                    <Tab.Container id="left-tabs-example" defaultActiveKey="agendado">
                        <Nav variant="tabs" className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link eventKey="agendado">Agendado</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="em andamento">Em andamento</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="finalizado">Finalizado</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="agendado">
                                <div id='cards'>
                                    {filterAgendasByStatus('agendado').map(agenda => {
                                        const { color, stay } = estadoAtual(agenda.estadoAtual);
                                        return (
                                            <AgendaCards
                                                key={agenda.id}
                                                currentstay={stay}
                                                title={agenda.titulo}
                                                description={agenda.desc}
                                                start={agenda.dataInicio}
                                                end={agenda.dataFIm}
                                                locale={agenda.local}
                                                color={color}
                                            />
                                        );
                                    })}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="em andamento">
                                <div id='cards'>
                                    {filterAgendasByStatus('em andamento').map(agenda => {
                                        const { color, stay } = estadoAtual(agenda.estadoAtual);
                                        return (
                                            <AgendaCards
                                                key={agenda.id}
                                                currentstay={stay}
                                                title={agenda.titulo}
                                                description={agenda.desc}
                                                start={agenda.dataInicio}
                                                end={agenda.dataFIm}
                                                locale={agenda.local}
                                                color={color}
                                            />
                                        );
                                    })}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="finalizado">
                                <div id='cards'>
                                    {filterAgendasByStatus('finalizado').map(agenda => {
                                        const { color, stay } = estadoAtual(agenda.estadoAtual);
                                        return (
                                            <AgendaCards
                                                key={agenda.id}
                                                currentstay={stay}
                                                title={agenda.titulo}
                                                description={agenda.desc}
                                                start={agenda.dataInicio}
                                                end={agenda.dataFIm}
                                                locale={agenda.local}
                                                color={color}
                                            />
                                        );
                                    })}
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Agenda>
            </Container>
        </>
    );
}