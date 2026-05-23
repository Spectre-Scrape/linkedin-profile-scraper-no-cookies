import { ApifyClient } from 'apify-client';

// Initialize the ApifyClient with your API token
const API_TOKEN = process.env.APIFY_API_TOKEN ?? 'YOUR_APIFY_API_TOKEN';
const client = new ApifyClient({
    token: API_TOKEN,
});

/**
 * Scrapes a LinkedIn profile using a hosted Apify Actor.
 * 
 * @param profileUrl - The LinkedIn profile URL to scrape
 */
async function scrapeLinkedInProfile(profileUrl: string) {
    // Replace with your particular Actor's username and actor name on Apify
    const ACTOR_IDENTIFIER = 'YOUR_APIFY_USERNAME/YOUR_ACTOR_NAME';

    console.log(`Starting scrape for: ${profileUrl}...`);

    try {
        // Starts an actor and waits for it to finish
        const run = await client.actor(ACTOR_IDENTIFIER).call({
            profileUrl: profileUrl
        });

        console.log(`Actor run completed with ID: ${run.id}`);

        // Fetch the results from the actor run's default dataset
        if (run.defaultDatasetId) {
            const { items } = await client.dataset(run.defaultDatasetId).listItems();
            console.log('--- Scrape Results ---');
            console.log(JSON.stringify(items, null, 2));
            console.log('----------------------');
        } else {
            console.warn('No default dataset ID found for this run.');
        }

    } catch (error) {
        console.error('An error occurred during the scrape:', error);
    }
}

// Example execution call
async function main() {
    const exampleUrl = 'https://www.linkedin.com/in/williamhgates';

    console.log('Scraper client initialized. Ready to trigger Apify Actor.');
    console.log('Ensure you have replaced YOUR_APIFY_API_TOKEN, YOUR_APIFY_USERNAME, and YOUR_ACTOR_NAME.');

    // Uncomment to execute the actual actor run:
    // await scrapeLinkedInProfile(exampleUrl);
}

if (require.main === module) {
    main();
}
