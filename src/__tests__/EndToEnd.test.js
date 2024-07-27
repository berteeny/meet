import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event-li");
  });

  afterAll(() => {
    browser.close();
  });

  test("event elements are collapsed by default", async () => {
    const eventDetails = await page.$(".event-li .details");

    expect(eventDetails).toBeNull();
  });

  test("user can expand event to see its details", async () => {
    await page.click(".event-li .details-btn");

    const eventDetails = await page.$(".event .details");

    expect(eventDetails).toBeDefined();
  });

  test("user can collapse event details", async () => {
    await page.click(".event-li .details-btn");

    const eventDetails = await page.$(".event-li .details");

    expect(eventDetails).toBeNull();
  });
});
