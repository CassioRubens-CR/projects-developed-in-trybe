from ting_file_management.file_management import txt_importer
import sys


def process(path_file, instance):
    if instance.__len__() == 0:
        response = {
            "nome_do_arquivo": path_file,
            "qtd_linhas": len(txt_importer(path_file)),
            "linhas_do_arquivo": txt_importer(path_file)
        }
        sys.stdout.write(f"{response}\n")
        return instance.enqueue(response)


def remove(instance):
    remove_from_file = instance.dequeue()
    if not remove_from_file:
        return sys.stdout.write("Não há elementos\n")
    else:
        file_name = remove_from_file["nome_do_arquivo"]
        return sys.stdout.write(f"Arquivo {file_name} removido com sucesso\n")


def file_metadata(instance, position):
    size_file = len(instance)
    if position >= size_file:
        return sys.stderr.write("Posição inválida\n")
    return instance.search(position)

# SYS
# fornece acesso a algumas variáveis usadas ou mantidas pelo interpretador.
# sys.stdout()
# é usado para a saída de print()
# e declarações de expressão e para os prompts de input();
# https://docs.python.org/pt-br/3/library/sys.html?highlight=sys#module-sys
# enqueue()
# Enfileira o registro na fila usando put_nowait() que por sua vez,
# coloca um item na fila sem bloqueá-la.
# https://docs.python.org/pt-br/3/library/logging.handlers.html?highlight=enqueue
# dequeue()
# Retira da fila um registro e o retorna, opcionalmente bloqueando.
# https://docs.python.org/pt-br/3/library/logging.handlers.html?highlight=dequeue
# sys.stderr()
# Os prompts do próprio intérprete e suas mensagens de erro vão para .stderr.
# https://docs.python.org/pt-br/3/library/sys.html?highlight=stderr#sys.stderr
