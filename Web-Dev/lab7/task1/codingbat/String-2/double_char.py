def double_char(s):
    return ''.join([c*2 for c in s])

print(double_char('The'))        # 'TThhee'
print(double_char('AAbb'))       # 'AAAAbbbb'
print(double_char('Hi-There'))   # 'HHii--TThheerree'