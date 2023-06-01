//CRUD
//R - READ - [OK]
//C - CREATE - [OK]
//

// consumir api
// npm install axios

import { useEffect, useState } from "react";
import { Button, Form, Table } from 'react-bootstrap';
import styles from './Veiculo.module.css'
import api from '../services/api.js'
import { FiTrash } from 'react-icons/fi';
import { FiEdit2 } from 'react-icons/fi';



function Veiculo() {
  let [veiculos, setVeiculos] = useState([]);
  let [veiculo, setVeiculo] = useState({placa:'',
  marca:'',
  modelo:'',
  ano:''
});


  useEffect(()=>{
    buscarVeiculos();
  }, []);
  async function buscarVeiculos(){
    const resposta = await api.get('/veiculos');
    setVeiculos(resposta.data);
    veiculos.find
  }

  async function salvar() {
    if(veiculo.id){
      await api.put(`/veiculos/${veiculo.placa}`, veiculo)
      .catch((error)=>{
        alert(error.response.data);
      });
    }else{
      await api.post('/veiculos', veiculo)
      .catch((error)=>{
        alert(error.response.data);
      });
    }
    buscarVeiculos();
       
    limparForm()
  }

  

   function prepararEditar(veiculo){
    setVeiculo({...veiculo});
  }

  async function excluir(veiculo) {
    
      const resposta = await api.delete(`/veiculos/${veiculo.placa}`)
      .catch((error)=>{
        alert(error.response.data);
      });; 
      
    
      buscarVeiculos();
    
  }
  //limpar forme
  function limparForm() {
    setVeiculo({
      placa:'',
      marca:'',
      modelo:'',
      ano:''
    });
    

  }

  return (
    <div className={styles.main}>
      <h1>Veiculo</h1>
      <Form.Control
        value={veiculo.placa}
        onChange={(e)=>{ veiculo.placa = e.target.value
          setVeiculo({...veiculo})}}
        placeholder="Placa"
        aria-label="Placa"
        aria-describedby="basic-addon1"
        disabled={veiculo.id}
      />
      <Form.Control
        value={veiculo.marca}
        onChange={(e)=>{ veiculo.marca = e.target.value
      setVeiculo({...veiculo})}}
        placeholder="Marca"
        aria-label="Marca"
        aria-describedby="basic-addon1"
      />
      <Form.Control
        value={veiculo.modelo}
        onChange={(e)=>{ veiculo.modelo = e.target.value
          setVeiculo({...veiculo})}}
        placeholder="Modelo"
        aria-label="Modelo"
        aria-describedby="basic-addon1"
      />
      <Form.Control
        value={veiculo.ano}
        onChange={(e)=>{ veiculo.ano = parseInt(e.target.value)
          setVeiculo({...veiculo})}}
        type="number"
        placeholder="Ano"
        aria-label="Ano"
        aria-describedby="basic-addon1"
      />
      <Button onClick={salvar}>{veiculo.id?'Editar':'Salvar'}</Button>
      <Button onClick={limparForm}>Limpar</Button>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <td>Placa</td>
            <td>Marca</td>
            <td>Modelo</td>
            <td>Ano</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
        { 
          veiculos.map((veiculo, i) => {
            return (

              <tr key={i}>
              <td>{veiculo.placa}</td>
                <td>{veiculo.marca}</td>
                <td>{veiculo.modelo}</td>
                <td>{veiculo.ano} </td>
                <td>
                  <Button onClick={()=>{excluir(veiculo)}}> <FiTrash /></Button>
                  <Button onClick={()=>{prepararEditar(veiculo)}}><FiEdit2 /></Button>
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </Table>
    </div>
  );
}

export default Veiculo;
