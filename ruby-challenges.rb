# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# create a function that takes in all variables
def even_or_odd num
    # use the modulo operation to determine if the variable does or does not have a remainder which indicates if it is odd or even
    if num % 2 == 0
    # return statement if variable is even
    "#{num} is even"
    else
    #  return statement if variable is odd
    "#{num} is odd"
    end
end
    
p even_or_odd(reposts1)
p even_or_odd(reposts2)
p even_or_odd(reposts3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:

# create a function that takes in all the variables
def noVowels onlyCons
    # return the variable using .delete, which deletes the characters specified in the method and returns the remainding characters.
    onlyCons.delete "aeiouAEIOU"
end

p noVowels(beatles_album1)
p noVowels(beatles_album2)
p noVowels(beatles_album3)


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:

# create a function that takes in all the variables
def palindrome (string)
    # compare the input string to its reverse counterpart using downcase method for case consistency
    if string.downcase == string.downcase.reverse
        # return statement if input string is a palindrome
        puts "#{string} is a palindrome"
    else
        # return statement if input string is not a palindrome
        puts "#{string} is not a palindrome" 
    end
end
     
palindrome(palindrome_test_case1)
palindrome(palindrome_test_case2)
palindrome(palindrome_test_case3)

