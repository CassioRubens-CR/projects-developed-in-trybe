import sys


def txt_importer(path_file):
    # importar notícias a partir de um arquivo TXT, utilizando "\n"
    # como separador. Todas as mensagens de erro devem ir para a stderr.
    try:
        # Se extensão diferente de .txt, deve ser exibida uma mensagem:
        # Formato inválido
        if not path_file.endswith('txt'):
            # Caso a extensão do arquivo seja diferente de .txt,
            # deve ser exibida uma mensagem: "Formato inválido";
            sys.stderr.write("Formato inválido\n")

        # 2.1 deve retornar uma estrutura contendo as linhas do arquivo;
        with open(path_file, 'r') as file:
            # A função deve retornar uma estrutura contendo linhas do arquivo
            text = file.read().splitlines()
            return text

    # 2.2 Se o arquivo TXT que não existir, deve ser exibida a mensagem:
    # Arquivo {path_file} não encontrado
    except FileNotFoundError:
        # Caso o arquivo TXT não exista, deve ser exibida a mensagem:
        # "Arquivo {path_file} não encontrado";
        sys.stderr.write(f"Arquivo {path_file} não encontrado\n")
