import { useState } from "react";
import { Container, Agenda, Menu, Formulario, HamburgerMenu, Modal, ModalContent, InfoBar, ColorLabel } from "./styled";
import { AgendaCards } from "../../Components/AgendaCards";
import { AgendaForm } from "../../Components/AgendaForm";
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import {Input} from '../../Components/Input'
import moment from "moment";

const agendasIniciais = [
  {
    id: 1,
    titulo: "Reunião com ministro mec",
    desc: "Reunião para discutir as diretrizes",
    dataInicio: "2024-09-10 10:00",
    dataFim: "2024-09-10 11:00",
    local: "Cabinete 07",
    estadoAtual: "agendado",
  },
  {
    id: 2,
    titulo: "Reunião com ministro mec",
    desc: "Reunião para discutir as diretrizes",
    dataInicio: "2024-09-10 10:00",
    dataFim: "2024-09-10 11:00",
    local: "Cabinete 07",
    estadoAtual: "em andamento",
  },
  {
    id: 3,
    titulo: "Reunião com ministro mec",
    desc: "Reunião para discutir as diretrizes",
    dataInicio: "2024-09-10 10:00",
    dataFim: "2024-09-10 11:00",
    local: "Cabinete 07",
    estadoAtual: "finalizado",
  },
];

export function Home() {
  const [agendas, setAgendas] = useState(agendasIniciais);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [local, setLocal] = useState("");
  const [showForm, setShowForm] = useState(true); 
  const [selectedAgenda, setSelectedAgenda] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (moment(dataInicio).isAfter(dataFim)) {
      alert("A data de início não pode ser maior que a data final");
      return;
    }
    const novaAgenda = {
      id: agendas.length + 1,
      titulo,
      desc: descricao,
      dataInicio,
      dataFim,
      local,
      estadoAtual: "agendado",
    };
    setAgendas([...agendas, novaAgenda]);
    setTitulo("");
    setDescricao("");
    setDataInicio("");
    setDataFim("");
    setLocal("");
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (moment(selectedAgenda.dataInicio).isAfter(selectedAgenda.dataFim)) {
      alert("A data de início não pode ser maior que a data final");
      return;
    }
    const updatedAgendas = agendas.map((agenda) =>
      agenda.id === selectedAgenda.id
        ? { ...selectedAgenda } 
        : agenda
    );
    setAgendas(updatedAgendas);
    setSelectedAgenda(null); 
  };

  const handleDelete = (id) => {
    setAgendas(agendas.filter((agenda) => agenda.id !== id));
    setSelectedAgenda(null); // Fechar modal
  };

  const estadoAtual = (agenda) => {
    const agora = moment();
    const inicio = moment(agenda.dataInicio, "YYYY-MM-DD HH:mm");
    const fim = moment(agenda.dataFim, "YYYY-MM-DD HH:mm");

    if (agora.isBefore(inicio)) {
      return {
        color: 'primary',
        stay: 'Agendado'
      };
    } else if (agora.isBetween(inicio, fim)) {
      return {
        color: 'danger',
        stay: 'Em andamento'
      };
    } else {
      return {
        color: 'success',
        stay: 'Finalizado'
      };
    }
  };

  return (
    <Container>
      <Header />
      <Agenda>
        <HamburgerMenu onClick={() => setShowForm(!showForm)}>
          {showForm ? "Fechar" : "Novo Evento"}
        </HamburgerMenu>
        
        {showForm && (
          <Menu>
            <AgendaForm
            handleSubmit={handleSubmit}
            titulo={titulo}
            descricao={descricao}
            dataInicio={dataInicio}
            dataFim={dataFim}
            local={local}
            setTitulo={setTitulo}
            setDescricao={setDescricao}
            setDataInicio={setDataInicio}
            setDataFim={setDataFim}
            setLocal={setLocal}
            isEditing={false}
          />
          </Menu>
        )}

        <div id="cards">
          <InfoBar>
            <ColorLabel color="#0c63e4">
              <span></span> Agendado
            </ColorLabel>
            <ColorLabel color="#c6303e">
              <span></span> Em andamento
            </ColorLabel>
            <ColorLabel color="#16794c">
              <span></span> Finalizado
            </ColorLabel>
          </InfoBar>

          <h2>Agenda</h2>
          {agendas.length > 0 ? (
            agendas.map((agenda) => {
              const { color, stay } = estadoAtual(agenda);
              return (
                <AgendaCards
                  key={agenda.id}
                  currentstay={stay}
                  title={agenda.titulo}
                  description={agenda.desc}
                  start={moment(agenda.dataInicio).format("DD/MM/YYYY HH:mm")}
                  end={moment(agenda.dataFim).format("DD/MM/YYYY HH:mm")}
                  locale={agenda.local}
                  color={color}
                  onClick={() => setSelectedAgenda(agenda)}
                />
              );
            })
          ) : (
            <h2>Nenhuma agenda encontrada</h2>
          )}
        </div>
      </Agenda>
      {selectedAgenda && (
        <Modal>
          <ModalContent>
            <h2>Editar Evento</h2>
            <Formulario onSubmit={handleEditSubmit}>
              <Input
                className="Input"
                placeholder="Título do Evento"
                type="text"
                value={selectedAgenda.titulo}
                onChange={(e) =>
                  setSelectedAgenda({ ...selectedAgenda, titulo: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Descrição"
                value={selectedAgenda.desc}
                onChange={(e) =>
                  setSelectedAgenda({ ...selectedAgenda, desc: e.target.value })
                }
                required
              />
              <Input
                className="Input"
                placeholder="Data e Hora de Início"
                type="datetime-local"
                value={selectedAgenda.dataInicio}
                onChange={(e) =>
                  setSelectedAgenda({ ...selectedAgenda, dataInicio: e.target.value })
                }
                required
              />
              <Input
                className="Input"
                placeholder="Data e Hora de Fim"
                type="datetime-local"
                value={selectedAgenda.dataFim}
                onChange={(e) =>
                  setSelectedAgenda({ ...selectedAgenda, dataFim: e.target.value })
                }
                required
              />
              <Input
                className="Input"
                placeholder="Local"
                type="text"
                value={selectedAgenda.local}
                onChange={(e) =>
                  setSelectedAgenda({ ...selectedAgenda, local: e.target.value })
                }
                required
              />
              <Button title="Salvar" type="submit" />
              <Button title="Deletar" type="button" onClick={() => handleDelete(selectedAgenda.id)} />
            </Formulario>
            <Button title="Fechar" onClick={() => setSelectedAgenda(null)} />
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}
