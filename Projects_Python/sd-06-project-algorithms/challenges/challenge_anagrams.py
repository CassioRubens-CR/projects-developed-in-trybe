def is_anagram(first_string, second_string):
    # Requisito 3
    # Anagramas (Algoritmo de ordenação)

    empty_string = first_string == "" or second_string == ""
    if empty_string:
        return False

    sorted_first = sorted(first_string)
    sorted_second = sorted(second_string)
    if sorted_first != sorted_second:
        return False
    return True

    # 01 - sorted = Retorna uma nova lista classificada dos itens
    # Possui dois argumentos
    # "key" especifica a função de um argumento usado para extrair
    # uma chave de comparação de cada elemento em iterable
    # "reverse" é um valor booleano. Se definido igual a True,
    # então os elementos da lista são classificados como se
    # cada comparação fosse reversa
    # return sorted(first_string) == sorted(second_string)

# Rodapé
# 01
# https://docs.python.org/pt-br/3/library/functions.html?highlight=sorted#sorted
# https://docs.python.org/pt-br/3/howto/sorting.html?highlight=timsort
