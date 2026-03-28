import sys
from models import TaskManager
from storage import load_tasks, save_tasks

DATA_FILE = "data.json"

def show_menu():
    print("Task Manager")
    print("1. Show tasks")
    print("2. Add task")
    print("3. Complete task")
    print("4. Delete task")
    print("5. Exit")

def show_tasks(manager):
    tasks = manager.list_tasks()
    if not tasks:
        print("\nYour task list is empty!")
    else:
        print("\nYour tasks:")
        for task in tasks:
            print(task)

def add_task(manager):
    title = input("Enter task title: ").strip()
    if title:
        task = manager.add_task(title)
        save_tasks(DATA_FILE, manager.tasks)
        print(f"Task added: {task}")
    else:
        print("Error: Title cannot be empty.")

def complete_task(manager):
    try:
        task_id = int(input("Enter task ID to complete: "))
        if manager.complete_task(task_id):
            save_tasks(DATA_FILE, manager.tasks)
            print("Task marked as completed!")
        else:
            print(f"Error: Task with ID {task_id} not found.")
    except ValueError:
        print("Error: Please enter a valid numerical ID.")

def delete_task(manager):
    try:
        task_id = int(input("Enter task ID to delete: "))
        if manager.delete_task(task_id):
            save_tasks(DATA_FILE, manager.tasks)
            print("Task deleted successfully.")
        else:
            print(f"Error: Task with ID {task_id} not found.")
    except ValueError:
        print("Error: Please enter a valid numerical ID.")

def main():
    initial_tasks = load_tasks(DATA_FILE)
    manager = TaskManager(initial_tasks)

    while True:
        show_menu()
        choice = input("Choose an option: ").strip()

        if choice == '1':
            show_tasks(manager)
        elif choice == '2':
            add_task(manager)
        elif choice == '3':
            complete_task(manager)
        elif choice == '4':
            delete_task(manager)
        elif choice == '5':
            print("Goodbye!")
            sys.exit()
        else:
            print("Invalid option, please try again.")

if __name__ == "__main__":
    main()