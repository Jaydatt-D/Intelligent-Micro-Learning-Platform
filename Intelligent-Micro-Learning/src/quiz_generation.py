# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import os
# import google.generativeai as genai

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes

# # API Key for Google Generative AI
# GOOGLE_API_KEY = ''
# genai.configure(api_key=GOOGLE_API_KEY)

# @app.route('/generate-quiz', methods=['POST'])
# def generate_quiz():
#     file_path = "./HTML.txt"  # Update with the path to your text file
#     with open(file_path, "r", encoding="utf-8") as file:
#         text = file.read()

#     model = genai.GenerativeModel('gemini-1.5-pro-latest')

#     prompt = """
#     Please read and understand the provided context and generate a quiz of five multiple choice questions with four options along with the correct option . Ensure that the questions , options and correct answers are presented in a JSON object format.

#     Context:
#     """ + text + """

#     Task:
#     1. Generate a quiz of five multiple choice questions with four options along with the correct option.
#     2. Format the questions , options and correct answers as a JSON object.
#     3. Give only json object as output and no other extra brackets and quotes.

#     Example format:
#     {   {
#         "Question": "Corresponding question text",
#         "Option-1": "Option text",
#         "Option-2": "Option text",
#         "Option-3": "Option text",
#         "Option-4": "Option text",
#         "Correct-Answer": "Option text"
#     },  {
#         "Question": "Corresponding question text",
#         "Option-1": "Option text",
#         "Option-2": "Option text",
#         "Option-3": "Option text",
#         "Option-4": "Option text",
#         "Correct-Answer": "Option text"
#     },  
#         ...
#     }

#     Generate the quiz based on the context provided above.
#     """

#     # Generate content using the model
#     response = model.generate_content(prompt)
#     result = ''.join([p.text for p in response.candidates[0].content.parts])
    
#     return jsonify(result)

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import google.generativeai as genai
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# API Key for Google Generative AI
GOOGLE_API_KEY = ''
genai.configure(api_key=GOOGLE_API_KEY)

@app.route('/generate-quiz', methods=['POST'])
def generate_quiz():
    file_path = "./HTML.txt"  # Update with the path to your text file
    with open(file_path, "r", encoding="utf-8") as file:
        text = file.read()

    model = genai.GenerativeModel('gemini-1.5-pro-latest')

    prompt = """
    Please read and understand the provided context and generate a quiz of five multiple choice questions with four options along with the correct option. Ensure that the questions, options and correct answers are presented in a JSON object format.

    Context:
    """ + text + """

    Task:
    1. Generate a quiz of five multiple choice questions with four options along with the correct option.
    2. Format the questions, options and correct answers as a JSON object.

    Example format:
    [
        {
            "Question": "Corresponding question text",
            "Choices": ["Option text", "Option text", "Option text", "Option text"],
            "Correct-Answer": "Option text"
        },
        ...
    ]

    Generate the quiz based on the context provided above.
    """

    # Generate content using the model
    response = model.generate_content(prompt)
    result = ''.join([p.text for p in response.candidates[0].content.parts])

    # Convert result string to JSON
    quiz_data = json.loads(result)

    return jsonify(quiz_data)

if __name__ == '__main__':
    app.run(debug=True)
