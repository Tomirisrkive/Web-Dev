def count_evens(nums):
    count = 0
    for num in nums:
        if num % 2 == 0:
            count += 1
    return count

print(count_evens([2, 1, 2, 3, 4]))  # 3
print(count_evens([2, 2, 0]))        # 3
print(count_evens([1, 3, 5]))        # 0