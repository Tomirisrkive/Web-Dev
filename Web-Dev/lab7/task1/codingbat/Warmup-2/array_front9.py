def array_front9(nums):
    for i in range(min(4, len(nums))):
        if nums[i] == 9:
            return True
    return False

print(array_front9([1, 2, 9, 3, 4]))  # True
print(array_front9([1, 2, 3, 4, 9]))  # False
print(array_front9([1, 2, 3, 4, 5]))  # False