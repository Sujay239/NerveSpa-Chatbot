const firstItem = items[0]?.json || {};
const firstContentItem = items.find(item => item.json?.content)?.json || {};

const combinedAnswer = [
  firstItem.answer || "",
  firstContentItem.content || ""
]
.filter(Boolean)
.join(" ");

return [
  {
    json: {
      id: firstItem.id || "",
      question: firstItem.question || "",
      answer: combinedAnswer,
      similarity: firstItem.similarity ?? null
    }
  }
];