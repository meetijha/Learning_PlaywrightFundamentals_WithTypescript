import {test,expect} from '@playwright/test';

test.describe('Javascript Alerts', () => {

    test.beforeEach(async({page}) => {
        await page.goto ('https://the-internet.herokuapp.com/javascript_alerts');
    });

    test('JS Alert Accept', async ({ page }) => {

        // xpath locator for button : //button[text()='Click for JS Alert']
        // css locator for button : button[onclick='jsAlert()']
        // getByText locator for button : page.getByText('Click for JS Alert')
        // using locator : page.locator('button', {hasText: 'Click for JS Alert'})

        page.once('dialog', async (dialog) => { // on is used to listen the event multiple time and once is used to listen the event only one time.
            console.log('Alert type:', dialog.type());
            console.log('Alert Message :',dialog.message());

            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('I am a JS Alert');

            await dialog.accept();
            // await dialog.dismiss(); // for dismissing the alert
        });
        await page.getByRole('button', { name: 'Click for JS Alert' }).click();
        
    });

    test('JS Confirm Accept', async ({ page }) => {

        page.once('dialog', async dialog => {
            console.log('Confirm type:', dialog.type());
            expect(dialog.type()).toBe('confirm');
            console.log('Confirm Message :',dialog.message());
            expect(dialog.message()).toBe('I am a JS Confirm');
            await dialog.accept();
            // await dialog.dismiss(); // for dismissing the alert
        })
        await page.locator('button', {hasText: 'Click for JS Confirm' }).click();
        await expect(page.locator('#result')).toHaveText('You clicked: Ok');
    });


    test('JS prompt Accept', async ({ page }) => {

        const inputText= 'Hello from Meeti';
        page.once('dialog', async dialog => {
            console.log('Prompt type:', dialog.type());
            console.log('Prompt Message :',dialog.message());
            expect (dialog.type()).toBe('prompt');
            expect (dialog.defaultValue()).toBe('');
            await dialog.accept(inputText);
            // await dialog.dismiss(); // for dismissing the prompt
        });

        await page.locator('button', {hasText: 'Click for JS Prompt' }).click();
        await expect(page.locator('#result')).toHaveText(`You entered: ${inputText}`);
    });
});