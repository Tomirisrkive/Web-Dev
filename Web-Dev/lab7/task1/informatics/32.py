def Xor(x, y):
    return (x and not y) or (not x and y)

x, y = map(int, input().split())
print(int(Xor(bool(x), bool(y))))