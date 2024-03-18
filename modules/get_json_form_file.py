import json


def get_data_from_json_file(filepath:str) -> dict:
    with open(filepath) as file:
        file_content = file.read()

    user_details = json.loads(file_content)

    return user_details
