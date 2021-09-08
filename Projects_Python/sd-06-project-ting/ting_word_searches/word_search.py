def exists_word(word, instance):
    list_word = list()

    existing_word = range(len(instance))

    for found_word in existing_word:
        word_search = instance.search(found_word)
        response = {
            "palavra": word,
            "arquivo": word_search["nome_do_arquivo"],
            "ocorrencias": []
        }

        for found_word, word_search in enumerate(
            word_search["linhas_do_arquivo"]
        ):
            if word.lower() in word_search.lower():
                response["ocorrencias"].append({"linha": found_word + 1})

        if len(response['ocorrencias']):
            list_word.append(response)

    return list_word


def search_by_word(word, instance):
    list_word = list()

    existing_word = range(len(instance))

    for index in existing_word:
        word_search = instance.search(index)
        response = {
            "palavra": word,
            "arquivo": word_search["nome_do_arquivo"],
            "ocorrencias": []
        }

        for index, word_search in enumerate(word_search["linhas_do_arquivo"]):
            if word.lower() in word_search.lower():
                response["ocorrencias"].append(
                    {
                        "linha": index + 1,
                        "conteudo": word_search
                    })

        if len(response['ocorrencias']):
            list_word.append(response)

    return list_word
