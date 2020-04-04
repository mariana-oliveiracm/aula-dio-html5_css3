SELECT count(1) FROM banco; --151 bancos
SELECT count(1) FROM agencia; --296 agências

SELECT banco.numero, banco.nome, agencia.numero, agencia.nome
FROM banco
JOIN agencia 
    ON agencia.banco_numero = banco.numero;

SELECT count(banco.numero)
FROM banco
JOIN agencia 
    ON agencia.banco_numero = banco.numero;

SELECT banco.numero
FROM banco
JOIN agencia 
    ON agencia.banco_numero = banco.numero
GROUP BY banco.numero;

SELECT count(distinct banco.numero)
FROM banco
JOIN agencia 
    ON agencia.banco_numero = banco.numero;

SELECT banco.numero, banco.nome, agencia.numero, agencia.nome
FROM banco
LEFT JOIN agencia 
    ON agencia.banco_numero = banco.numero;

SELECT agencia.numero, agencia.nome, banco.numero, banco.nome
FROM agencia
RIGHT JOIN banco 
    ON banco.numero = agencia.banco_numero;

SELECT agencia.numero, agencia.nome, banco.numero, banco.nome
FROM agencia
LEFT JOIN banco 
    ON banco.numero = agencia.banco_numero;

SELECT banco.numero, banco.nome, agencia.numero, agencia.nome
FROM banco
FULL JOIN agencia 
    ON agencia.banco_numero = banco.numero;

SELECT b.nome, ag.nome, cc.numero, cc.digito, cl.nome 
FROM banco b
JOIN agencia ag
    ON ag.banco_numero = b.numero
JOIN conta_corrente cc
    ON cc.banco_numero = b.numero
    AND cc.agencia_numero = ag.numero
JOIN cliente cl
    ON cl.numero = cc.cliente_numero;


SELECT b.nome, ag.nome, cc.numero, cc.digito, cl.nome, ct.valor, tt.nome
FROM banco b
JOIN agencia ag
    ON ag.banco_numero = b.numero
JOIN conta_corrente cc
    ON cc.banco_numero = b.numero
    AND cc.agencia_numero = ag.numero
JOIN cliente cl
    ON cl.numero = cc.cliente_numero
JOIN cliente_transacoes ct
    ON ct.cliente_numero = cl.numero
JOIN tipo_transacao tt 
    ON tt.id = ct.tipo_transacao_id
ORDER BY cl.nome;