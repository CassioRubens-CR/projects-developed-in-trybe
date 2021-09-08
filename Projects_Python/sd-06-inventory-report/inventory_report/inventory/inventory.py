from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport
import xmltodict
import json
import csv


class Inventory:
    @classmethod
    def import_data(cls, file_path, report_type):
        iterable_data = cls.file_path_reader(file_path)
        if report_type == 'simples':
            return SimpleReport.generate(iterable_data)
        elif report_type == 'completo':
            return CompleteReport.generate(iterable_data)
        else:
            raise ValueError("Invalid report type.")

    @classmethod
    def file_path_reader(cls, file_path):
        end_path_name = file_path[-4:]
        with open(file_path) as file:
            if end_path_name == '.csv':
                read_file = csv.DictReader(file)
                return [item for item in read_file]
            if end_path_name == 'json':
                return json.load(file)
            if end_path_name == '.xml':
                read_file = xmltodict.parse(file.read())
                return read_file['dataset']['record']
