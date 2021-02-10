"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from todo import views                            # add this
from rest_framework import routers                    # add this
from django.urls import path, include                 # add this

router = routers.DefaultRouter()                      # add this
router.register(r'tasks', views.TodoView, 'task')     # add this

# from django.urls import path  - DELETE THIS

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))                # add this
]

'''
This is the final step that completes the building of the API, we can now perform CRUD operations on the todo model
router allows us to do 2 things :
/todo/ -  this returns a list of all the Todo items (create and read operations can b done here)
/todos/id - this returns a single todo item using id primary key (update and delete operations ) 
'''
