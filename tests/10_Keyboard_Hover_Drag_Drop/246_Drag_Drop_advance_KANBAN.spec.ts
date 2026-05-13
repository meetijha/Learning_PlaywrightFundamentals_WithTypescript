import {test, expect} from '@playwright/test';

test('Drag and Drop test',async({page})=>{

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');

    //One way to do it
    let firstCard= page.locator('#card-write-spec');
    let targetColumn = page.getByTestId('col-in-progress');

    await firstCard.dragTo(targetColumn);

     // Manual mouse path — for finicky DnD libraries

    let source = page.locator('#card-write-spec');
    const sBox = (await source.boundingBox())!;

    let target = page.locator('[data-status="review"]');
    const tBox = (await target.boundingBox())!;


    await page.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(tBox.x + tBox.width / 2, tBox.y + tBox.height / 2, { steps: 10 });
    await page.mouse.up();

  await page.waitForTimeout(5000);
   

});