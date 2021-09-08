from .importer import Importer
import xmltodict


class XmlImporter(Importer):
    def import_data(file_name):
        file_extension = file_name[-3:]
        if file_extension == 'xml':
            with open(file_name) as file:
                read_file = xmltodict.parse(file.read())
                return read_file['dataset']['record']
        else:
            raise ValueError('Arquivo inválido')
