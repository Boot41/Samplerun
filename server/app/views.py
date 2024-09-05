from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Job
from .serializers import JobSerializer

@api_view(['POST'])
def create_job(request):
    if request.method == 'POST':
        serializer = JobSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def list_jobs(request, employer_id):
    if request.method == 'GET':
        jobs = Job.objects.filter(employer_id=employer_id)
        serializer = JobSerializer(jobs, many=True)
        return Response(serializer.data)
