class Task:
    def __init__(self, task_id: int, title: str, completed: bool = False):
        self.id = task_id
        self.title = title
        self.completed = completed

    def mark_completed(self) -> None:
        self.completed = True

    def __str__(self) -> str:
        status = "✅" if self.completed else "❌"  #и так нужно было поставить
        return f"[{self.id}] {self.title} {status}"

    def to_dict(self) -> dict:
        return {"id": self.id, "title": self.title, "completed": self.completed}

    @classmethod
    def from_dict(cls, data: dict):
        return cls(data['id'], data['title'], data['completed'])


class TaskManager:
    def __init__(self, tasks=None):
        self.tasks = tasks if tasks else []

    def _get_next_id(self) -> int:
        if not self.tasks:
            return 1
        return max(task.id for task in self.tasks) + 1

    def add_task(self, title: str) -> Task:
        new_task = Task(self._get_next_id(), title)
        self.tasks.append(new_task)
        return new_task

    def list_tasks(self):
        return self.tasks

    def complete_task(self, task_id: int) -> bool:
        for task in self.tasks:
            if task.id == task_id:
                task.mark_completed()
                return True
        return False

    def delete_task(self, task_id: int) -> bool:
        for i, task in enumerate(self.tasks):
            if task.id == task_id:
                self.tasks.pop(i)
                return True
        return False