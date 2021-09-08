from .importer import Importer
import json


class JsonImporter(Importer):
    def import_data(file_name):
        file_extension = file_name[-4:]
        if file_extension == 'json':
            with open(file_name) as file:
                return json.load(file)
        else:
            raise ValueError('Arquivo inválido')
