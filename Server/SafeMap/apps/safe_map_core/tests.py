# from django.test import TestCase

class mock_request():
    def __init__(self, method):
        self.method = method


def req_methods(methods):
    def dec(function):
        def wrapper(*args, **kwargs):
            print(methods)
            print(args[0].method)
            method = args[0].method
            if method in methods:
                return function(*args, **kwargs)
            else:
                return False
                # todo needs to be bad method
        return wrapper
    return dec


post_r = mock_request(method="POST")
get_r = mock_request(method="GET")
put_r = mock_request(method="PUT")
patch_r = mock_request(method="PATCH")


@req_methods(["GET", "POST"])
def get_post(request):
    return True


@req_methods(["POST"])
def post(request):
    return True


@req_methods(["DELETE", "PATCH", "PUT"])
def d_patch_put(request):
    return True


print(get_post(post_r) == True)
print(get_post(put_r) == False)
print(post(get_r) == False)
print(d_patch_put(put_r) == True)
print(d_patch_put(get_r) == False)
