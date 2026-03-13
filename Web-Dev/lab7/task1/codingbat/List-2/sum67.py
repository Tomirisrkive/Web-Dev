def sum67(nums):
    total = 0
    skip = False
    for num in nums:
        if num == 6:
            skip = True
        if not skip:
            total += num
        if num == 7 and skip:
            skip = False
    return total

print(sum67([1, 2, 2]))                # 5
print(sum67([1, 2, 2, 6, 99, 99, 7])) # 5
print(sum67([1, 1, 6, 7, 2]))          # 4