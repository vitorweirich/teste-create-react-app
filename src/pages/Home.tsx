import React, { useState, useEffect } from "react";
import VacasProxy from "../service/vacaService";
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

type Vaca = {
    'numero':          string;
    'nome':            string;
    'ensiminacao':     string;
    'secagem':         string;
    'parto':           string;
    'novaEnsiminacao': string;
    'nCrias':          number;
    'cor':             string;
    'diasLactacao':    string;
    'repeticao':       string;
}

export function Home() {
    const proxy = new VacasProxy();

    const [vacas, setVacas] = useState<Vaca[]>([])

    const getVacas = async () => {
        const vacasList = await proxy.getVacas();
        setVacas(vacasList);
    };

    useEffect(() => {
        getVacas();
    }, []);

    const headers: string[] = ['numero', 'nome', 'ensiminacao', 'secagem', 'parto', 'novaEnsiminacao', 'nCrias', 'cor', 'diasLactacao', 'repeticao'];

    return (
    <div>
        <h1>Gerenciar</h1>
        <Button>Teste</Button> 
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    {headers.map(k => <td key={k}>{k}</td>)}
                </tr>
            </thead>
            <tbody>
                {vacas.map(v => <tr key={v.numero}>
                    <td>{v.nome}</td>
                    <td>{v.numero}</td>
                    <td>{v.ensiminacao}</td>
                    <td>{v.secagem}</td>
                    <td>{v.parto}</td>
                    <td>{v.novaEnsiminacao}</td>
                    <td>{v.nCrias}</td>
                    <td>{v.cor}</td>
                    <td>{v.diasLactacao}</td>
                    <td>{v.repeticao}</td>
                </tr>)}
            </tbody>    
        </Table>
    </div>);
}