import axios from 'axios';

type Vaca = {
    numero:          string;
    nome:            string;
    ensiminacao:     string;
    secagem:         string;
    parto:           string;
    novaEnsiminacao: string;
    nCrias:          number;
    cor:             string;
    diasLactacao:    string;
    repeticao:       string;
  }

export default class VacaService {

    public async getVacas(): Promise<Vaca[]> {
        // const proxyResponse = await axios.get('https://gerenciador-propriedade.herokuapp.com/vacas');

        // return proxyResponse.data;

        return [
            {
                "numero": "140258",
                "nome": "Teste 3",
                "ensiminacao": "",
                "secagem": "",
                "parto": "09/03/2021",
                "novaEnsiminacao": "18/04/2021",
                "nCrias": 0,
                "cor": "255 0 0",
                "diasLactacao": "453",
                "repeticao": ""
            },
            {
                "numero": "987456",
                "nome": "Teste 4",
                "ensiminacao": "",
                "secagem": "",
                "parto": "",
                "novaEnsiminacao": "",
                "nCrias": 0,
                "cor": "255 255 255",
                "diasLactacao": "",
                "repeticao": ""
            },
            {
                "numero": "987654",
                "nome": "Teste 5",
                "ensiminacao": "10/09/2020",
                "secagem": "21/05/2021",
                "parto": "20/06/2021",
                "novaEnsiminacao": "30/07/2021",
                "nCrias": 0,
                "cor": "255 0 0",
                "diasLactacao": "350",
                "repeticao": ""
            },
            {
                "numero": "258963",
                "nome": "Teste 6",
                "ensiminacao": "",
                "secagem": "",
                "parto": "",
                "novaEnsiminacao": "",
                "nCrias": 2,
                "cor": "255 255 255",
                "diasLactacao": "",
                "repeticao": ""
            },
            {
                "numero": "014789",
                "nome": "Teste 7",
                "ensiminacao": "",
                "secagem": "",
                "parto": "30/05/2021",
                "novaEnsiminacao": "09/07/2021",
                "nCrias": 7,
                "cor": "255 0 0",
                "diasLactacao": "371",
                "repeticao": ""
            },
            {
                "numero": "546932",
                "nome": "Teste 8",
                "ensiminacao": "25/12/2020",
                "secagem": "04/09/2021",
                "parto": "04/10/2021",
                "novaEnsiminacao": "13/11/2021",
                "nCrias": 3,
                "cor": "255 0 0",
                "diasLactacao": "244",
                "repeticao": ""
            }
        ];
    }
}