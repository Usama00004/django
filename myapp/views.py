from django.shortcuts import render
from django.http import JsonResponse
from .models import User

def index(request):
    return render(request, 'index.html')

def submit_data(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        User.objects.create(name=name, phone=phone)
        return JsonResponse({'message': 'Data submitted successfully!'})
    return JsonResponse({'message': 'Invalid request!'})

def get_data(request):
    users = User.objects.all().values()  # Convert queryset to dictionary
    return JsonResponse({'users': list(users)})