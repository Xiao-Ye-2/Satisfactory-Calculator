import json
import os
import sys
from googletrans import Translator

def translate_json(input_file, output_file, target_lang='zh-cn'):

    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    translator = Translator()

    translated_data = {}
    for key, value in data.items():
        try:
            translated = translator.translate(value, dest=target_lang)
            translated_data[key] = translated.text
        except Exception as e:
            print(f"Error translating '{key}': {e}")
            translated_data[key] = value

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2)

    print(f"Translation completed. Output saved to {output_file}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python translate.py <input_file> <output_file>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    translate_json(input_file, output_file)
