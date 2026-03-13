def lone_sum(a, b, c):
    s = 0
    if a != b and a != c:
        s += a
    if b != a and b != c:
        s += b
    if c != a and c != b:
        s += c
    return s

print(lone_sum(1, 2, 3))  # 6
print(lone_sum(3, 2, 3))  # 2
print(lone_sum(3, 3, 3))  # 0