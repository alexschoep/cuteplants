from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from django.shortcuts import get_object_or_404
from stemapi.models import Plant

# Create your views here.

def index(request):
	return HttpResponse("You have reached api.cuteplants.net")

def plants(request):
	if request.method == 'GET':
		if request.GET.get('id'):
			response =  serializers.serialize('json', [get_object_or_404(Plant, pk=request.GET.get('id'))])
		else:
			response =  serializers.serialize('json', Plant.objects.all())
		return HttpResponse(response, content_type='text/json')