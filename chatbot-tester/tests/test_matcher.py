# We mock the n8n `items` list
items = [
    {
        "json": {
            "query": {
                "chatInput": "Do you ship internationally?"
            }
        }
    }
]

import sys
script_path = r"d:\Z_work\Sujay\new chatbot\predefineQuestions.py"

with open(script_path, "r", encoding="utf-8") as f:
    script_content = f.read()

script_content = script_content.replace("return main()", "output = main()")

# Execute it in the current globals so it can see `items`
locs = {"items": items}
try:
    exec(script_content, locs)
    print("Success. output:", locs.get("output"))
except Exception as e:
    print("Error during execution:", e)
