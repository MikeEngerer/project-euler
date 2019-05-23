from time import time

def digit_sum(num):
  arr = list(str(num))
  sum = 0
  for i in range(0, len(arr)):
    sum += int(arr[i])
  return sum

def max_digit_sum():
  highest = 0
  for base in range(1, 100):
    for exp in range(1, 100):
      current = digit_sum(base ** exp)
      if (current > highest):
        highest = current
  return highest

start = time()
print(max_digit_sum())
end = time()
print(end - start)
# runtime: 0.184s