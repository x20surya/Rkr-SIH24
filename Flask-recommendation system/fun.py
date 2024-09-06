def sum(a,b):
    return a+b
def avg(a,b):
    return (a+b)/2
def is_armstrong_number(num):


  num_str = str(num)
  
  num_digits = len(num_str)

  digit_sum = sum(int(digit) ** num_digits for digit in num_str)


  return digit_sum == num


