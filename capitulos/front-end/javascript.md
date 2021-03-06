---
title: JavaScript
date: '2014-07-22 16:25:06 -0700'
---

# JavaScript

**Para que Serve:**

O JavaScript \(JS\) é uma linguagem de programação utilizada principalmente em páginas web. Com o JS, você pode mostrar mensagens e outras informações interessantes, fazer verificações ou mudar dinamicamente a apresentação visual das páginas, conforme o comportamento que você deseja que sua página \(ou aplicação\) possua.

**Inserindo o código JavaScript na página HTML**

Para inserir o código direto na estrutura do HTML, utilizamos as tags  e 

exemplo:

```html
<script type="text/javascript">
    //código JavaScript
</script>
```

**Inserindo código JavaScript interno no HTML**

O código JavaScript também pode ser mantido em um arquivo separado do HTML.

exemplo:

```html
 <!DOCTYPE html>
 <html>
   <head>
     <script type="text/javascript" src="meuArquivo.js"></script>
   </head>
   <body>
   </body>
 </html>
```

**Usando variáveis no JavaScript**

Essa linguagem possui tipagem dinâmica, ou seja, não é necessário definir o tipo das variáveis ao declará-las, para isso basta usar a palavra reservada **var** ou **let** que é basicamente, uma nova forma de declarar variáveis no JavaScript, em que todas as chaves criam um novo escopo para as variáveis; isso é, ele funciona da mesma forma que o var já funciona, porém as variáveis que estão dentro de qualquer chaves {…} não são acessíveis fora delas.

**Funções**

Para criar funções, utilizamos a palavra reservada function.

exemplo:

```javascript
 function minhaFuncao(p1, p2) {
   return p1 + p2;
   //a função retorna o produto p1 e p2
 }
```

## EXERCÍCIOS DE FIXAÇÃO

* Faça um programa que leia três notas de um aluno e diga se ele está aprovado ou reprovado.

Aprovado: se a média das notas for maior ou igual a 5.

Reprovado: se a média das notas for menor que 5.

A média deve ser calculada somando as três notas e dividindo o resultado por 3.

Faça o mesmo programa mostrar qual foi a maior nota do aluno. Faça o programa também mostrar qual foi a sua menor nota.

* Crie um programa que leia a idade e diga se o voto da pessoa é facultativo, obrigatório ou proibido.

  Lembrando que:

  Facultativo para adolescentes entre 16 e 17 anos. Obrigatório para adultos de 18 até 70 anos de idade. Após os 70 o voto se torna facultativo de novo. Menores de 16 anos: proibido.

