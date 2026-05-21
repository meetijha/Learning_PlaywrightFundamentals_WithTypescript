import {test,expect} from '@playwright/test';
import { readCSV } from './utils/csvReader';

test.describe('Data Driven Testing - Filling QA form using CSV data', () => {

    const csvFilePath = 'tests/Projects/Project_10_Data_Driven_Testing/Data/register.csv'; 
    const formURL = 'https://app.thetestingacademy.com/playwright/tables/practice#page'; 

    const profileData= readCSV(csvFilePath);

    for (const data of profileData) {
        test(`Filling QA form for : ${data.firstName}`, async ({ page }) => {
            await page.goto(formURL);

            await page.getByTestId('first-name').fill(data.firstName);
            await page.getByTestId('last-name').fill(data.lastName);
            await page.getByTestId('profile-submit').click();
            
        });
    }
});