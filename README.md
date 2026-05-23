# LinkedIn Profile Scraper — No Cookies Required 👤

[![Run on Apify](https://apify.com/badges/run-on-apify.svg)](https://apify.com/exotic_station/linkedin-profile-scraper)

Welcome to the open-source client wrapper for the **LinkedIn Profile Scraper**! This project provides a fully typed, TypeScript-first Node.js interface for triggering powerful LinkedIn data extraction flows hosted on the Apify Cloud.

## Highlights & Enterprise Benefits
- **No Login / No Cookies Required** \- Bypass session management complexity entirely.
- **Rich Data Output** \- Extracts comprehensive work histories, skills, educational backgrounds, and personal information directly into a clean JSON format.
- **Horizontal Scalability** \- Fire off limitless parallel scraping jobs via Apify infrastructure without local constraint.
- **Production-Ready** \- Built natively with TypeScript for strongly typed inputs and outputs.

## Why Run on Apify Cloud?
Running a LinkedIn scraper locally server usually involves dealing with relentless rate-limiting, CAPTCHAs, residential proxy rotation, and complex browser fingerprinting.
By targeting our Apify Cloud Actor, you offload all this headache:
- **Automatic IP Rotation:** We cycle high-quality residential proxies automatically for you.
- **Fingerprinting Evasion:** Custom browser environments that blend seamlessly into LinkedIn's anti-bot system.
- **Zero Local Footprint:** Execute on our scalable servers and protect your IP address!

🔗 **[View Actor on the Apify Store](https://apify.com/exotic_station/linkedin-profile-scraper)**

## Integrations
This scraper is fully automation-ready! Its structured JSON output maps cleanly and directly into popular no-code tools like **n8n**, **Make**, and **Zapier**, enabling you to build complex CRM workflows instantly without managing code.

## Prerequisites
- **Node.js** (v18+)
- **TypeScript**
- **An Apify Account & API Token**

## Installation & Configuration

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Your Secret Token**
   To talk to the Apify Cloud, you need an API token.
   Set up your environment variable inside your `.env` or set it in your terminal:
   ```bash
   export APIFY_API_TOKEN="apify_api_XXXXXXXXXXXX"
   ```
   *(Alternatively, hardcode it in `src/index.ts` during local testing.)*

3. **Verify Actor Information**
   Inside `src/index.ts`, the target actor is pre-configured to `'exotic_station/linkedin-profile-scraper'`.

## Running the Scraper
Run the predefined TypeScript compilation and execution script:
```bash
npm start
```
The scraper client will compile locally, dispatch the job cleanly to the cloud, and emit the formatted JSON straight into your terminal!
