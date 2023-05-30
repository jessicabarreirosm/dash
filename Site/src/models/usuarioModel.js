var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar( nome, email, cpf, senha) {
    
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, cpf);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    // INSERT INTO empresa (nomeEmpresa, CNPJ, CEP, numero, rua, bairro, cidade, UF, complemento, descricao) VALUES ('${nome}', '${cnpj}', '${cep}', '${numero}', '${rua}', '${bairro}', '${cidade}', '${uf}', '${complemento}', '${desc}');

    var instrucao = `
    INSERT INTO usuario (nomeUsuario, email, cpf, senha) VALUES ('${nome}', '${email}', '${cpf}' , '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 
function Funcionario(nomeFunc, funcaoFunc, nivelAcessoFunc, emailFunc, senhaFunc, cpfFunc) {
    var instrucao = `
    INSERT INTO usuario (nomeUsuario, tipo, nivel_acesso, email, senha, cpf) VALUES ('${nomeFunc}', '${funcaoFunc}', '${nivelAcessoFunc}' ,'${emailFunc}', '${senhaFunc}', '${cpfFunc}');`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar2(nomeEmpresa, cnpj, desc) {
    
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente.");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    // INSERT INTO empresa (nomeEmpresa, CNPJ, CEP, numero, rua, bairro, cidade, UF, complemento, descricao) VALUES ('${nome}', '${cnpj}', '${cep}', '${numero}', '${rua}', '${bairro}', '${cidade}', '${uf}', '${complemento}', '${desc}');

    var instrucao2 = `
    INSERT INTO empresa (nome, cnpj, descricao) VALUES ('${nomeEmpresa}', '${cnpj}', '${desc}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
} 

module.exports = {
    entrar,
    cadastrar,
    cadastrar2,
    listar,
    Funcionario
};



