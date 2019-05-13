# this same solution in JS produces numer/denom = infinity long before 1000 iterations...
import time

# next numer = prev numer + prev denom * 2, next denom = prev numer + prev denom
def root_two_approx(max):
  numer = 1
  denom = 0
  count = 0
  for i in range(max):
    temp = denom
    denom += numer
    numer += temp * 2
    if (len(str(numer)) > len(str(denom))):
      count += 1
  return count

start = time.time()
print(root_two_approx(1000))
end = time.time()
print(end - start)
# runtime: 0.008s

