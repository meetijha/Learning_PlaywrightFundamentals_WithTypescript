// Go to https://simplemaps.com/svg/country/in 
// and print all the class names of the states and click on the UP.  

import{test,expect} from '@playwright/test';

test('Advance SVG Project',async({page})=>{

    await page.goto('https://simplemaps.com/svg/country/in');

    let allStates = await page.locator('path').all();
    for (const state of allStates) {
        const className = await state.getAttribute('class');
        if(className){ // checks if className is not null
            console.log(className);

         if(className.endsWith('UP')){ // checks if stateEnd ends with 'UP'
         await state.click();    
     }
    }
} 
    await page.waitForTimeout(5000);
});