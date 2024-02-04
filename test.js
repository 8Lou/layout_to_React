// Импортируем необходимые модули
const {Builder, By, Key, until} = require('selenium-webdriver');

// Создаем асинхронную функцию для выполнения тестового сценария
async function example() {
    // Создаем экземпляр веб-драйвера
    let driver = await new Builder().forBrowser('chrome').build();
    
    // Открываем Google и выполняем поиск
    await driver.get('https://8lou.github.io/layout_to_React/');
    await driver.findElement(By.name('q')).sendKeys('Selenium WebDriver', Key.RETURN);
    
    // Ждем появления результатов поиска
    await driver.wait(until.titleContains('Selenium WebDriver'), 1000);
    
    // await driver.findElement(By.id('someElementId')).sendKeys('some input');
    // await driver.findElement(By.id('submitButton')).click();


    // Закрываем браузер
    await driver.quit();
}

// Вызываем тестовую функцию
example();