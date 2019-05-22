import time

start = time.time()

def power_sum(max):
  sum = 0
  for i in range(1, max):
    sum += i ** i
  sumStr = str(sum)
  digits = ''
  for i in range(-10, 0):
    digits = digits + sumStr[i]
  return digits

print(power_sum(1000))
end = time.time()
print(end - start)
# runtime: 0.02s