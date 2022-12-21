const { Given, When, Then } = require("@wdio/cucumber-framework");

When('I click on "add elements" button {int} times', async (clicks) => {
  for (let i = 0; i < clicks; i++) {
    await $('//*[@id="content"]/div/button').click();
  }
});

Then('It should be {int} "delete buttons" on the page', async (children) => {
  const parent = await $('//*[@id="elements"]');
  await expect(parent).toHaveChildren(children);
});

//========================//

Given('There are {int} "Delete" buttons on the page', async (delBtns) => {
  for (let i = 0; i < delBtns; i++) {
    await $('//*[@id="content"]/div/button').click();
  }
  const parent = await $('//*[@id="elements"]');
  await expect(parent).toHaveChildren(delBtns);
});

When('I click on {int} "Delete" buttons', async (deleted) => {
  for (let i = deleted - 1; i >= 0; i--) {
    const delBtn = await $(`//*[@id="elements"]/button[${i + 1}]`);
    await delBtn.click();
  }
});

Then("It should the {int} of buttons left", async (left) => {
  const parent = await $('//*[@id="elements"]');
  await expect(parent).toHaveChildren(left);
});
