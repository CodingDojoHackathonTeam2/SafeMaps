from django.http import JsonResponse
import json

def wrap_response(request, json, status=None):
    if type(json) == dict:
        response = JsonResponse(json, status=status)
    elif type(json) == list:
        response = JsonResponse(json, status=status, safe=False)
    if request.user.is_authenticated:
        response.set_cookie(
            "iShelterUserId",
            value=request.user.id,
            max_age=7200
        )
        response.set_cookie(
            "iShelterUsername",
            value=request.user.username,
            max_age=7200
        )
    else:
        response.set_cookie(
            "iShelter",
            value="Not logged in",
            max_age=1800
        )
    return response

# convert request body to JSON
def get_json(request):
    try:
        request_body = json.loads(request.body)
        return request_body
    except:
        return {}

def bad_request(request, msg, status):
    return wrap_response(
        request,
        {
            "success": False,
            "error": msg
        },
        status=status
    )

def req_methods(methods):
    def dec(function):
        def wrapper(*args, **kwargs):
            print(methods)
            print(args[0].method)
            method = args[0].method
            if method in methods:
                return function(*args, **kwargs)
            else:
                return bad_request(args[0], "Method not allowed", 405)
        return wrapper
    return dec