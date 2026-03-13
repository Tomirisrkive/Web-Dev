def end_other(a, b):
    a_low = a.lower()
    b_low = b.lower()
    return a_low.endswith(b_low) or b_low.endswith(a_low)

print(end_other('Hiabc', 'abc'))     # True
print(end_other('AbC', 'HiaBc'))     # True
print(end_other('abc', 'abXabc'))    # True