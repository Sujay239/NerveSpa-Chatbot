const text = $json.content;

// 1500 chars is roughly 300-400 words (a solid paragraph or two of context)
const chunkSize = 1500; 
// 300 chars ensures sentences split across boundaries are preserved
const overlap = 200;     

const chunks = [];

for (let i = 0; i < text.length; i += chunkSize - overlap) {
  // Optional: You can add logic here to find the nearest period '.' 
  // so you don't cut words or sentences in half, but increasing the size
  // and overlap helps mitigate this immediately.
  chunks.push({
    json: {
      content: text.substring(i, i + chunkSize)
    }
  });
}

return chunks;
