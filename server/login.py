import sys
import json

def authenticate():
    response = dict()
    user, password = None, None
    if len(sys.argv) == 3:
        _, user, password = sys.argv
        response["data"] = {"user": user, "password": password}
        if user == "admin" and password == "admin":
            response["response"] = "User authenticated Successfully"
        else:
            response["error"] = "Please check username and password"
    else:
        response["error"] = "Kindly Provide username and password as command line arguments"
    print(json.dumps(response))

authenticate()