import { test, expect, Page } from '@playwright/test';

const BASE_URL ="https://app.thetestingacademy.com/playwright/tables/practice";
const uploadFilePath= "tests/Projects/Project#5 - QA Profile Form/sample-upload.txt";
const downloadFilePath="tests/Projects/Project#5 - QA Profile Form/Downloads/sample-download.txt";

interface personalInformation
{
    firstName: string;
    lastName: string;
    gender: string;
    yearsOfExperience: number;
    date: Date;
    profession: string;
     automationTools: string[]
    continentsWorkedFrom: string[]
   
}

async function fillPersonalInformation(page: Page, personalInfo: personalInformation) :Promise<void>
{
   await page.getByRole('textbox', {name:'First name'}).fill(personalInfo.firstName);
   await page.getByRole('textbox',{name: 'Last name'}).fill(personalInfo.lastName);
   await page.getByRole('radio',({name :` ${personalInfo.gender}`})).click();

   await page.selectOption('#years-experience',`${personalInfo.yearsOfExperience}`);
   const formattedDate = personalInfo.date.toISOString().split('T')[0];
   await page.locator('#profile-date').fill(formattedDate);
   await await page.getByLabel(`${personalInfo.profession}`).click();

   for(const tool of personalInfo.automationTools)
   {
        await page.getByRole('checkbox', {name : tool}).check();
   }

   for(const continent of personalInfo.continentsWorkedFrom)
   {
    await page.getByRole('checkbox',{name : continent}).check();
   }
}

async function verifyTabSwitch(page: Page)
{
  await page.getByRole('tab', {name: 'Navigation Commands'}).click();
  expect (page.locator('#selenium-tab-panel')).toContainText("Navigation commands");
}

async function uploadFile(page: Page, uploadFilePath: string, downloadfilePath: string)
{
  
    //Upload File
  await page.locator('#upload-image').setInputFiles(uploadFilePath);
  
    //Download File Flow
  const downloadPromise = page.waitForEvent('download');
  await page.getByTestId('download-file').click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('sample-download.txt');
  await download.saveAs(downloadFilePath);

}

async function saveProfile(page:Page)
{
    await page.getByRole('button', { name: 'Save profile' }).click();
}

test ('Verify form is filled and submitted Successfully',async({page})=>{

    
    await page.goto(BASE_URL);

    const personalInfo : personalInformation= {
    firstName: "Meeti",
    lastName: "Jha",
    gender: "Female",
    yearsOfExperience: 5,
    date: new Date("2026-11-10") ,
    profession: "Automation Tester",
    automationTools: ['UFT','Selenium Webdriver'],
    continentsWorkedFrom: ['Europe','Asia']
    }
    await fillPersonalInformation(page,personalInfo);
    await verifyTabSwitch(page);
    await uploadFile(page, uploadFilePath,downloadFilePath);


    await saveProfile(page);
});