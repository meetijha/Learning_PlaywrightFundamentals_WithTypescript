import {test,expect} from '@playwright/test';

test('Hover and click test',async({page})=>{

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');

    // Hover over Add-on and then click on Wifi
    await page.getByTestId('nav-add-ons').hover();
    await page.getByTestId('test-id-Wifi').click();

    //read every Add-ons child after hover
  await page.getByTestId('nav-add-ons').hover();
  const addons = await page.locator('[data-testid="nav-add-ons"] .submenu .submenu-item').allInnerTexts();
  console.log(addons);

  // Verify the output
  const output = await page.locator('#output').innerText();

  // Conevrt the output string to JSON and compare with expected data
  const outputJson = JSON.parse(output || '{}');

  // comparing the clicked attribute with expected data
  expect(outputJson.clicked).toContain('Wi-Fi'); // toContainText can only be used with locators, For String / JSON value -> toBe() / toContain()
  expect(outputJson.testId).toBe('test-id-Wifi');
  
});