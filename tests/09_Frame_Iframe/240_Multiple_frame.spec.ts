import { test, expect, FrameLocator, Locator } from '@playwright/test'

test('Multiple iframe test', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

    //Get header text of main page
    let mainFrame: FrameLocator= page.frameLocator('[name="main"]');
    let heading = await mainFrame.locator('h2').innerText();
    console.log("Heading of main page: ", heading);

    await page.waitForTimeout(2000);

    // total number of frames in the page
    let frames = page.frames(); // frameset will also be considered as frame in the page.
    console.log("Total frames in the page: ", frames.length); //4
    console.log("Frame names in the page: ", frames.map(frame => frame.name())); // [ '', 'main', 'frame1', 'frame2' ]

    // another way to get total number of frames in the page
    let allFrames : Locator[]= await page.locator('//frame').all();// it will return array of frames in the page. it will not include frameset in the page.
    console.log("Total frames in the page: ", await allFrames.length); //3

    // iterate all frames and print their name and src attribute
    for(const frame of allFrames){
        console.log( await frame.getAttribute("name") ,': ', await frame.getAttribute("src"));
    
    }

    // click on an elemment of side frame
    let sideFrame: FrameLocator = page.frameLocator('[name="side"]');
    await sideFrame.getByText("Vehicle registration").click();
   
    await page.waitForTimeout(5000);
});
