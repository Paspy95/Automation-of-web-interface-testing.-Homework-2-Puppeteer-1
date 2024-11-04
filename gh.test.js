let page;

describe("Github page tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });
  
  afterEach(() => {
    page.close();
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub · Build and ship software on a single, collaborative platform · GitHub');
  }, 20000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 60000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 60000);
});

test("the title on the page issues", async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/features/issues");
  const actual = await page.$eval("#hero-section-brand-heading", link => link.textContent);
  expect(actual).toContain("Project planning  for developers");
}, 60000);

test("the title on the page enterprise", async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/enterprise");
  const actual = await page.$eval("#hero-section-brand-heading", link => link.textContent);
  expect(actual).toContain("The AI-powereddeveloper platform");
}, 60000);

test("the title on the page startups", async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/enterprise/startups");
  const actual = await page.$eval(".col-10-max.color-fg-default.mx-auto.h1-mktg", link => link.textContent);
  expect(actual).toContain("Build your startupon GitHub");
}, 60000);