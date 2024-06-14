require('dotenv').config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const OpenAI = require("openai");

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

async function main(abstract) {
  const completion = await openai.chat.completions.create({
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: `Based on the abstract, ${abstract}, find the related news article and summarize it - maximum 400 words and understandable for an 8th grader and below` }
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0];
}

// const abs = 'The vikings were a great group of people';
// let msg;
// main(abs).then(data => {
//     msg = data.message.content;
//     console.log(msg);
// });

module.exports = main;