# doar-computadores-appmasters
## Projeto de seleção para estágio Javascript da [App Masters](https://www.appmasters.io/) (link abre na mesma janela)

### Escolhi o seguinte projeto:

## Frontend

- Criar projeto usando Next.js
- Na rota inicial, exibir com H1 com "Doação de computadores usados"
- Instalar pacote AXIOS no projeto
- Ao renderizar a interface (apenas uma vez) fazer uma chamada get para doar-computador-api.herokuapp.com e obter a resposta, que será algo como {alive:true}
- Se alive for true, exibir na view "API online", se false exibir "API offline"

## Etapa 2

- Criar formulário com duas sessões
- O formulário deve ficar na primeira página, para facilitar a doação
- Manter o projeto usando o Next, ou seja, não implementar o react-router

Estrutura dos dados a serem enviados/recebidos.
```
{
    name,
    email,
    phone,
    zip,
    city,
    state,
    streetAdrress,
    number,
    complement,
    neighborhood,
    deviceCount,
    devices: [
        {type, condition},
        {type, condition},
        ...
    ]
}
```

Todos campos são obrigatórios (inclusive em devices), exceto o endereço de email e complement.

### Primeira parte, dados pessoais

- A primeira parte recebe os dados pessoais do doador
- Campos de dados pessoais: Nome, e-mail, telefone
- Do endereço, o primeiro campo deverá ser o CEP
- Ao digitar o CEP, exibir um loading enquanto se obtem o endereço
- Caso consiga obter o endereço, preencher os campos e levar o foco para o campo number
- Após estes campos a pessoa irá informar "Quantos equipamentos serão doados"
- Ao informar "1", será exibido abaixo um formulário único formulário de detalhes do equipamento, se "2" então dois formulários, e assim por diante

### Segunda parte, equipamentos

- A segunda parte recebe dados dos equipamentos a serem doados
- Campos dos equipamento para doação: Tipo de equipamento, Estado
- Tipos de equipamento: Notebook, Desktop, Netbook, Monitor, Impressora, Scanner
- Estado de conservação (o usuário deverá escolher um deles):
```
- Tem todas as partes, liga e funciona normalmente - value: working
- Tem todas as partes, mas não liga mais - value: notWorking
- Faltam peças, funciona só as vezes ou está quebrado - value: broken
```

### Envio dos dados
- Enviar os dados (como apresentados acima) via POST para doar-computador-api.herokuapp.com/donation
- A API irá falhar com alguma frequência (pra dificultar sua vida), retornando status diferente de 200. Lide com isso dando feedback ao usuário que o servidor falhar, dizendo algo como "O servidor falhou em responder. Tente mais tarde."
- Ao enviar dados inválidos ou faltando, será retornado o status 400 com detalhes do erro. Lide com isso e dê também o feedback correto ao usuário.
