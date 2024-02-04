# https://8Lou.github.io/layout_to_React

### Getting Started with Create React App

### `npm i`
### `npm start`
### `npm test`
### `npm run build`

## Стэк технологий:
React; react-router-dom; 

## Сложности, с которыми столкнулась при написании приложения на React:

1. Не визуализировались фото для слайдера главного экрана.
Решение: 
В файле где лежит тег img, импорт изображения, а в src обращаение к этому импорту.

2. Проблема с подключением Switch.
Решение: 
`Switch` используется для рендеринга только первого `<Route>`. Сложная структура маршрутов и удаление `Switch` может привести к неправильной отрисовке компонентов. Маршруты будут рендериться последовательно.

-
`<React.StrictMode>` не должен использоваться в продакшене, он предназначен только для разработки и отладки. Заменен на HashRouter.

-
Написание тестов:
npm outdated
npm install --save-dev jest @testing-library/react
npm test

-
npm install selenium -webdriver
node test.js
В тестовом сценарии также можно использовать методы Selenium WebDriver: `findElement`, `sendKeys`, `click`, `getText`...