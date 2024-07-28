import puppeteer from "puppeteer";

// feature 1
describe("filter events by city", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector("#city-search");
  });

  afterAll(() => {
    browser.close();
  });

  test("app will display events in all cities by default", async () => {
    await page.waitForSelector("#event-list");
    const eventList = await page.$("#event-list");
    expect(eventList).toBeDefined();
  });

  test("app will render city suggestions when user types in the city search field", async () => {
    await page.type("#city-search .city", "Berlin");

    const suggestedList = await page.$$(".suggestedItem");

    expect(suggestedList.length).toBe(2);
  });

  test("user can click on a suggested city and app wil display only events in that city", async () => {
    await page.$$eval(".suggestedItem", (items) => {
      for (const item of items) {
        if (item.textContent === "Berlin, Germany") {
          item.click();
          break;
        }
      }
    });

    const eventLocations = await page.$$(".location");

    for (let i = 0; i < eventLocations.length; i++) {
      const filteredLocation = await eventLocations[i].evaluate(
        (el) => el.textContent
      );
      expect(filteredLocation).toBe("Berlin, Germany");
    }
  });
});

// feature 2
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
