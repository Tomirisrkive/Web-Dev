import json
import os
from models import Task

def load_tasks(filename):
    if os.path.exists(filename) == False:
        return []

    file = open(filename, 'r', encoding='utf-8')
    data = json.load(file)
    file.close()
    tasks_list = []
    for item in data:
        new_task = Task(item['id'], item['title'], item['completed'])
        tasks_list.append(new_task)

    return tasks_list

def save_tasks(filename, tasks):
    data_for_json = []

    for t in tasks:
        dictionary = {
            "id": t.id,
            "title": t.title,
            "completed": t.completed
        }
        data_for_json.append(dictionary)

    file = open(filename, 'w', encoding='utf-8')
    json.dump(data_for_json, file, indent=4, ensure_ascii=False)
    file.close()