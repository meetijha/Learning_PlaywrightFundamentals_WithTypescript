import {test,expect } from '@playwright/test';
import {readXLSX} from './utils/xlsxReader';

test.describe('DDT XLSX', () => {
    const xlsxFilePath = 'tests/Projects/Project_10_Data_Driven_Testing/Data/users.xlsx';
    const formURL = 'https://app.thetestingacademy.com/playwright/tables/practice#page';

    const profileData = readXLSX(xlsxFilePath);

    for (const data of profileData) {
        test(`Filling QA form for : ${data.firstName}`, async ({ page }) => {
            await page.goto(formURL);

            await page.getByTestId('first-name').fill(data.firstName);
            await page.getByTestId('last-name').fill(data.lastName);
            await page.getByTestId('profile-submit').click();
        });
    }
});