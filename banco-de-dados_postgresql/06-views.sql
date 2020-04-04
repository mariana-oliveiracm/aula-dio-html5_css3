CREATE OR REPLACE VIEW vw_bancos AS (
	SELECT numero, nome, ativo
	FROM banco
);
SELECT *
FROM vw_bancos;

CREATE OR REPLACE VIEW vw_bancos2 (banco_numero, banco_nome, banco_ativo) AS (
	SELECT numero, nome, ativo
	FROM banco
);
SELECT *
FROM vw_bancos2;

INSERT INTO vw_bancos2 (banco_numero, banco_nome, banco_ativo)
VALUES (51, 'Banco Boa Ideia', true);

SELECT *
FROM vw_bancos2
WHERE banco_numero = 51;

SELECT *
FROM banco
WHERE numero = 51;

UPDATE vw_bancos2 SET banco_ativo = false WHERE banco_numero = 51;
DELETE FROM vw_bancos2 WHERE banco_numero = 51;


CREATE OR REPLACE TEMPORARY VIEW vw_agencia AS (
	SELECT nome FROM agencia
);
SELECT nome FROM vw_agencia;


CREATE OR REPLACE VIEW vw_bancos_ativos AS (
	SELECT numero, nome, ativo
	FROM banco
	WHERE ativo IS true
) WITH LOCAL CHECK OPTION;
INSERT INTO vw_bancos_ativos (numero, nome, ativo) VALUES (51,'Banco Boa Ideia', false); --gera erro por causa do ativo

CREATE OR REPLACE VIEW vw_bancos_com_brasil AS (
	SELECT numero, nome, ativo
	FROM vw_bancos_ativos
	WHERE nome ILIKE '%Brasil%'
) WITH LOCAL CHECK OPTION;
SELECT * FROM vw_bancos_com_brasil;
INSERT INTO vw_bancos_com_brasil (numero, nome, ativo) VALUES (335,'Banco do Canadá',true); --gera erro por causa do nome ILIKE '%Brasil%'
INSERT INTO vw_bancos_com_brasil (numero, nome, ativo) VALUES (333,'Banco Atual do Brasil',true);
INSERT INTO vw_bancos_com_brasil (numero, nome, ativo) VALUES (331,'Banco Antigo do Brasil',false); --gera erro no vw_bancos_ativos por causa do ativo

--retirando o LOCAL CHECK OPTION do vw_bancos_ativos
CREATE OR REPLACE VIEW vw_bancos_ativos AS (
	SELECT numero, nome, ativo
	FROM banco
	WHERE ativo IS true
);
INSERT INTO vw_bancos_ativos (numero, nome, ativo) VALUES (51,'Banco Boa Ideia', false); --ok

CREATE OR REPLACE VIEW vw_bancos_com_brasil AS (
	SELECT numero, nome, ativo
	FROM vw_bancos_ativos
	WHERE nome ILIKE '%Brasil%'
) WITH LOCAL CHECK OPTION;
SELECT * FROM vw_bancos_com_brasil;
INSERT INTO vw_bancos_com_brasil (numero, nome, ativo) VALUES (335,'Banco do Canadá',true); --gera erro por causa do nome ILIKE '%Brasil%'
INSERT INTO vw_bancos_com_brasil (numero, nome, ativo) VALUES (333,'Banco Atual do Brasil',true);
INSERT INTO vw_bancos_com_brasil (numero, nome, ativo) VALUES (331,'Banco Antigo do Brasil',false); --ok

--inserindo CASCADED CHECK OPTION
CREATE OR REPLACE VIEW vw_bancos_ativos AS (
	SELECT numero, nome, ativo
	FROM banco
	WHERE ativo IS true
);
INSERT INTO vw_bancos_ativos (numero, nome, ativo) VALUES (51,'Banco Boa Ideia', false); --ok

CREATE OR REPLACE VIEW vw_bancos_com_brasil AS (
	SELECT numero, nome, ativo
	FROM vw_bancos_ativos
	WHERE nome ILIKE '%Brasil%'
) WITH CASCADED CHECK OPTION;
SELECT * FROM vw_bancos_com_brasil;
INSERT INTO vw_bancos_com_brasil (numero, nome, ativo) VALUES (335,'Banco do Canadá',true); --gera erro por causa do nome ILIKE '%Brasil%'
INSERT INTO vw_bancos_com_brasil (numero, nome, ativo) VALUES (333,'Banco Atual do Brasil',true);
INSERT INTO vw_bancos_com_brasil (numero, nome, ativo) VALUES (337,'Banco Velho do Brasil',false); --gera erro no vw_bancos_ativos por causa do ativo com o CASCADED


--recursive view
CREATE TABLE IF NOT EXISTS funcionarios (
	id SERIAL,
	nome VARCHAR(50),
	gerente INTEGER,
	PRIMARY KEY (id),
	FOREIGN KEY (gerente) REFERENCES funcionarios(id)
);

INSERT INTO funcionarios (nome, gerente) VALUES ('Armindo', null);
INSERT INTO funcionarios (nome, gerente) VALUES ('Natália', 1);
INSERT INTO funcionarios (nome, gerente) VALUES ('Mécia', 1);
INSERT INTO funcionarios (nome, gerente) VALUES ('Belmiro', 2);
INSERT INTO funcionarios (nome, gerente) VALUES ('Quintino', 4);

SELECT id, nome, gerente FROM funcionarios WHERE gerente IS null
UNION ALL
SELECT id, nome, gerente FROM funcionarios WHERE id = 999; --apenas exemplo

CREATE OR REPLACE RECURSIVE VIEW vw_func(id, gerente, funcionario) AS (
	SELECT id, gerente, nome
	FROM funcionarios
	WHERE gerente IS null
	UNION ALL
	SELECT funcionarios.id, funcionarios.gerente, funcionarios.nome
	FROM funcionarios
	JOIN vw_func ON vw_func.id = funcionarios.gerente
);
SELECT id, gerente, funcionario
FROM vw_func;

--mostrar tabela com o nome do gerente
SELECT f.nome AS nome_funcionario, f.id AS identificador, fu.nome AS nome_gerente 
FROM funcionarios f
INNER JOIN funcionarios fu
	ON fu.id = f.gerente;