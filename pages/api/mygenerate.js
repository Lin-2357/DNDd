
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const animal = req.body.animal || '';
  if (animal.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid animal",
      }
    });
    return;
  }

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {role: "system", content: "you are a helpful assistant who helps user create cold emails to their professors, you try your best to write good emails, but always be accurate about the information of user and professor. I may give you hints on the professor's field of interest, but feel free to use other fields that are more relevant to my experience."},
        {role: "user", content: "I am an undergraduate student in UC Berkeley. I will send you a part of my cold email template, you will use your knowledge about his/her recent research interests to fill in the template for me, you don't need to strictly follow the template, follow the general ideas and write what you think is the best first paragraph of reach-out email, and be accurate about the professor's research field."},
        {role: "assistant", content: "Good, I will remember it"},
        {role: "user", content: "This is a part of my cold email template, you can make some modifications to suit context, but please fill it in and send back and do NOT add any content before or after it: My name is Jiayin Lin and I am currently a second year student in UC Berkeley, majoring in Mathematics and Computer Science. My name is Jiayin Lin, and I am a second-year student majoring in Mathematics and Computer Science. I am reaching out to express my interest in your research in [professor's general fields of studies] and to inquire about any opportunities to work as a research assistant on your ongoing projects. After going through your personal website, I am highly interested in your personal description and fascinated by your research on [some recent specific fields of interests], because [4 sentence compliment on their research achievements and describe reason why I am interested], and I would love to contribute to these areas of study. If you have any need for a research assistant for any of your ongoing programs, I would be delighted to help with my skills in [] in any ways, even by doing the most basic work."},
        {role: "assistant", content: "sure, I will just send back the filled out template"},
        {role: "user", content: `${animal}`}
      ],
    });
    console.log(completion.data.choices[0].message['content']);
    res.status(200).json({ result: completion.data.choices[0].message['content'] });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}