Minhas anotações realizadas durante a Next Level Week Return de 05/2022 

<https://www.npmjs.com/>

# NLW Return

## web

### criar projeto com vite
> npm create vite@latest

vite ferramenta que faz o navegador entender o javascript mais moderno
vite converte o codigo para um formato para rodar em todos os navegadores
vite semelhante a webpack

react Type Script
### tailwind 
<https://tailwindcss.com/docs/installation>
> npx tailwindcss init -p

#### tailwind forms
<https://github.com/tailwindlabs/tailwindcss-forms>
> npm install -D @tailwindcss/forms

#### tailwind scrollbar
<https://www.npmjs.com/package/tailwind-scrollbar>
> npm install --save-dev tailwind-scrollbar

### phosphorIcons

<https://github.com/phosphor-icons/phosphor-home>

> npm install phosphor-react

### headless ui

Acessibilidade

<https://headlessui.dev/>

> npm install @headlessui/react

### html2canvas

usado para screenshot

> npm install html2canvas

## server

add package.json
> npm init -y

adicionar dependencias 
typescript
tipos do node 
ts-node-dev - similar ao nodemon só que com typescript sempre que houver alteração no codigo reinicia servidor(live reload)
> npm i typescript @types/node ts-node-dev -O

criar arquivo ts config
 > npx tsc --init

 converter typeScript em javascript
 > npx tsc

 ### express
microframework para criar rotas
> npm i express

adicionar suporte a typescript
> npm i -D @types/express

### SQLite

banco de dados salva dados em arquivos

### Prisma
<https://www.prisma.io/>

é uma ORM facilita trabalhar com banco de dados, ao inves de escrever SQL usa sintaxe do ORM(Prisma)
> npm i prisma -D
> npm i @prisma/client
> npx prisma init

criar banco com o prisma
> npx prisma migrate dev
> npx prisma migrate deploy

cria uma janela no navegador para transitar no banco de dados
> npx prisma studio

### nodemailer

Biblioteca para envio de emails

 > npm install nodemailer

 add typescript
 > npm install @types/nodemailer

 ### mailtrap

 <https://mailtrap.io/>

 serviço para testar envio de emails

 ### jest

 taskrunner usado em testes unitarios
 > npm install jest -D

inicializar configuração
> npx jest --init

usar typeScript com jest
> npm install ts-node -D

instalar tipagems
 > npm i @types/jest -D

### swc 

<https://swc.rs/>

copilador javaScript typeScript

utilizar com jest
> npm i -D jest @swc/jest

### cors

adiciona segurança definindo quais endereços podem acessar a API

> npm i cors

> npm i @types/ cors -D

## mobile

### expo

criar projeto

>  expo init mobile

<https://efficient-sloth-d85.notion.site/Instalando-Expo-cc5bfac8f19a41e394889e885355f261>

instalar expo cli globalmente

> npm install -g expo-cli

> npm start # you can open iOS, Android, or web from here, or run them directly with the commands below.
> npm run ios # requires an iOS device or macOS for access to an iOS simulator
> npm run android
> npm run web

### fonte

instalar fonte com o expo

> expo install expo-font @expo-google-fonts/inter

### expo loading

verificar se necessita de loading

> expo install expo-app-loading

### phospohr icons

biblioteca de icones

> npm install --save phosphor-react-native    

### biblioteca para svg

biblioteca para adicionar suporte svg nos apps

> expo install react-native-svg

### iphone helper

>  npm install react-native-iphone-x-helper

### bottom sheet

https://gorhom.github.io/react-native-bottom-sheet/

> expo install @gorhom/bottom-sheet@^4

bibliotecas de animação e gestos que o bottom sheet precisa

#### reanimated

> expo install react-native-reanimated

#### gesture handles

> expo install react-native-gesture-handler

### react native view shot

biblioteca para tirar foto da tela

> expo install react-native-view-shot

### axios

biblioteca para lidar com requisições http

> npm install axios

### expo file system

biblioteca de conversão de arquivos

> expo install expo-file-system
