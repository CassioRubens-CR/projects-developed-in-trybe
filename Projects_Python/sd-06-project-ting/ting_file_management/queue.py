class Queue:
    # A fila (Queue) deve ser uma estrutura FIFO,
    # ou seja, o primeiro item a entrar, deve ser o primeiro a sair.
    # "self._data" acessa variável interna
    def __init__(self):
        self._data = list()

    # expor o tamanho da nossa fila através do método __len__
    def __len__(self):
        return len(self._data)

    # 1.1 O método enqueue
    # deve adicionar um valor a fila, modificando seu tamanho.
    def enqueue(self, value):
        self._data.append(value)
    # push_back: "append" adicionadas valor na posição n - 1 da estrutura.

    # 1.2 O método dequeue
    # deve remover o elemento a mais tempo na fila, modificando seu tamanho.
    def dequeue(self):
        if self._data:
            pop_front = self._data.pop(0)
            return pop_front
        return None
    # pop_front: "pop" com índice 0 para remover o 1º elemento existente

    # 1.3. o método search
    # deve buscar um valor na lista à partir de um índice.
    # deve lançar uma exceção quando o índice for inválido.
    def search(self, index):
        if index not in range(self.__len__()):
            raise IndexError

        if self._data:
            return self._data[index]
    # peek_front permitem visualizar conteúdo, não alterando o conteúdo.
