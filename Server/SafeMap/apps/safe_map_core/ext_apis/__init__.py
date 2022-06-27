import requests
from pprint import pprint

class MapBox_Connector():
    token = "pk.eyJ1IjoiY2FjZXJlc3JlbmUyIiwiYSI6ImNsNHZ0ajQ3NjFpcGEzZG8wNjF1czNyYWMifQ.b8-QkVaDaNGRph5ozj_vZw"

    def __init__(self):
        pass

    # @staticmethod
    # def get_coord(street, city, state, postal):
    #
    #     url = f"https://api.mapbox.com/geocoding/v5/mapbox.places/{street}%20{city}%2C%20{state}%20{postal}.json?types=address&access_token={MapBox_Connector.token}"
    #     # url = f"https://api.mapbox.com/geocoding/v5/mapbox.places/515%2015th%20St%20NW%2C%20Washington%2C%20DC%2020004.json?types=address&access_token={token}"
    #
    #     response = requests.get(url).json()
    #     return response

    @staticmethod
    def get_coordinates(address):
        url = f"https://api.mapbox.com/geocoding/v5/mapbox.places/{address}.json?types=address&access_token={MapBox_Connector.token}"

        response = requests.get(url).json()
        pprint(response)
        return response['features'][0]['center']