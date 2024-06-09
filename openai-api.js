require('dotenv').config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const OpenAI = require("openai");

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

async function main(articleLink) {
  const completion = await openai.chat.completions.create({
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: `Summarize the following article: ${articleLink}` }
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0];
}

const URL = 'https://www.nytimes.com/2024/06/07/world/africa/white-politician-south-africa.html';
let msg;
main(URL).then(data => {
    msg = data.message.content;
    console.log(msg);
});