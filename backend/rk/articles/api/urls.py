from django.urls import path,include

from .views import ReactFilterView

from .views import UserViewSet
from rest_framework.routers import DefaultRouter



router = DefaultRouter()
router.register(r'art', UserViewSet, base_name='user')



urlpatterns = [
    path('filter/', ReactFilterView.as_view(), name='react'),
    path('', include(router.urls))
]


