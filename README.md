Treinando Git

## Configurar o Babel - Transpilar o código

## Instala as Libs importantes:
    yarn add @babel/core @babel/cli @babel/preset-env -D

    yarn add @babel/preset-react -D

## Adicionar um sricpt para transpilar o código:
    yarn babel src -d build

## Add a lib:
    yarn add react react-dom



## Configurar o Webpack - Geração do Bundle
    yarn add webpack webpack-cli -D

## Configurar o arquivo webpack.config.js
    -> O arquivo que irá chamar será sempre o que tiver ReactDOM.

## Adicionar 
    yarn add html-webpack-plugin -D
    yarn add clean-webpack-plugin -D

## Entendendo e configurando Loaders
    Adicionar no arquivo de config do Webpack o module com seus rules e use.


## Criando um servidor local de desenvolvimento
 
    yarn add webpack-dev-server -D


## Criando nosso primeiro Componente

    Temos duas formas de criar componentes:
    Function Component ou Class Component




## React Fragment
## Expressões JS no JSX
## O que são props?
## Prop Children
## Definindo tipos para as props
    Tipagem das propriedades.
    yarn add prop-types

## Renderizando listas
## Trabalhando com States
## Funções de Callback via Props
## Renderização condicional
## Trabalhando com a Context API
## Inline styles


## Trabalhando com arquivos css
yarn add css-loader style-loader -D

## CSS Modules
## SASS e SASS Modules
## Classes Dinâmicas

## Introdução ao Styled Components
Scoped por padrão
Legibilidade
React (Web) e React Native (mobile)

yarn add styled-components

## Criando Styled Components

## Estilizando Componentes com Styled
É possível importar um styled-component dentro de outro, 
para então sobreescrever ele.

## Trabalhando com props em Styled Components

## Definindo vários estilos dentro da mesma função

## O que é Theming?
Basicamente definir uma parada para tudo

## Implementando Theming com Styled COmponents

## Utilizando theme no restante dos componentes

## Implementando a troca de temas

## Usando o useTheme



## useMemo é um hook para memorizar valores, e não que buscar ele toda vez que o componente é renderizado. Ele fica observando se a variável em questão foi alterado em algo.


## useTheme é usado para conseguir acessar o tema dentro do componente, para questões onde haja estilzações inline.


## Manipulando o lifecycle com o useEffect
useEffect tem tres comportamentos aparentes
Executa a cada novo render do componente
Executa apenas uma vez depois do mount. Precisa passar a array vazia, para não "observar" nada.
Executa sempre que um state, prop, ou definida no corpo do componente mudar. Array de dependências 

# HOOKS não devem estar dentro de condicionais

## Diferenças entre o useEffect e o useLayoutEffect
useLayoutEffect trava a renderizaçãoa té finalizar o que deveria ser feito no hook.
