def study_schedule(start_time, end_time, target_time):
    # Requisito 1
    # Número de estudantes estudando no mesmo horário (Algoritmo de busca)

    best_time = 0

    if not target_time:
        return best_time

    # 01 ZIP = Produz um iterador que agrega elementos de cada um dos iteráveis
    for start, end in zip(start_time, end_time):
        result = (target_time >= start) and (target_time <= end)
        if result:
            best_time += 1

    return best_time

# Rodapé
# 01
# https://docs.python.org/pt-br/3/library/functions.html#zip
