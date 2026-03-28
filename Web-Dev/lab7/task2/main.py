from models import Animal, Dog, Cat
#dog и cat
def main():
    animal = Animal("Generic", 5, "Unknown")
    dog1 = Dog("Buddy", 3, "Golden Retriever")
    dog2 = Dog("Max", 2, "Beagle", trained=True)
    cat1 = Cat("Whiskers", 4, "Black")
    cat2 = Cat("Luna", 1, "White")

    animals = [animal, dog1, dog2, cat1, cat2]
    for a in animals:
        print(a)
        print(a.info())
        print(a.speak())
        print("/" * 40)

    print(dog1.train())
    print(cat1.scratch())

if __name__ == "__main__":
    main()