---
title: HTML
date: '2014-07-22 16:25:06 -0700'
---

# HTML

A estrutura básica de uma página HTML pode ser vista na Listagem 1, na qual podemos ver as principais tags que são necessárias para que o documento seja corretamente interpretado pelos browsers.

![Exemplo](https://lh3.googleusercontent.com/G_TVZonhdlU4_7J9msoEN6t5UYWRI0EjDawHkbEWpqXM1wZGcpCLlwuIUd0JRK5q1z80yN8mFrSZDOPrczMT9TPZLvvemEsjqRIuYBsk)

**Linha 1:** A instrução DOCTYPE deve ser sempre a primeira a aparecer em uma página HTML e indica para o browser qual versão da linguagem está sendo usada. Nesse caso, estamos trabalhando com a HTML5, versão na qual a declaração do DOCTYPE é bastante simples, como podemos ver na listagem;

**Linhas 2 e 10:** Abertura e fechamento da tag html, que delimita o documento. Sendo assim, todas as demais tags da página devem estar nesse espaço;

**Linhas 3 e 6:** Abertura e fechamento da tag head, que define o cabeçalho do documento. O conteúdo neste espaço não é visível no browser, mas contém instruções sobre seu conteúdo e comportamento. Dentro dessa tag, por exemplo, podem ser inseridas folhas de estilo e scripts;

**Linha 4:** A tag meta, nesse caso, especifica qual conjunto de caracteres \(character set ou charset\) será usado para renderizar o texto da página. O UTF-8 contém todos os caracteres dos padrões Unicode e ASCII, sendo, portanto, o mais utilizado em páginas web.

**Linha 5:** A tag title define o título da página, aquele que aparece na janela/aba do navegador;

**Linhas 7 e 9:** Abertura e fechamento da tag body, marcando o espaço no qual deve estar contido o conteúdo visual da página. As demais tags que representam texto, botões, etc. devem ser adicionadas nesse intervalo;

**Linha 8:** Nessa linha podemos observar a sintaxe para adição de comentários em HTML. Esse trecho não é renderizado pelo browser.

**Tags do HTML**

Um documento HTML é composto por tags, as quais possuem um nome e aparecem entre os sinais `<` e `>` , por exemplo, em `<html>` e `<head>` . Naquele exemplo também vimos que algumas tags precisam ser abertas e fechadas, como em `<body></body>`.Nesse caso, a tag de fechamento deve conter a barra `/` antes do nome. Outras, porém, não precisam ser fechadas, como a tag `<meta>`. Nesses casos, a adição da barra / no final da própria tag é opcional.

**Títulos do HTML**

Títulos são normalmente utilizados para identificar páginas e seções, e possuem aparência diferenciada do restante do texto. No HTML há seis níveis de títulos que podem ser utilizados por meio das tags h1, h2, h3, h4, h5 e h6, sendo h1 o maior/mais relevante e h6 o menor/menos relevante.

![exemplo](https://lh5.googleusercontent.com/s5QhXEfB1PBK8AtW8GT0-GPhWdB_aLGfU_eSpVO9393bGKIgksGPXu-BILLvYB-ffdd5_hERkLoddKBkLOfZOt-HG6dbUWLebVFG5qnal-BKbHqcPwI9cPTOgOjUQy0Va7O-ZqlC)

![exemplo2](https://lh3.googleusercontent.com/MFExgd9esIJwcXYcVP0KtGalqAFVVzVclo1wZ8M4-YaMC2PKLtqXDyxrnS_pLbUWYcYDnN7JrBoMQPUP6Rft6bVne3FY_HBXS6hEQDcRIyMzF3aUBLKPfmt6DD9FhbeHLHHea_GZ)

Valendo lembrar que essas tags servem apenas para atribuir a importância do título \(título, subtítulo, etc\) e não apenas para regular o tamanho. O tamanho poderá ser regulado no arquivo do CSS.

O que resultaria em:

![exemplo3](https://lh4.googleusercontent.com/PuQ3MRZGsb_4osoPC5EAHKwv24ggO7d-GgXN-TuP2GKk0y-Uzpr0rMQo_Vr_cq_CizilALA3h-0LEgHlUXpt_2_VIPPBRGf5jA_JO-otz0fUC-eePHezrGWwYAGs1fmg792grX3Y)

**Parágrafos no HTML**

Parágrafos de texto são gerados na HTML por meio das tags `<p> </p>`. Esse é um exemplo de tag cuja disposição na tela se dá em forma de bloco, ou seja, um parágrafo é posto sempre abaixo do outro.

![Exemplo](https://lh4.googleusercontent.com/0eXLe5AmjjtRH873iTVPmt-itU1nqzxOzJ2XRcisBpltCHTZV-b2HR1qnGlU2GubTMvGi_AsDte36WRKhsn0VmgcmXCnNGJWPKJ1fxku)

Que resultará em:

![exemplo2](https://lh5.googleusercontent.com/Euju0vKOOjRB4Uy1L4e2dlvm7TBiS_pKNoQBgXgczsDgAkNUZnd91b1niLBvIuE50E6yHU61nQXZvlXpFcTPHrhQxy-nW4KVIQAmALs)

**Imagens no HTML**

A inserção de imagens em uma página HTML pode ser feita por meio da tag img, que recebe no atributo src o endereço do arquivo a ser carregado. Além desse, outros dois atributos importantes são o alt, que indica um texto alternativo que será exibido caso o arquivo não possa ser carregado, e title, que indica o texto que aparecerá como tooltip ao passar o mouse sobre a figura.

![exemplo1](https://lh3.googleusercontent.com/OwHcxhD9tYzLx5kEZWkA2z6GjFgDreyX1iKJCSJeHieAV9XcSXj_ugdRLd8hE4JUC6oYxp0DB4TcQIAOrulu1bsNygwK6jd0sKqkHctbzY1_XxdR_mHDHTA-M7d1bTxK_YZUnH99)

O código a seguir insere uma imagem a partir do arquivo perfil.png, localizado na mesma pasta do arquivo HTML, e uma tag img apontando para um arquivo inexistente. Observe na Figura 3 que enquanto a primeira aparece corretamente, a segunda é exibida com um ícone de erro o texto alternativo que informamos. Note, ainda, que sobre a primeira figura está sendo exibido o tooltip definido no atributo title.

Resultado:

![resultadoExemplo](https://lh4.googleusercontent.com/Lr1joEENcyXHEFly7o9DC4lOyxNZlwrkNmzWrMornDlHXYoGaU03675kmkeoOfqRggK8vo6TltVfoAe-2LTN6BNyyYEaXqZPegI0-rMbTgKAbBTX_pDpQ1SYiOeDYO7yAslTzuaT)

**Links no HTML**

Links são normalmente utilizados para direcionar o usuário para outras páginas, ou para outras partes da mesma página. Nos dois casos, utilizamos a tag a, que possui o atributo href no qual indicamos o destino daquele link. O seguinte código mostra como adicionar um link para outra página, neste caso, indicada pelo arquivo pagina2.html.

![exemplo1](https://lh4.googleusercontent.com/m1IUaE_gE8cpC8qwNQVTjYXt48ADnPyW0L2wwIsI5OWHjsCw4UfMv-pHVK1Zy6daFUrc2Z8BvaOOGd6h0gHXmzSQu10ihbPbCzbN7lU)

Já o código abaixo mostra como adicionar um link para um elemento na mesma página. Nesse caso, ao clicar no link o browser mudará o foco para o elemento que possui o atributo id igual àquele indicado no href.

![exemplo2](https://lh5.googleusercontent.com/FjRGywKx7cgi7N-KsZzKayy49NmVljTFAjkCqevhEQ5wCnkg6o-N6oN7DJsEbh7cwP_93EDECVnHV3ZT7udtGI5zGXjxb8D4yUYqP2ES)

**Tabelas no HTML**

Tabelas são elementos utilizados com frequência para exibir dados de forma organizada em linhas e colunas. No HTML, elas são formadas por três tags básicas: table, para delimitar a tabela; tr, para indicar as linhas; e td para formar as colunas.

![exemplo3](https://lh3.googleusercontent.com/QDkhXriQsRgzYqgVjQALuEjzgYurYTBIvGwVrxpMqvSUQumJeSVIVcsJv1f6cvwlsh9QrzNUtWSQxpGVJA5kOmZ_hBJREhsJ_i5fcDwvV4-7_rWjJ7oogR9YG1WwRQSm2hYu4lX3)

Este seria o resultado do código:

![resultadoExemplo](https://lh4.googleusercontent.com/IvSTYxlqvfgBNtKlkf_v9bncODm_BoVatxLTiX2DNqutxMVjgOfrg-pKRaTAOYmfpQjMwTeCL2odWdg48HjS-OadGGMcbsdMW1shNX2uq-oGJizYMl5u2f6CsyvsIBTsedtDSKdS)

Existem ainda outras três tags utilizadas para delimitar, de forma mais organizada, as partes da tabela: thead para o cabeçalho; tbody para o corpo; e tfoot para o rodapé.

Exemplo de tabela mais complexa, utilizando todas as tags:

![exemplo](https://lh3.googleusercontent.com/zLp045C9bUD_U70E90GHB1JFgASOf3iw-qHrmpB4qdWNTko14BgB1WOEPCESGn_1yJ4Eqxgq2flhUBBam0nrtJ04ic2kdp-wZ_VD-PnF)

Observação: por padrão, as tabelas não possuem bordas, isto pode ser adicionado por meio de CSS. Então a tabela ficará assim:

![exemplo2](https://lh6.googleusercontent.com/tuWiwguqGziettPUN-btUM6oSv6Ohre7CFUwpsEUZpREzb5F8mnEM0GxXY-Q7mjIeR2i2wI9z1Lvpmk0aTl__RpPgkIiw9E_k-lB00I)

**Formulários no HTML**

Formulários são normalmente utilizados para integrar a página HTML a algum processamento no lado servidor. Nesses casos, a página envia dados para uma aplicação \(Java, PHP, .NET, etc\), que os recebe, trata e retorna algum resultado.

No HTML, geralmente usamos a tag form para delimitar a área na qual se encontram os campos a serem preenchidos pelo usuário, a fim de serem enviados para processamento no back-end \(enquanto a página HTML é chamada de front-end da aplicação\).

A figura mostra um exemplo de formulário com vários tipos de campos para entrada de dados e um botão para submetê-los ao servidor.

![exemplo](https://lh6.googleusercontent.com/PnVlPP27-bhGK6jxQKnfi520bZpb4qlZKbTV96rssGqzLZXezLb_DtTndcc4fqhxpnfHcaS0quJvbg9k340vlJjo4L837WeHNKmliHZJ)

Como ficaria no browser:

![resultadoExemplo](https://lh5.googleusercontent.com/WgTqYx_Ch5EeAI57MBpQolYyeuu80smhgcgu6rLgNshH7VjlhlPjleCyFaDQWsr-aEhqneXDVzw_kQbk07wurOHTKp41Fx2AEfvOsaM)

Formatação de texto As tags de formatação de texto ajudam a destacar trechos da parte escrita da página, seja para fins de SEO ou por requisitos do conteúdo. Formatações como negrito e itálico podem ser aplicadas com facilidade utilizando as várias tags disponíveis para esse fim:

* **b** e **strong** para **negrito/texto** forte;
* **i** e **em** para **itálico/ênfase**;
* **small** para textos menores que o padrão;
* **mark** para texto destacado.

![exemplo1](https://lh6.googleusercontent.com/HrU-C2Kjw4AQW8cBeAmSuwTJXHUTAAF0cKXfpsmDjToIVvMF8_-6xxQrwI_92LyaRKspHH0qc9PFGRL5A84e0xoawaBcpmlnoHQXWV47Eye12oJQHFENJDIHL7RZznwxhfEftfty)

![exemplo2](https://lh3.googleusercontent.com/wzDF0Yuo6IW1JGooN5Euq1l9YuowZEQfEf8Inhfem4JrNZL07i7zPyVFGTCjztqV4PI1EeIb0C-ju5R7fK57xqW7yB_wEKTsrZnXEEnTnlSlDXrgZ31A4LpPML8V5FM2SXuffKyV)

**Div e Span no HTML**

As tags div e span são duas das mais utilizadas no HTML, com objetivos distintos, porém com grande importância para a composição do layout das páginas e formatação do texto.

As divs são normalmente utilizados para representarem containers para outros elementos, agrupando-os visualmente dentro de um bloco que pode conter dimensões e posição definidas. Por padrão, uma div não possui aparência características visuais definidas, isso precisa ser feito via CSS ao atribuir bordas, cores, etc. Sua principal característica, no entanto, é que essa tag representa um elemento do tipo bloco, ou seja, que quando adicionado na página, automaticamente gera uma nova linha no layout \(semelhante a um parágrafo\), ao invés de ser alocado lateralmente nos demais componentes.

O código a seguir demonstra um uso básico das divs:

![exemplo](https://lh3.googleusercontent.com/q6BVTd8PaYB00Orm18V91BJurkMxwS_TSijtcLiFe9ZSZLXACBk053e1gxsOn5SIxkfPmw3gIoK4H7t9zweNcY9qgmLAptGZHOSPn8cRlGuxUTjTogI30JxDWyTa-1BY7iXHbGPf)

Perceba no resultado da imagem que, enquanto os dois primeiros inputs são dispostos lateralmente, os dois últimos aparecem um abaixo do outro, uma vez que estão dentro de divs diferentes.

![exemploResultado](https://lh4.googleusercontent.com/KSNR8Oo9Y1OJrZn6CPzk-n8775HyAgWdPeJenVUx565PSc12MmB_UCKY6LtEASSN1jNN_od0Z3UFH5fWr40QXeWbqO57TNLzeisFeKA)

Já a tag span é um elemento do tipo inline, ou seja, quando adicionado na página, ele é inserido lateralmente após os demais componentes, diferente das divs que são elementos do tipo bloco.

Elementos span, por padrão, também não possuem nenhuma característica visual definida, isso precisa ser feito via CSS para destacar ou aplicar uma formatação especial para um certo trecho do texto. Por exemplo, o código abaixo demonstra o uso do span em dois casos. No primeiro, a tag não conta com nenhum atributo adicional; no segundo, adicionamos a ela uma aparência diferenciada via CSS.

O resultado pode ser visto na imagem abaixo e, como esperado, no primeiro caso não conseguimos perceber nenhuma diferença visual devido ao uso do span.

![imagem](https://lh4.googleusercontent.com/y8CLWU3dNWYrA1fz0U4sAF_ZBkU9g5iO5g3MnQMiMomv5LfQeiMiB7AZZ-IKgDUi7nXN0fPFynP5LGH8eAMkWfNoT9qz-02y2JIG4quxgFz48Off9VUC4LHchl2M_mtjvyuLtHMF)

## EXERCÍCIOS DE FIXAÇÃO

Baseado no material desta apostila realize cada uma das tarefas a seguir:

Use as imagens em anexo nesta apostila como exemplo para recriar uma página que contenha:

* Título e subtítulo;
* Um parágrafo de texto;
* Uma imagem de sua preferência;
* Crie uma tabela com os seguintes dados:

| Nome | E-mail | Idade |
| :--- | :--- | :--- |
| João | joao@gmail.com | 19 |
| Ana Júlia | anajulia@outlook.com | 23 |
| Cláudia | claudia@hotmail.com | 29 |

* Crie um formulário com input para preencher nome e cidade;
* Crie um radio button com opções de gênero;
* Por fim, crie um botão do tipo “submit” no final do formulário.

Para um resultado melhor, poderá consultar a apostila de CSS e utilizar junto aos exercícios de HTML.

