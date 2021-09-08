from .importer import Importer
import csv


class CsvImporter(Importer):
    def import_data(file_name):
        file_extension = file_name[-3:]
        if file_extension == 'csv':
            with open(file_name) as file:
                read_file = csv.DictReader(file)
                return [item for item in read_file]
        else:
            raise ValueError('Arquivo inválido')
