def extra_end(s):
    last = s[-2:]
    return last * 3

print(extra_end('Hello'))  # lololo
print(extra_end('ab'))     # ababab
print(extra_end('Hi'))     # HiHiHi