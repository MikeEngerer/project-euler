from time import time

def factorial(num):
  if (num == 1):
    return 1
  return num * factorial(num - 1)

def combos(num, size):
  return factorial(num) / (factorial(size) * factorial(num - size))

def count_over_million(max):
  count = 0
  for num in range(2, max + 1):
    for size in range(1, num):
      if (combos(num, size) > 1000000):
        count += 1
  return count

start = time()
print(count_over_million(100))
end = time()
print(end - start)
# runtime: 0.063s
