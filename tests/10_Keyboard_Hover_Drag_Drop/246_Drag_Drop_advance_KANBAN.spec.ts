import {test, expect} from '@playwright/test';

test('Drag and Drop test',async({page})=>{

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');

    //One way to do it
    let firstCard= page.locator('#card-write-spec');
    let targetColumn = page.getByTestId('col-in-progress');

    await firstCard.dragTo(targetColumn);

  await page.waitForTimeout(5000);
   

});