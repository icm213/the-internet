const { Given, When, Then } = require("@wdio/cucumber-framework");

When("I pass {string} to the prompt", async (data) => {
  browser.url(`https://${data}@the-internet.herokuapp.com/basic_auth`);
});

Then(
  'It should be "Congratulations! You must have the proper credentials." text',
  async () => {
    try {
      const succesText = await $(`//*[@id="content"]/div/p`);
      await expect(succesText).toHaveText(
        "Congratulations! You must have the proper credentials."
      );
    } catch (err) {
      console.log(err);
    }
  }
);
