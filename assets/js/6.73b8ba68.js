(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{311:function(a,e,s){"use strict";s.r(e);var t=s(46),o=Object(t.a)({},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"hibernate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hibernate","aria-hidden":"true"}},[a._v("#")]),a._v(" Hibernate")]),a._v(" "),s("p",[s("strong",[a._v("O que é?")])]),a._v(" "),s("p",[a._v("O Hibernate é um framework utilizado para mapear as classes java que são suas entidades de negócio para tabelas no banco relacional, economizando tempo.")]),a._v(" "),s("p",[s("strong",[a._v("Bibliotecas do Hibernate e JPA")])]),a._v(" "),s("p",[a._v("Vamos usar o JPA com Hibernate, ou seja, precisamos baixar os JARs no site do Hibernate. O site oficial do Hibernate é o www.hibernate.org, onde você baixa a última versão na seção ORM e Download.")]),a._v(" "),s("p",[a._v("Com o ZIP baixado em mãos, vamos descompactar o arquivo. Dessa pasta vamos usar todos os JARs obrigatórios (required). Não podemos esquecer o JAR da especificação JPA que se encontra na pasta jpa.")]),a._v(" "),s("p",[a._v("Para usar o Hibernate e JPA no seu projeto é necessário colocar todos esses JARs no classpath.")]),a._v(" "),s("p",[a._v("O Hibernate vai gerar o código SQL para qualquer banco de dados. Continuaremos utilizando o banco MySQL, portanto também precisamos o arquivo .jar correspondente ao driver JDBC.")]),a._v(" "),s("p",[s("strong",[a._v("Mapeando uma classe Tarefa para nosso Banco de Dados")])]),a._v(" "),s("p",[a._v("Para isso, continuaremos utilizando a classe que representa uma tarefa:")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" br"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("caelum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("tarefas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("modelo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Tarefa")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" Long id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" String descricao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" finalizado"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" Calendar dataFinalizacao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Criamos os getters e setters para manipular o objeto, mas fique atento que só devemos usar esses métodos se realmente houver necessidade.")]),a._v(" "),s("p",[a._v('Essa é uma classe como qualquer outra que aprendemos a escrever em Java. Precisamos configurar o Hibernate para que ele saiba da existência dessa classe e, desta forma, saiba que deve inserir uma linha na tabela Tarefa toda vez que for requisitado que um objeto desse tipo seja salvo. Em vez de usarmos o termo "configurar", falamos em mapear uma classe a tabela.')]),a._v(" "),s("p",[a._v("Para mapear a classe Tarefa, basta adicionar algumas poucas anotações em nosso código. Anotação é um recurso do Java que permite inserir metadados em relação a nossa classe, atributos e métodos. Essas anotações depois poderão ser lidas por frameworks e bibliotecas, para que eles tomem decisões baseadas nessas pequenas configurações.")]),a._v(" "),s("p",[a._v("Para essa nossa classe em particular, precisamos de apenas quatro anotações:")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Entity")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Tarefa")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Id")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@GeneratedValue")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" Long id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" String descricao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" Boolean finalizado"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Temporal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("TemporalType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DATE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" Calendar dataFinalizacao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// métodos...")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("code",[a._v("@Entity")]),a._v(' indica que objetos dessa classe se tornem "persistivel" no banco de dados.')]),a._v(" "),s("p",[s("code",[a._v("@Id")]),a._v(" indica que o atributo id é nossa chave primária (você precisa ter uma chave primária em toda entidade) e @GeneratedValue diz que queremos que esta chave seja populada pelo banco (isto é, que seja usado um auto increment ou sequence, dependendo do banco de dados).")]),a._v(" "),s("p",[a._v("Com "),s("code",[a._v("@Temporal")]),a._v(" configuramos como mapear um Calendar para o banco, aqui usamos apenas a data (sem hora), mas poderíamos ter usado apenas a hora (TemporalType.TIME) ou timestamp (TemporalType.TIMESTAMP). Essas anotações precisam dos devidos imports, e pertencem ao pacote javax.persistence.")]),a._v(" "),s("p",[a._v("Mas em que tabela essa classe será gravada? Em quais colunas? Que tipo de coluna? Na ausência de configurações mais específicas, o Hibernate vai usar convenções: a classe Tarefa será gravada na tabela de nome também Tarefa, e o atributo descricao em uma coluna de nome descricao também!")]),a._v(" "),s("p",[a._v("Se quisermos configurações diferentes das convenções, basta usarmos outras anotações, que são completamente opcionais. Por exemplo, para mapear o atributo dataFinalizacao numa coluna chamada data_finalizado faríamos:")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Column")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"data_finalizado"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" nullable "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" Calendar dataFinalizacao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Para usar uma tabela com o nome tarefas:")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Entity")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Table")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tarefas"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Tarefa")]),a._v("\n")])])]),s("h2",{attrs:{id:"exercicios-de-fixacao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exercicios-de-fixacao","aria-hidden":"true"}},[a._v("#")]),a._v(" EXERCÍCIOS DE FIXAÇÃO")]),a._v(" "),s("h3",{attrs:{id:"primeiros-passos-para-mapear-uma-tabela-simples-com-hibernate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#primeiros-passos-para-mapear-uma-tabela-simples-com-hibernate","aria-hidden":"true"}},[a._v("#")]),a._v(" Primeiros passos para mapear uma tabela simples com hibernate")]),a._v(" "),s("p",[a._v("Imagine que temos o hibernate configurado, o próximo passo é realizar o mapeamento das classes ás tabelas do banco de dados.")]),a._v(" "),s("ol",[s("li",[a._v('Qual é a anotação que usaremos para indicar que a classe será utilizada como uma entidade, ou seja, que os dados serão "persistiveis" pelo banco de dados?')]),a._v(" "),s("li",[a._v("Qual anotação é utilizada para indicar o identificador único da tabela?")]),a._v(" "),s("li",[a._v("Qual a notação que informa que queremos que esta chave seja populada pelo banco?")])])])},[],!1,null,null,null);e.default=o.exports}}]);