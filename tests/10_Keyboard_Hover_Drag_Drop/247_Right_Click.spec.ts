import{test,expect} from '@playwright/test';

test('Right click test',async({page})=>{

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');

    // Right click on the box
    await page.locator('span.right-click-target').first().click({button:'right'});
    await page.getByText('Copy', {exact:true}).first().click();
    

    // Right on all context menu items and print the output

    const allOptions :string[] = await page.locator('span.right-click-target').allInnerTexts();
    console.log("In form of array",allOptions);

    // Right click on all context menu items and print the output
    for(let i=0; i<allOptions.length; i++){
        await page.locator('span.right-click-target').nth(i).click({button:'right'});
        await page.getByText('Edit', {exact:true}).first().click();

        // Get the output for each right click action
        const output = await page.locator('#output').innerText();
        console.log(`Output for ${allOptions[i]}: ${output}`);

        // Verify the output contains the expected text - Edit
        expect(output).toContain('Edit'); 
        
    }
    await page.waitForTimeout(5000);

});