def mutate_string(string, position, character):
    return string[:position] + character + string[position+1:]
s = input()
pos, char = input().split()
pos = int(pos)
result = mutate_string(s, pos, char)
print(result)