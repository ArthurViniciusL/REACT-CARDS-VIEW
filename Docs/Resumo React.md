## Link importantes

1. Documentação: https://react.dev/reference/react
2. Repositório dos estudo: https://github.com/ArthurViniciusL/REACT-JS-ESTUDOS.git
---
# Introdução.
O React é uma biblioteca Javascript utilizada para facilitar a criação de UI (user interface).
> 
> O React é baseado em componentes (similar ao Angular), isso possibilita que sejam  criados componentes encapsulados que gerenciam seu próprio estado e então, combine-os para criar UIs complexas.
> 
> Outra caracterisita do React é que ele não faz suposições sobre as outras tecnologias da stack do projeto, assim você pode desenvolver novos recursos com React sem reescrever o código existente.

Para ser possível escrever um código _React_ ele usa uma extensão de sintaxe _Javascript_ chamada _JSX_. Que possui uma declaração muito similar ao _HTML_.

- ### Um exemplo de componente:
> ![[Pasted image 20240213133534.png]]
----
# Criando um projeto React.
Atual este material está sendo escrito com base na versão 18 do React.

Para a criação de um projeto React vamos utilizar o _npx_ para executar o pacote _create-react-app_.

> Link do tutorial na documentação: https://pt-br.legacy.reactjs.org/docs/create-a-new-react-app.html

Existem duas possibilidades na forma de criar o projeto.
1. **Criar o projeto dentro de uma nova pasta.**
>```
>npx create-react-app nome-da-pasta
>```
![[Pasted image 20240213161126.png]]
2. **Criar o projeto dentro de uma pasta existente.**
> ```
> npx create-react-app .
> ```
> ![[Pasted image 20240213161321.png]]
> ![[Pasted image 20240213161357.png]]

- ### Verificando as dependências
	Para verificar as dependências instaladas no projeto _React_ devemos abrir o arquivo _package.json_.
	
	![[Pasted image 20240213162259.png]]

---
# Rodando um projeto React.
> ```
> npm run start
> ```
> ![[Pasted image 20240213165715.png]]
> ![[Pasted image 20240213165104.png]]

O nosso projeto _React_ está sendo executado através de _index.js_ e dentro dele obtemos a chamada do nosso componente (_App.js_).

![[Pasted image 20240213165526.png]]

---
# Fazendo a Build de um projeto React.
A etapa de _build_ do projeto é a etapa final do projeto para realizar o  envio do projeto para _deploy_.

>```
>npm run build
>```

O que acontece durante o processo de _build_ do _React_ é uma conversão do _JSX_ para o _HTML_ e _Javascript_.

![[Pasted image 20240213191320.png]]

O conteúdo que interessa para o _deploy_ agora está dentro da pasta _build_. 

![[Pasted image 20240213190519.png]]

---
# Componentes de funções e de classes.

## Funções.
A forma mais básica de criar componentes _React_ é através de uma _function_.
 ![[Pasted image 20240214122526.png]]
Mas funções podem ser um pouco limitas quando há a necessidade de manipular o estado (dados) dos componentes da página.

## Classes.
As classes permitem uma maior flexibilidade para quando se deseja manipular estados (_state_)e criar algum tipo de comportamento de interação com os componentes.

 ![[Pasted image 20240214122921.png]]
 Sempre que se desejar tratar uma classe como um componente o _{ Component }_ deve ser importado.

---
## Manipulando estado de componentes de classes.

![[Pasted image 20240214162109.png]]

No _React_ com _Javascript_ criar um construtor dentro de um componente (uma classe), é opcional, mas eu particularmente prefiro trabalhar com construtores.

_Props_ serve para informar que o componente filho vai herdar características do componentes pai.

_this.state_ é um atributo do _React_.

- Criando o método.
	Uma das características atuais do _React_ é ele não faz um _bind_ com os métodos criados dentro de uma classe. 
	
	Então isso precisa ser declarado de forma explicita no construtor.
	
	![[Pasted image 20240214163206.png]]
	
	
	Ou os métodos podem ser escritos com o padrão _arrow function_.
	
	![[Pasted image 20240214163303.png]]
- Chamando o método.
	Para esse exemplo primeiro vamos "importar" o atributo para ser renderizado.
	![[Pasted image 20240214164929.png]]
	
	Depois vamos atribuir um evento para disparar os nosso métodos.
	![[Pasted image 20240214165247.png]]
- Mudando o estado do componente.
	![[Pasted image 20240214162203.png]]
	![[Pasted image 20240214162226.png]]
	![[Pasted image 20240214162252.png]]

---
## State de Array e Objetos.
Algo muito de se trabalhar é o recebimento de dados através de um _JSON_, seja em um arquivo local ou obtido através de uma API (_lifecycle methods_).

Independe da origem, é importante exibir os dados na tela, e o _React_ facilita bastante esse processo.

- Criando um _State_ com alguns objetos.
	![[Pasted image 20240214171434.png]]
- Carregando os dados.
	![[Pasted image 20240214181302.png]]
	O método _map(...)_ é o responsável por ler os dados e um _map(...)_ sempre deve possuir um atributo _key{...}_.
	
	Os atributos estão sendo carregados dentro de uma **```<main></main>```** porque o _Rect_ exige que exista apenas um elemento de nível superior no retorno da função. 
	OBS: poderia ser uma **```<div>```** simples, mas aqui eu preferi usar uma melhor semântica _HTML_.
	
	O parâmetro _key={...}_ deve ser usado no elemento de nível superior porque dessa maneira o _React_ consegue identificar cada elemento gerado na hora de converter o _JSX_ para _HTML_. 
	![[Pasted image 20240214172020.png]]
---
## Lifecycle methods.
São um métodos pertencentes ao _React_ que servem para manipular os ciclos de vida de um componente, o que permite a execução de uma determinada mudança em um componente quando ele é renderizado, atualizado ou finalizado.

- Por exemplo, quando o componente é carregado.
	![[Pasted image 20240216171612.png]]
	![[Pasted image 20240216171322.png]]
	![[Pasted image 20240216171334.png]]
	- Mais lifecycle methods: https://pt-br.legacy.reactjs.org/docs/react-component.html
---
## Data Fetching.
Fazer um _fetching_ é um recurso do _Javascript_ para consumir o conteúdo de API externas.

Para exemplificar a parte de conteúdo eu vou usar uma ferramenta chamada **JSON Placeholder** (https://jsonplaceholder.typicode.com/). E para isso serão utilizadas duas API.
- /posts para a parte de conteúdo em texto.
```
	https://jsonplaceholder.typicode.com/posts
```
-  /photos para a parte de imagens atreladas ao texto.
```
	https://jsonplaceholder.typicode.com/photos
```
Também será feita uma estilização com CSS para compor um layout em formato de grid para compor o conteúdo.
	![[Pasted image 20240219193056.png]]
	![[Pasted image 20240219192923.png]]
	![[Pasted image 20240219193001.png]]

1. Fazendo as requisições.
	![[Pasted image 20240219193148.png]]

2. Unindo o texto e a imagem.
	![[Pasted image 20240219193308.png]]
3. Carregando o conteúdo. 
	![[Pasted image 20240219193500.png]]
4. Montando o componente.
	![[Pasted image 20240219193610.png]]
5. Resultado.
	![[Pasted image 20240219193720.png]]
---
# Props e organização dos componentes.

## 1. Organizando os componentes
Aqui nessa demonstração de refatoração vamos usar o padrão de organização _components_.

![[Pasted image 20240311131617.png]]

Outro padrão que está sendo aplicado é o uso da extensão _jsx_ para componentes do _React_ com javascript => _JSx_.

---
## 2.  Escrevendo o componente

![[Pasted image 20240311131834.png]]
Essa passagem de parâmetros para o componente são chamadas de _Prosp_.

Algo importante de ser observado é que a passagem de paramentos já foi feita aplicando um _destruct_. 

![[Pasted image 20240311132158.png]]
Agora que já importamos o componente no arquivo _App.js_ podemos fazer a sua chamada.

---
## 3. Usando props

![[Pasted image 20240311133126.png]]

- O construtor é chamado quando uma nova instância do componente é criada, ou seja, toda vez que a página carrega aquele componente ele chamado e atualizado.
- O parâmetro _props_ representa as propriedades passadas para o componente.
- **this.state** é responsável por inicializar o novo estado do componente.

---
## 4. Movendo funções
Outra coisa que também podemos fazer para limpar _App.js_ é mover algumas funções que trabalham com o nosso componente.

### 4.1. Essa é a implementação atual do métodos do nosso componente.

![[Pasted image 20240311145541.png]]

### 4.2. Após separar os organizar essa é a implementação.
Movemos todos os métodos para dentro de  _load-posrs.js_. e exportamos apenas a função que nós interessa: **loadPosts()**.

![[Pasted image 20240424232559.png]]

### 4.3. E dentro de _App.js_ fazemos a chamada do método.
![[Pasted image 20240311145646.png]]
![[Pasted image 20240311150441.png]]

---
## 5. Organizando o componente Posts.
### 5.1. No momento o nosso componente está assim:
![[Pasted image 20240316221802.png]]
Mas é interessante poder separar ele para que seja possível _componentizar_ ainda mais a aplicação.
### 5.2. O primeiro passo é criar a pasta do componente.
![[Pasted image 20240316222058.png]]
### 5.3. Agora vamos de fato criar o componente.
![[Pasted image 20240316222143.png]]

### 5.4. Em seguidas vamos chamar esse novo componente dentro de App.js.
![[Pasted image 20240316222401.png]]
![[Pasted image 20240316222424.png]]
![[Pasted image 20240316222456.png]]

---
# Paginação do componente.

## 1. Alterando o componente App.js para Home.jsx:

![[Pasted image 20240425165309.png]]
## 2. Implementando o componente Home.
O componente será responsável por exibir o conteúdo da nossa página principal.
![[Pasted image 20240425165521.png]]
- Obs: Eu optei por remover o construtor do classe (componente), porque reparei que não fazia sentido implementa-lo aqui, uma vez que eu não estava utilizando nenhuma _props_.
## 3. Chamando ele no arquivo index.js.

![[Pasted image 20240425165553.png]]

## 4. Limitando a quantidade de posts.
### 4.1. Modificando o estado do componente.
![[Pasted image 20240425175150.png]]
### 4.2. Setando o estado de incio e fim.
![[Pasted image 20240425175244.png]]

### 4.3. Implementando o componente que carrega os posts.
![[Pasted image 20240425185333.png]]
![[Pasted image 20240425185355.png]]
### 4.4. Implementando a função de carregamento.
![[Pasted image 20240425185450.png]]

### 4.5. Organizando os estilos.
![[Pasted image 20240506155922.png]]
![[Pasted image 20240506170137.png]]
![[Pasted image 20240506170152.png]]

### 4.6. Implementando o disabled do buttom.
Não é interessante manter o componente buttom ativo quando não houver mais posts para serem exibidos, então vamos implementar a seguinte lógica: 
1. Criar a prop:
	![[Pasted image 20240506170408.png]]
	
2. Implementar a lógica de negócio:
	![[Pasted image 20240506170322.png]]
---
# Campo de busca.
## 1. Adicionando a propriedade ao state:
![[Pasted image 20240507165216.png]]
## 2. Criando o componente de input:
![[Pasted image 20240507165249.png]]
![[Pasted image 20240507165305.png]]
## 3. Chamando o componente:
![[Pasted image 20240507165505.png]]
## 4. Implementando a regra de negócio:
![[Pasted image 20240507165601.png]]
## 5. Exibindo o componente:
![[Pasted image 20240507165712.png]]