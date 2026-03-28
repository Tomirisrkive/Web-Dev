class Animal:
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def speak(self):
        return "animal sound"

    def info(self):
        return self.name + " is a " + str(self.age) + "-year-old " + self.species

    def __str__(self):
        return self.name + " (" + self.species + ", " + str(self.age) + " years old)"


class Dog(Animal):
    def __init__(self, name, age, breed, trained=False):
        super().__init__(name, age, "Dog")
        self.breed = breed
        self.trained = trained

    def speak(self):
        return "Woof!"

    def train(self):
        self.trained = True
        return self.name + " is now trained"

    def __str__(self):
        trained_status = "trained" if self.trained else "not trained"
        return self.name + " (" + self.breed + " dog, " + str(self.age) + " years old, " + trained_status + ")"


class Cat(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age, "Cat")
        self.color = color

    def speak(self):
        return "Meow!"

    def scratch(self):
        return self.name + " is scratching!"

    def __str__(self):
        return self.name + " (" + self.color + " cat, " + str(self.age) + " years old)"