def sleep_in(weekday, vacation):
    return not weekday or vacation
print(sleep_in(False, False))  # True
print(sleep_in(True, False))   # False
print(sleep_in(False, True))   # True