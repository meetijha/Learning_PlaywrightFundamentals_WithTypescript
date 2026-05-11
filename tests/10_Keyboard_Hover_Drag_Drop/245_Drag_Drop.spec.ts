import {test, expect} from '@playwright/test';

test('Drag and Drop test',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    //One way to do it
    //await page.dragAndDrop('#column-a','#column-b');


    // Another way to do it
     const columnA = page.locator('#column-a');
     const columnB = page.locator('#column-b');

     await columnA.dragTo(columnB);

     expect(columnB).toHaveText('A');
     expect(columnA).toHaveText('B');
     
    await page.waitForTimeout(5000);


});