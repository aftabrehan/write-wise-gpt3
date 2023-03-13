export const getAISuggestions = async (
  text = 'That would be an amazing story'
) => {
  const response = await fetch(
    'https://api.openai.com/v1/engines/davinci-codex/completions',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify({
        prompt: text,
        max_tokens: 100,
        temperature: 0.7,
        n: 1,
        stop: '\n',
      }),
    }
  )

  const data = await response.json()
  console.log(data, 'data')
  const suggestion = data.choices[0].text.trim()
  return suggestion
}
