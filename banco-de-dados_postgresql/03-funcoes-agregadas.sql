SELECT AVG(valor) 
FROM cliente_transacoes;

SELECT COUNT(numero) 
FROM cliente;

SELECT COUNT(numero), email 
FROM cliente 
WHERE email ILIKE '%gmail.com' 
GROUP BY email;

SELECT MAX (valor) 
FROM cliente_transacoes;

SELECT MIN (valor) 
FROM cliente_transacoes;

SELECT MAX (valor), tipo_transacao_id 
FROM cliente_transacoes 
GROUP BY tipo_transacao_id;

SELECT MIN (valor), tipo_transacao_id 
FROM cliente_transacoes 
GROUP BY tipo_transacao_id;

SELECT COUNT(id), tipo_transacao_id 
FROM cliente_transacoes 
GROUP BY tipo_transacao_id 
HAVING COUNT(id) > 150;

SELECT SUM (valor) 
FROM cliente_transacoes;

SELECT SUM(valor), tipo_transacao_id 
FROM cliente_transacoes 
GROUP BY tipo_transacao_id;

SELECT SUM(valor), tipo_transacao_id 
FROM cliente_transacoes 
GROUP BY tipo_transacao_id 
ORDER BY tipo_transacao_id;

SELECT SUM(valor), tipo_transacao_id 
FROM cliente_transacoes 
GROUP BY tipo_transacao_id 
ORDER BY tipo_transacao_id DESC;

