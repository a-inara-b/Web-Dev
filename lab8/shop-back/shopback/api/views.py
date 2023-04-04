from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse

def my_api_view(request):
    data = {
        'name': request.user.username,  # username of current logged-in user, otherwise Anonymous
        'url': 'https://www.pyscoop.com/',
        'skills': ['Python', 'Django'],
    }
    return JsonResponse(data)
