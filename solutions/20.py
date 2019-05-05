import time

# fed up with JS lack of big num support, will come back and do this in JS eventually
def factorial(num):
  if (num == 0):
    return 1
  else:
    return num * factorial(num - 1)

def sum(num):
  sum = 0
  for digit in str(num):
    sum = sum + int(digit)
  return sum

start = time.time()
print(sum(factorial(100)))
end = time.time()
print(end - start)
# runtime: 0.001s