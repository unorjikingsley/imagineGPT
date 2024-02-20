'use server';

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export const generateChatResponse = async (chatMessages) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'you are a helpful assistant' },
        ...chatMessages,
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0,
    })
    return (response.choices[0].message);
  } catch (error) {
    console.log(error)
    return null
  }
}

export const getExistingTour = async ({ city, country }) => {
  return null;
}

export const generateTourResponse = async ({ city, country }) => {
  try {
    const response = await openai.chat.completions.create({
      message: [
        {
          role: 'system',
          content: 'you are a tour guide'
        }, 
        {
          role: 'user',
          content: query,
        }
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0,
    });
    const tourData = JSON.parse(response.choice[0].message.content)
    if (!tourData.tour) {
      return null
    }
    return tourData.tour
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const createNewTour = async (tour) => {
  return null;
}