import{test,expect} from '@playwright/test';    

test('Keyboard event test',async({page})=>{

    await page.goto('https://keycode.info');

    await page.keyboard.press('A');
    await page.screenshot({path : 'A.png'});
    
    await page.keyboard.press('ArrowLeft');
    await page.screenshot({path : 'ArrowLeft.png'});

    await page.keyboard.press('Shift+O');
    await page.screenshot({path : 'O.png'});


    await page.waitForTimeout(5000);

});