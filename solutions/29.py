import time

def count_unique_powers (max):
  arr = []
  for i in range(2, max + 1):
    for j in range(2, max + 1):
      current = i ** j
      if current not in arr:
        arr.append(current)
  return len(arr)

start = time.time()
print(count_unique_powers(100))
end = time.time()
print(end - start)
# runtime: 0.442s
