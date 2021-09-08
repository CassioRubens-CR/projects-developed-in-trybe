def is_palindrome_recursive(word, low, high):
    # Requisito 2
    # Palíndromos (Recursividade)
    # Uma função que chama a si mesma é chamada de recursiva.
    # O processo para executar, tal função recursiva,
    # é chamado de recursividade. (conteúdo Trybe)

    if word == "":
        return False

    word_palindrome = low == high
    if word_palindrome:
        return True

    word_not_palindrome = word[low] != word[high]
    if word_not_palindrome:
        return False

    recursion = is_palindrome_recursive(word, low + 1, high - 1)
    if low < high:
        return recursion
