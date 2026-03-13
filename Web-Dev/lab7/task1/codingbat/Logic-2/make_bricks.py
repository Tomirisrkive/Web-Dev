def make_bricks(small, big, goal):
    return goal - min(goal // 5, big) * 5 <= small

print(make_bricks(3, 1, 8))   # True
print(make_bricks(3, 1, 9))   # False
print(make_bricks(3, 2, 10))  # True